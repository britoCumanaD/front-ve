<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const technicalSkills = [
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Python', level: 70 }
]

const softSkills = [
  'leadership',
  'communication',
  'teamwork',
  'problemSolving',
  'adaptability'
]
</script>

<template>
  <section class="py-16 bg-white dark:bg-gray-900 transition-colors duration-200" id="skills">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        {{ t('skills.title') }}
      </h2>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
          <h3 class="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">{{ t('skills.technical') }}</h3>
          <div class="space-y-6">
            <div v-for="skill in technicalSkills" :key="skill.name" class="relative">
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-sm font-medium text-indigo-600 dark:text-indigo-400">{{ skill.level }}%</span>
              </div>
              <div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <h3 class="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">{{ t('skills.soft') }}</h3>
          <ul class="space-y-4">
            <li
              v-for="skill in softSkills"
              :key="skill"
              class="flex items-center text-gray-700 dark:text-gray-300 bg-indigo-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium">{{ t(`skills.softSkills.${skill}`) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>