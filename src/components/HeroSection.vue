<script setup>
import { t } from '../i18n'
</script>

<template>
  <section id="top" class="hero">
    <div class="container grid">
      <div class="text">
        <p class="kicker">{{ t.hero.kicker }}</p>
        <h1><span class="acronym">TECTUGA</span>{{ t.hero.title }}</h1>
        <p class="subtitle">{{ t.hero.subtitle }}</p>
        <a href="#about" class="btn">{{ t.hero.cta }}</a>
      </div>

      <!-- A tagged turtle under three ASVs that listen to it -->
      <svg class="art" viewBox="0 0 480 480" aria-hidden="true">
        <defs>
          <radialGradient id="glow" cx="50%" cy="58%" r="50%">
            <stop offset="0" stop-color="#0092bc" stop-opacity=".35" />
            <stop offset="1" stop-color="#0092bc" stop-opacity="0" />
          </radialGradient>
        </defs>
        <circle cx="240" cy="270" r="220" fill="url(#glow)" />

        <!-- surface and the orbit of the fleet -->
        <ellipse cx="240" cy="110" rx="190" ry="44" fill="none" stroke="#fff" stroke-opacity=".35" stroke-dasharray="4 8" />
        <g class="asv" v-for="(p, i) in [[90, 118], [300, 70], [390, 128]]" :key="i" :transform="`translate(${p[0]} ${p[1]})`">
          <rect x="-16" y="-6" width="32" height="5" rx="1" fill="#00bfb2" />
          <rect x="-16" y="3" width="32" height="5" rx="1" fill="#00bfb2" />
          <rect x="-2" y="-4" width="4" height="10" fill="#00bfb2" />
          <line x1="0" y1="-6" x2="0" y2="-20" stroke="#00bfb2" stroke-width="2" />
          <line :x1="0" :y1="10" :x2="240 - p[0]" :y2="300 - p[1]" stroke="#fff" stroke-opacity=".25" stroke-dasharray="2 6" />
        </g>

        <!-- acoustic pings -->
        <circle class="ping" cx="240" cy="300" r="40" />
        <circle class="ping d2" cx="240" cy="300" r="40" />
        <circle class="ping d3" cx="240" cy="300" r="40" />

        <!-- turtle -->
        <g transform="translate(240 300) rotate(-18)" fill="#fff">
          <ellipse cx="0" cy="-74" rx="17" ry="21" />
          <path d="M-40 -34 C-90 -70 -120 -50 -128 -30 C-100 -30 -70 -20 -46 -8 Z" />
          <path d="M40 -34 C90 -70 120 -50 128 -30 C100 -30 70 -20 46 -8 Z" />
          <path d="M-34 40 C-60 52 -70 72 -64 84 C-48 76 -36 62 -22 52 Z" />
          <path d="M34 40 C60 52 70 72 64 84 C48 76 36 62 22 52 Z" />
          <path d="M0 62 L-7 84 L7 84 Z" />
          <ellipse cx="0" cy="4" rx="54" ry="66" />
          <g fill="none" stroke="#012169" stroke-width="3" stroke-opacity=".55">
            <ellipse cx="0" cy="2" rx="22" ry="27" />
            <path d="M0 -25 L0 -62 M0 29 L0 66 M-20 -12 L-50 -30 M20 -12 L50 -30 M-20 16 L-52 30 M20 16 L52 30" />
          </g>
          <!-- the camera on its shell -->
          <rect x="-11" y="-30" width="22" height="16" rx="2" fill="#ef6079" />
        </g>
      </svg>
    </div>
    <a href="#about" class="scroll" aria-label="Scroll"><span /></a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(var(--header-h) + 40px) 0 80px;
  color: var(--white);
  background:
    linear-gradient(180deg, rgba(1, 33, 105, 0) 60%, rgba(0, 20, 70, .6)),
    linear-gradient(135deg, var(--navy) 0%, var(--ultramarine) 55%, #0a4a8f 100%);
  overflow: hidden;
}
.grid { display: grid; grid-template-columns: 1.1fr .9fr; align-items: center; gap: 40px; width: 100%; }

.kicker {
  font-size: 15px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase;
  color: var(--teal); margin-bottom: 20px;
}
h1 { font-size: clamp(40px, 5.6vw, 76px); font-weight: 700; margin-bottom: 24px; }
.acronym {
  display: block;
  font-size: .42em;
  letter-spacing: .3em;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, .75);
}
.subtitle { font-size: clamp(19px, 1.8vw, 23px); max-width: 34ch; opacity: .9; margin-bottom: 36px; }

.art { width: 100%; max-width: 480px; justify-self: center; }
.ping { fill: none; stroke: #fff; stroke-width: 1.5; transform-origin: 240px 300px; animation: ping 3.6s ease-out infinite; opacity: 0; }
.ping.d2 { animation-delay: 1.2s; }
.ping.d3 { animation-delay: 2.4s; }
@keyframes ping { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(4.5); opacity: 0; } }
.asv { animation: bob 4s ease-in-out infinite; }
@keyframes bob { 50% { translate: 0 -3px; } }
@media (prefers-reduced-motion: reduce) { .ping, .asv { animation: none; } }

.scroll {
  position: absolute; left: 50%; bottom: 28px; translate: -50% 0;
  width: 26px; height: 42px; border: 2px solid rgba(255, 255, 255, .6); border-radius: 13px;
}
.scroll span { position: absolute; left: 50%; top: 8px; width: 4px; height: 8px; margin-left: -2px; background: #fff; border-radius: 2px; animation: wheel 1.8s infinite; }
@keyframes wheel { to { transform: translateY(12px); opacity: 0; } }

@media (max-width: 860px) {
  .grid { grid-template-columns: 1fr; }
  .art { max-width: 320px; order: -1; }
  .scroll { display: none; }
}
</style>
