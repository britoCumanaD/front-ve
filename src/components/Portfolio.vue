<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { usePageStore } from '@/stores/page/page'
  import { computed } from 'vue'

  const { t } = useI18n()
  const usePage = usePageStore()
  const projects = computed(() => {
    const pageData = usePage.pageData 
    return pageData['admin-porfolio'] ? pageData['admin-porfolio'].map(p => ({
      title: p.title,
      description: p.description,
      tags: p.tags?.split(','),
      image: p.image,
      link: p.link
    })) : []
  })

</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section class="flex justify-center">
        <h2 class="title-section" v-text="t('portfolio.title')" />
      </section>

      <div class="grid md:grid-cols-3 justify-items-center gap-8">
        <article
          v-for="(project, i) in projects" :key="`project-${i}`"
          class="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:shadow-md transition-all duration-300 w-full"
        >
          <div class="relative">
            <img v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-32 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-3 text-black dark:text-white truncate" v-text="project.title" :title="project.title"/>
            <p class="text-black dark:text-white mb-6 leading-relaxed" v-text="project.description" />
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tags"
                :key="tech"
                class="px-4 py-1.5 bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-white rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
            <a v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 hover:dark:text-blue-600 font-semibold transition-colors duration-300"
            >
              {{ t('portfolio.viewProject') }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>