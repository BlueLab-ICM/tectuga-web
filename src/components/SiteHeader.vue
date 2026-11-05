<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { t, lang, languages, setLang } from '../i18n'

const sections = ['about', 'objectives', 'approach', 'sites', 'team', 'news']
const scrolled = ref(false)
const open = ref(false)
const active = ref('')

function onScroll() {
  scrolled.value = window.scrollY > 40
  let current = ''
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top < 140) current = id
  }
  active.value = current
}
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="{ scrolled, open }">
    <div class="container bar">
      <a href="#top" class="brand" @click="open = false">
        <span class="name">TECTUGA</span>
        <span class="sep" />
        <img :src="scrolled || open ? './img/logos/icm.png' : './img/logos/ICM_white.png'" alt="ICM-CSIC" />
      </a>

      <button class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span /><span /><span />
      </button>

      <nav>
        <a v-for="id in sections" :key="id" :href="'#' + id" :class="{ active: active === id }" @click="open = false">
          {{ t.nav[id] }}
        </a>
        <div class="langs">
          <button v-for="l in languages" :key="l" :class="{ selected: l === lang }" @click="setLang(l)">{{ l }}</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--header-h);
  z-index: 10;
  color: var(--white);
  transition: background .25s, box-shadow .25s, color .25s;
}
header.scrolled, header.open {
  background: var(--white);
  color: var(--navy);
  box-shadow: 0 1px 0 rgba(var(--navyRGB), .12);
}
.bar { height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 24px; }

.brand { display: flex; align-items: center; gap: 14px; color: inherit; }
.brand:hover { text-decoration: none; }
.brand .name { font-weight: 700; font-size: 24px; letter-spacing: .12em; }
.brand .sep { width: 1px; height: 30px; background: currentColor; opacity: .4; }
.brand img { height: 30px; width: auto; }

nav { display: flex; align-items: center; gap: 28px; }
nav > a {
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 6px 0;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
}
nav > a:hover { text-decoration: none; border-bottom-color: var(--cyan); }
nav > a.active { border-bottom-color: var(--pink); }

.langs { display: flex; gap: 2px; }
.langs button {
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius);
  color: inherit;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 8px;
  cursor: pointer;
  opacity: .7;
}
.langs button:hover { opacity: 1; }
.langs button.selected { opacity: 1; border-color: currentColor; }

.burger { display: none; background: none; border: 0; cursor: pointer; padding: 8px; }
.burger span { display: block; width: 24px; height: 2px; background: currentColor; margin: 5px 0; }

@media (max-width: 1100px) {
  .burger { display: block; color: inherit; }
  nav {
    position: fixed;
    top: var(--header-h);
    left: 0; right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--white);
    color: var(--navy);
    padding: 8px 16px 24px;
    box-shadow: 0 8px 16px rgba(var(--navyRGB), .12);
    display: none;
  }
  header.open nav { display: flex; }
  nav > a { width: 100%; padding: 14px 0; border-bottom: 1px solid var(--grey); }
  .langs { margin-top: 16px; }
}
</style>
