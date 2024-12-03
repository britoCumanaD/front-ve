<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'
import DarkIcon from './common/icons/DarkIcon.vue';
import LightIcon from './common/icons/LightIcon.vue';

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-lg bg-change-white button-change-mode"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <DarkIcon v-if="!isDark" class="w-5 h-5" />
    <LightIcon v-else class="w-5 h-5" />
  </button>
</template>