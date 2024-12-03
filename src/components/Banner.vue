<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { useContactStore } from '@/stores/contact/contact'
    import { usePageStore } from '@/stores/page/page'
    import { computed } from 'vue'
    
    const usePage = usePageStore()
    const { t, locale } = useI18n()
    const useContact = useContactStore()

    const texts = computed(() => {
        const textLang = locale.value === 'es' ? 'es' : 'en'
        const pageData = usePage.pageData 
        
        return {
            name: pageData.name?.[textLang] ?? t('banner.title'),
            profession: pageData.profession?.[textLang] ?? t('banner.profession'),
            line1: pageData['banner-description-line-1']?.[textLang] ?? t('banner.description_line_1'),
            line2: pageData['banner-description-line-2']?.[textLang] ?? t('banner.description_line_2'),
            skillsFeatured: pageData['admin-skills'] ? pageData['admin-skills'].filter(s => s.featured == 1).map(s => s.name).join(', ') : 'Vue'
        }
    })

</script>

<template>
    <section class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <section class="w-full flex flex-col md:flex-row justify-between items-center">
            <section>
                <h1 class="text-2xl md:text-4xl mb-4">
                    <span v-text="texts.name" /> - <span v-text="texts.profession" />
                </h1>
                <h2 class="text-lg md:text-2xl" v-text="texts.line1" />
                <h2 class="text-lg md:text-2xl mb-4"> {{ texts.line2 }}
                    <strong v-text="texts.skillsFeatured" />
                </h2>
                <button class="text-lg px-4 py-2 bg-blue-700 hover:bg-blue-900 dark:bg-opacity-10 text-white transition-colors duration-200"
                    v-text="t('common.contact')" 
                    @click="useContact.handleShowModal(true)"
                />
            </section>
            <section class="flex justify-between items-center">
                <img src="@/assets/img-example.png" class="w-full" />
            </section>
        </section>
    </section>
</template>