<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Header from './sections/Header.vue'
import { useOauthTokenStore } from '@/stores/oauth/token'

const useOauthToken = useOauthTokenStore()
if(!useOauthToken.oauthToken)
  useOauthToken.getOauthToken()

const { t } = useI18n()

</script>

<template>
  <div class="">
    <Header />
    <main class="mt-28 md:mt-48 content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-gray-900 dark:bg-black text-white py-8 content">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-300">
          &copy; Daniel Brito {{ new Date().getFullYear() }} {{ t('footer.rights') }}
        </p>
      </div>
    </footer>
  </div>
</template>