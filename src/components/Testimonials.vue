<script setup lang="ts">
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css'
  import { computed } from 'vue'
  import { usePageStore } from '@/stores/page/page'

  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const usePage = usePageStore()
  const testimonials = computed(() => {
    const pageData = usePage.pageData 
    return pageData['admin-testimonials'] ? pageData['admin-testimonials'] : []
  })
  
  const config = {
    loop: true, 
  };
  const breakpoints = {
    0: {
      itemsToShow: 1,
    },
    768: {
      itemsToShow: 2,
    },
    1024: {
      itemsToShow: 3,
    },
  };

</script>

<template>
  <section class="py-16 bg-gray-100 dark:bg-gray-900" id="testimonials">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section class="flex justify-center">
        <h2 class="title-section" v-text="t('testimonials.title')" />
      </section>
      
      <Carousel v-bind="config" :breakpoints="breakpoints" >
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
            <div
              class="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl shadow-lg transform  transition-all duration-300 md:m-8 w-full"
            >
              <div class="flex flex-col items-center mb-2">
                <img v-if="testimonial.image"
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div class="ml-4">
                  <h3 class="text-xl font-semibold text-black dark:text-white truncate">{{ testimonial.name }}</h3>
                  <p v-if="testimonial.cargo"  
                    class="text-blue-600 dark:text-blue-300 font-medium truncate" 
                    v-text="testimonial.cargo" 
                  />
                  <a v-if="testimonial.email" 
                    class="text-blue-600 dark:text-blue-300 font-medium truncate" 
                    :href="`mailto:${testimonial.email}`"
                    v-text="testimonial.email" 
                  />
                </div>
              </div>
              <blockquote class="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed h-32 light-scroll"
                v-text="testimonial.testimonial"
              />
            </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>