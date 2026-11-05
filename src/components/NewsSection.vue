<script setup>
import { ref, computed } from 'vue'
import { t, lang, languages } from '../i18n'
import news from '../news.js'

const PAGE = 6
const shown = ref(PAGE)
const i = computed(() => languages.indexOf(lang.value))
const sorted = computed(() => [...news].sort((a, b) => b.date.localeCompare(a.date)))
const visible = computed(() => sorted.value.slice(0, shown.value))

const fmt = (d) => new Date(d + 'T12:00:00').toLocaleDateString(lang.value, { day: 'numeric', month: 'long', year: 'numeric' })
</script>

<template>
  <section id="news">
    <div class="container">
      <span class="label">{{ t.news.label }}</span>
      <h2 class="section-title">{{ t.news.title }}</h2>

      <p v-if="!news.length" class="empty">{{ t.news.empty }}</p>

      <div class="grid">
        <article v-for="n in visible" :key="n.date + n.title[2]">
          <img v-if="n.image" :src="'./' + n.image" alt="" loading="lazy" />
          <div class="body">
            <div class="meta">
              <span class="type">{{ t.news.types[n.type] || n.type }}</span>
              <time :datetime="n.date">{{ fmt(n.date) }}</time>
            </div>
            <h3>{{ n.title[i] }}</h3>
            <p>{{ n.text[i] }}</p>
            <a v-if="n.link" :href="n.link" target="_blank" rel="noopener">{{ t.news.more }} →</a>
          </div>
        </article>
      </div>

      <button v-if="shown < sorted.length" class="btn" @click="shown += PAGE">{{ t.news.older }}</button>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
article { display: flex; flex-direction: column; background: var(--lilac); border-radius: var(--radius); overflow: hidden; border-top: 3px solid var(--pink); }
img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
.body { padding: 24px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.meta { display: flex; gap: 12px; align-items: baseline; flex-wrap: wrap; }
.type { font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--cyan); }
time { font-size: 15px; color: rgba(var(--navyRGB), .7); }
h3 { font-size: 24px; line-height: 1.2; margin: 0; color: var(--ultramarine); }
p { margin: 0; font-size: 17px; line-height: 1.45; }
.body a { margin-top: auto; font-weight: 600; }
.empty { font-size: 18px; color: rgba(var(--navyRGB), .7); }
.btn { margin-top: 32px; border: 1px solid var(--pink); cursor: pointer; font: inherit; }

@media (max-width: 400px) { .grid { grid-template-columns: 1fr; } }
</style>
