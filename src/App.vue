<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from './components/LanguageSelector.vue'
import Navigation from './components/Navigation.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
    <header class="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <Navigation />
          <div class="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-gray-900 dark:bg-black text-white mt-12 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-300">
          &copy; {{ new Date().getFullYear() }} {{ t('footer.rights') }}
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>