<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import LanguageSelector from '@/components/LanguageSelector.vue'
  import ThemeToggle from '@/components/ThemeToggle.vue'
  
  const { t } = useI18n()

</script>

<template>
    <header class="absolute top-0 z-40 pt-11 pb-4 md:py-18 w-full">
      <nav class="wrapper relative z-10 items-baseline flex justify-between">
        <div class="flex items-center justify-center">
          <a href="#" aria-current="page" class="transition-all duration-300 ease-in">
            <img 
              class="h-8 md:h-16"
              alt="Vue logo"
              src="@/assets/logo.svg"
            />
          </a>
        </div>
        
        <div class="flex content items-center">
          <div class="hidden md:block">
            <ul class="menu">
              <li><a href="#" v-text="t('nav.skills')" /></li>
              <li><a href="#" v-text="t('nav.portfolio')" /></li>
              <li><a href="#" v-text="t('nav.testimonials')" /></li>
              <li><a href="#" v-text="t('nav.contact')" /></li>
            </ul> 
          </div>

          <div class="flex items-center space-x-4 relative">
            <ThemeToggle />
            <LanguageSelector />
          </div>
          
          <div data-w-id="ba46a9e8-1161-6c6a-2470-422bc4226afa" class="hamburger-btn" style="opacity: 1;">
            <div class="hamburger-btn-top"></div>
            <div class="hamburger-btn-bottom"></div>
          </div>
        </div>
        
      </nav>

      <div class="hamburger-nav-overlay" style="display: none;">
        <div class="wrapper nav-overlay">
          <ul id="main-menu" class="mobile-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-88 anim-link"><span class="jobs_count"></span><a href="#">Leistungen</a>
      <ul class="sub-menu">
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-93 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/services/webdesign/">Webdesign</a></li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-95 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/services/webdevelopment/">Webdevelopment</a></li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-90 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/services/online-marketing/">Online Marketing</a></li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4098 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/services/social-media/">Social Media</a></li>
      </ul>
      </li>
      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4073 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/projekte/">Projekte</a></li>
      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4074 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/about/">Über uns</a></li>
      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5566 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/jobs/">Karriere</a></li>
      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4075 anim-link"><span class="jobs_count"></span><a href="https://www.florianmatthias.com/contact/">Kontakt</a></li>
      </ul>			</div>
      </div>

    </header>
</template>