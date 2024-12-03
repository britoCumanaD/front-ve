<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
]

const saveLanguage = () => {
  localStorage.setItem('language', locale.value)
}
</script>

<template>
  <div class="relative">
    <select
      v-model="locale"
      @change="saveLanguage"
      class="appearance-none bg-white px-4 py-2 pr-8 rounded-lg border border-gray-300 text-gray-700 font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 cursor-pointer"
    >
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>