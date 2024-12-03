import { ref } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    localStorage.setItem('dark', isDark.value ? '1' : '0')
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const defaultValue: boolean = localStorage.getItem('dark') === '1' ? true : false;
  if (typeof window !== 'undefined' && !localStorage.getItem('dark')) {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    updateTheme()
  }
  if(defaultValue)
    toggleDarkMode()

  return {
    isDark,
    toggleDarkMode
  }
}