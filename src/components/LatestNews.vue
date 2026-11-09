<script setup>
import { computed } from 'vue'
import { t, lang, languages } from '../i18n'
import news from '../news.js'

// The three newest items, as small cards right under the hero.
// Each card jumps to the full item in the News section.
const i = computed(() => languages.indexOf(lang.value))
const latest = computed(() => [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3))
const fmt = (d) => new Date(d + 'T12:00:00').toLocaleDateString(lang.value, { day: 'numeric', month: 'short', year: 'numeric' })
</script>

<template>
  <section v-if="latest.length" id="latest" class="latest">
    <div class="container">
      <div class="head">
        <h2>{{ t.news.latest }}</h2>
        <a href="#news" class="all">{{ t.news.all }} →</a>
      </div>
      <div class="cards">
        <a v-for="n in latest" :key="n.date + n.title[2]" class="card" :href="'#news-' + n.date">
          <img v-if="n.image" :src="'./' + n.image" alt="" loading="lazy" />
          <div class="body">
            <div class="meta">
              <span class="type">{{ t.news.types[n.type] || n.type }}</span>
              <time :datetime="n.date">{{ fmt(n.date) }}</time>
            </div>
            <h3>{{ n.title[i] }}</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.latest { padding: 48px 0; background: var(--lilac); }
.head { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
h2 { font-size: 15px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--pink); margin: 0; }
.all { font-weight: 600; white-space: nowrap; }
.cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.card {
  display: flex; gap: 14px; align-items: center; padding: 12px;
  background: var(--white); border-radius: var(--radius); border-top: 3px solid var(--pink);
  color: inherit; text-decoration: none; transition: transform .2s, box-shadow .2s;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(var(--navyRGB), .12); }
img { width: 96px; height: 64px; object-fit: cover; border-radius: var(--radius); flex: none; }
.body { min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.meta { display: flex; gap: 10px; align-items: baseline; flex-wrap: wrap; }
.type { font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--cyan); }
time { font-size: 13px; color: rgba(var(--navyRGB), .7); }
h3 { font-size: 17px; line-height: 1.25; margin: 0; color: var(--ultramarine); }

@media (max-width: 900px) { .cards { grid-template-columns: 1fr; gap: 12px; } }
</style>
