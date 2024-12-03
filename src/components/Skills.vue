<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { Carousel3d, Slide } from '@nanoandrew4/vue3-carousel-3d';

import '@nanoandrew4/vue3-carousel-3d/dist/style.css';

const { t } = useI18n()

const Skills = [
  {
    img: new URL('@/assets/Logos/Vue-logo.webp', import.meta.url).href,
    name: 'Vue.js'
  },
  {
    img: new URL('@/assets/Logos/Laravel-logo.png', import.meta.url).href,
    name: 'Laravel'
  },
  {
    img: new URL('@/assets/Logos/Docker-logo.png', import.meta.url).href,
    name: 'Docker'
  },
  {
    img: new URL('@/assets/Logos/Git-logo.png', import.meta.url).href,
    name: 'GIT'
  },
  {
    img: new URL('@/assets/Logos/php-logo.png', import.meta.url).href,
    name: 'PHP'
  },
  {
    img: new URL('@/assets/Logos/React-logo.png', import.meta.url).href,
    name: 'React'
  },
  {
    img: new URL('@/assets/Logos/Tailwind-logo.png', import.meta.url).href,
    name: 'Tailwind'
  },
  {
    img: new URL('@/assets/Logos/Vitejs-logo.png', import.meta.url).href,
    name: 'Vite'
  },
  {
    img: new URL('@/assets/Logos/sql-logo.png', import.meta.url).href,
    name: 'SQL'
  },
]

const isAutoplay = ref(true);
  
const stopAutoplay = () => {
  isAutoplay.value = false;
};

const startAutoplay = () => {
  isAutoplay.value = true;
};

</script>

<template>
  <section class="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section class="flex justify-center">
        <h2 class="title-section" v-text="t('skills.title')" />
      </section>
      <p class="mt-4 mb-8">
        Soy un desarrollador apasionado con sólidas habilidades en comunicación, trabajo en equipo y resolución de problemas. Me adapto fácilmente a nuevos desafíos y disfruto liderando proyectos tanto individualmente como en grupo. Mi conjunto de habilidades técnicas incluye
      </p>
      <Carousel3d 
        :autoplay="isAutoplay" 
        :autoplay-time="2000" 
        @mouseenter="stopAutoplay" 
        @mouseleave="startAutoplay"
      >
        <Slide v-for="(skill, index) in Skills" :key="index" :index="index">
          <div class="cursor-pointer flex items-center justify-center">
            <img :src="skill.img" :alt="skill.name" class="h-16 md:h-28" />
          </div>
        </Slide>
      </Carousel3d>
    </div>
  </section>
</template>