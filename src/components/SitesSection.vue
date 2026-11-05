<script setup>
import { t } from '../i18n'
</script>

<template>
  <section id="sites" class="sites">
    <div class="container">
      <span class="label">{{ t.sites.label }}</span>
      <h2 class="section-title">{{ t.sites.title }}</h2>

      <div class="grid">
        <article v-for="(s, i) in t.sites.items" :key="i">
          <span class="num">0{{ i + 1 }}</span>
          <h3>{{ s.region }}</h3>
          <p class="species">{{ s.species }}</p>
          <ul>
            <li v-for="p in s.places" :key="p">{{ p }}</li>
          </ul>
          <p class="text">{{ s.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sites { background: var(--navy); color: var(--white); }
.sites .section-title { color: var(--white); }
.sites .label { color: var(--teal); }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(255, 255, 255, .15); }
article { background: var(--navy); padding: 32px 32px 32px 0; }
article + article { padding-left: 32px; }
.num { font-size: 15px; font-weight: 700; letter-spacing: .14em; color: var(--pink); }
h3 { font-size: 34px; margin: 8px 0 6px; }
.species { font-size: 14px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--teal); }
ul { padding-left: 18px; margin: 0 0 16px; }
li { margin-bottom: 4px; }
li::marker { color: var(--pink); }
.text { opacity: .8; font-size: 17px; margin: 0; }

@media (max-width: 860px) {
  .grid { grid-template-columns: 1fr; background: none; }
  article, article + article { padding: 24px 0; border-top: 1px solid rgba(255, 255, 255, .15); }
}
</style>
