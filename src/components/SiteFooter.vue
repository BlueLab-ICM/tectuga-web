<script setup>
import { t } from '../i18n'
</script>

<template>
  <footer>
    <div class="container">
      <div class="top">
        <div class="brand">
          <span class="name">TECTUGA</span>
          <p>{{ t.hero.title }}</p>
        </div>
        <div class="logos">
          <a href="https://icm.csic.es" target="_blank" rel="noopener"><img :src="'img/logos/ICM_white.png'" alt="Institut de Ciències del Mar" /></a>
          <a href="https://www.csic.es" target="_blank" rel="noopener"><img :src="'img/logos/CSIC_white.png'" alt="CSIC" /></a>
        </div>
      </div>
      <p class="funding">{{ t.footer.funding }}</p>
      <div class="bottom">
        <div>
          <strong>{{ t.footer.institute }}</strong><br />
          {{ t.footer.address }}
        </div>
        <div class="right">
          {{ t.footer.madeBy }} ·
          <a href="https://github.com/BlueLab-ICM/tectuga-web" target="_blank" rel="noopener">{{ t.footer.code }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer { background: #00163f; color: rgba(255, 255, 255, .85); padding: 64px 0 40px; font-size: 16px; }
.top { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; padding-bottom: 32px; border-bottom: 1px solid rgba(255, 255, 255, .15); }
.name { font-size: 32px; font-weight: 700; letter-spacing: .14em; color: var(--white); }
.brand p { margin: 0; color: var(--teal); }
.logos { display: flex; gap: 36px; align-items: center; }
.logos img { height: 44px; width: auto; }
.funding { margin: 24px 0; font-size: 15px; }
.bottom { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; font-size: 15px; }
.bottom strong { color: var(--white); }
a { color: var(--teal); }
</style>
