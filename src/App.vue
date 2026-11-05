<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ObjectivesSection from './components/ObjectivesSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import SitesSection from './components/SitesSection.vue'
import TeamSection from './components/TeamSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ObjectivesSection />
    <ApproachSection />
    <SitesSection />
    <TeamSection />
  </main>
  <SiteFooter />
</template>
