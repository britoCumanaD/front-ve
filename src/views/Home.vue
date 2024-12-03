<script setup lang="ts">
import Banner from '../components/Banner.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import { onMounted } from 'vue'
import { usePageStore } from '@/stores/page/page'
const usePage = usePageStore()

onMounted(async () => {
  await usePage.getPageInfo('home')
  document.body.classList.add("loaded");
})

</script>

<template>
  <div>
    <Banner />
    <Skills />
    <Portfolio />
    <Testimonials />
    <Contact />
  </div>
</template>