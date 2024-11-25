import { ref, watch } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialize theme based on system preference
  if (typeof window !== 'undefined') {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    updateTheme()
  }

  return {
    isDark,
    toggleDarkMode
  }
}