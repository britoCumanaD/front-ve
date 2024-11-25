<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'portfolio.projects.ecommerce',
    image: '/images/ecommerce.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/ecommerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'portfolio.projects.taskManager',
    image: '/images/task-manager.jpg',
    technologies: ['React', 'TypeScript', 'Firebase'],
    link: 'https://github.com/yourusername/task-manager'
  }
])
</script>

<template>
  <section class="py-16 bg-gray-50" id="portfolio">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">
        {{ t('portfolio.title') }}
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
        >
          <div class="relative">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-3 text-gray-900">{{ project.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ t(project.description) }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
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