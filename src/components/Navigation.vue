<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MobileMenu from './MobileMenu.vue'

const { t } = useI18n()

const navItems = [
  { id: 'skills', label: 'nav.skills', href: '#skills' },
  { id: 'portfolio', label: 'nav.portfolio', href: '#portfolio' },
  { id: 'testimonials', label: 'nav.testimonials', href: '#testimonials' },
  { id: 'contact', label: 'nav.contact', href: '#contact' }
]
</script>

<template>
  <div class="items-center hidden">
    <MobileMenu />
    <nav class="hidden md:block">
      <ul class="flex space-x-8">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
          >
            {{ t(item.label) }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>