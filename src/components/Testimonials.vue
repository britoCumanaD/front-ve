<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testimonials = ref([
  {
    id: 1,
    author: 'John Doe',
    role: 'testimonials.roles.projectManager',
    company: 'Tech Corp',
    image: '/images/testimonials/john.jpg',
    quote: 'testimonials.quotes.john'
  },
  {
    id: 2,
    author: 'Jane Smith',
    role: 'testimonials.roles.techLead',
    company: 'Innovation Labs',
    image: '/images/testimonials/jane.jpg',
    quote: 'testimonials.quotes.jane'
  }
])
</script>

<template>
  <section class="py-16 bg-white" id="testimonials">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">
        {{ t('testimonials.title') }}
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <div class="flex items-center mb-6">
            <img
              :src="testimonial.image"
              :alt="testimonial.author"
              class="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100"
            />
            <div class="ml-4">
              <h3 class="text-xl font-semibold text-gray-900">{{ testimonial.author }}</h3>
              <p class="text-indigo-600 font-medium">
                {{ t(testimonial.role) }} @ {{ testimonial.company }}
              </p>
            </div>
          </div>
          <blockquote class="text-gray-700 text-lg italic leading-relaxed">
            "{{ t(testimonial.quote) }}"
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>