import { ref, computed } from 'vue'
import ca from './ca.js'
import es from './es.js'
import en from './en.js'

const messages = { ca, es, en }
export const languages = ['ca', 'es', 'en']

function initialLang() {
  const fromHash = new URLSearchParams(location.search).get('lang')
  if (languages.includes(fromHash)) return fromHash
  try {
    const saved = localStorage.getItem('tectuga-lang')
    if (languages.includes(saved)) return saved
  } catch { /* storage blocked */ }
  const browser = (navigator.language || 'ca').slice(0, 2)
  return languages.includes(browser) ? browser : 'en'
}

export const lang = ref(initialLang())
export const t = computed(() => messages[lang.value])

export function setLang(l) {
  lang.value = l
  document.documentElement.lang = l
  try { localStorage.setItem('tectuga-lang', l) } catch { /* storage blocked */ }
}
document.documentElement.lang = lang.value
