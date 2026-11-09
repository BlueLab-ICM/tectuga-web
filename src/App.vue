<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import LatestNews from './components/LatestNews.vue'
import AboutSection from './components/AboutSection.vue'
import ObjectivesSection from './components/ObjectivesSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import SitesSection from './components/SitesSection.vue'
import TeamSection from './components/TeamSection.vue'
import NewsSection from './components/NewsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <LatestNews />
    <AboutSection />
    <ObjectivesSection />
    <ApproachSection />
    <SitesSection />
    <TeamSection />
    <NewsSection />
  </main>
  <SiteFooter />
</template>
