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

      <!-- A tagged turtle with a camera, circled by a fleet of three BlueBoat ASVs that listen to it -->
      <svg class="art" viewBox="0 0 480 480" aria-hidden="true">
      <defs><radialGradient id="shellg" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d9e8f7"/></radialGradient>
      <radialGradient id="glow" cx="50%" cy="58%" r="50%">
        <stop offset="0" stop-color="#0092bc" stop-opacity=".35"/><stop offset="1" stop-color="#0092bc" stop-opacity="0"/>
      </radialGradient></defs>
      <circle cx="240" cy="250" r="225" fill="url(#glow)"/>
      <circle cx="240" cy="248" r="168" fill="none" stroke="#fff" stroke-opacity=".35" stroke-dasharray="4 8"/>
      <path d="M-6 -5 L4 0 L-6 5" transform="translate(385.5 164.0) rotate(-120)" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/><path d="M-6 -5 L4 0 L-6 5" transform="translate(240.0 416.0) rotate(0)" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/><path d="M-6 -5 L4 0 L-6 5" transform="translate(94.5 164.0) rotate(120)" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/><circle class="ping" cx="240" cy="248" r="40"/><circle class="ping d2" cx="240" cy="248" r="40"/><circle class="ping d3" cx="240" cy="248" r="40"/>
      <g class="fleet">
      <polygon points="240.0,80.0 385.5,332.0 94.5,332.0" fill="#fff" fill-opacity=".04" stroke="#00bfb2" stroke-opacity=".35" stroke-width="1"/>
      <line x1="240" y1="248" x2="240.0" y2="80.0" stroke="#fff" stroke-opacity=".3" stroke-dasharray="2 6"/><line x1="240" y1="248" x2="385.5" y2="332.0" stroke="#fff" stroke-opacity=".3" stroke-dasharray="2 6"/><line x1="240" y1="248" x2="94.5" y2="332.0" stroke="#fff" stroke-opacity=".3" stroke-dasharray="2 6"/>
      </g>
      <g transform="translate(240 260) rotate(-25) scale(.78)"><g class="turtle">
        <g fill="#ffffff">
          <path d="M-36 -38 C-62 -66 -104 -78 -136 -64 C-128 -54 -104 -44 -82 -34 C-66 -26 -54 -18 -46 -12 Z"/><path d="M-36 -38 C-62 -66 -104 -78 -136 -64 C-128 -54 -104 -44 -82 -34 C-66 -26 -54 -18 -46 -12 Z" transform="scale(-1 1)"/>
          <path d="M-30 42 C-46 48 -62 62 -62 78 C-50 76 -36 64 -22 54 Z"/><path d="M-30 42 C-46 48 -62 62 -62 78 C-50 76 -36 64 -22 54 Z" transform="scale(-1 1)"/>
          <path d="M-5 64 L0 84 L5 64 Z"/>
          <path d="M0 -106 C9 -106 15 -100 17 -90 C19 -80 17 -68 12 -60 L-12 -60 C-17 -68 -19 -80 -17 -90 C-15 -100 -9 -106 0 -106 Z"/>
          </g>
        <path d="M0 -64 C34 -64 54 -40 54 -6 C54 30 30 58 0 68 C-30 58 -54 30 -54 -6 C-54 -40 -34 -64 0 -64 Z" fill="url(#shellg)"/>
        <g fill="#cfe3f5">
          <path d="M-82 -34 C-104 -44 -128 -54 -136 -64 C-118 -58 -96 -50 -80 -40 Z"/>
          <path d="M-82 -34 C-104 -44 -128 -54 -136 -64 C-118 -58 -96 -50 -80 -40 Z" transform="scale(-1 1)"/>
        </g>
        <ellipse cx="-14" cy="-90" rx="2.4" ry="3.6" fill="#012169"/><ellipse cx="14" cy="-90" rx="2.4" ry="3.6" fill="#012169"/>
        <path d="M0 -104 L0 -94 M-6 -94 L6 -94 M-9 -94 L-11 -78 L0 -72 L11 -78 L9 -94 M-11 -78 L-14 -68 M11 -78 L14 -68" fill="none" stroke="#012169" stroke-opacity=".45" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M0 -54 C27 -54 45 -34 45 -6 C45 25 25 48 0 57 C-25 48 -45 25 -45 -6 C-45 -34 -27 -54 0 -54 Z" fill="none" stroke="#012169" stroke-opacity=".45" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M0.0 -62.0 L0.0 -69.0 M13.8 -59.7 L15.2 -66.4 M26.5 -53.1 L29.2 -59.0 M37.0 -42.7 L40.8 -47.3 M44.6 -29.3 L49.1 -32.2 M48.5 -14.0 L53.5 -15.0 M48.5 2.0 L53.5 3.0 M44.6 17.3 L49.1 20.2 M37.0 30.7 L40.8 35.3 M26.5 41.1 L29.2 47.0 M13.8 47.7 L15.2 54.4 M0.0 50.0 L0.0 57.0 M-13.8 47.7 L-15.2 54.4 M-26.5 41.1 L-29.2 47.0 M-37.0 30.7 L-40.8 35.3 M-44.6 17.3 L-49.1 20.2 M-48.5 2.0 L-53.5 3.0 M-48.5 -14.0 L-53.5 -15.0 M-44.6 -29.3 L-49.1 -32.2 M-37.0 -42.7 L-40.8 -47.3 M-26.5 -53.1 L-29.2 -59.0 M-13.8 -59.7 L-15.2 -66.4 " fill="none" stroke="#012169" stroke-opacity=".45" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M-9 -50 L-15 -39 L-9 -28 L-16 -17 L-10 -6 L-16 5 L-10 16 L-15 26 L-9 36 L-11 45 L-5 53 M9 -50 L15 -39 L9 -28 L16 -17 L10 -6 L16 5 L10 16 L15 26 L9 36 L11 45 L5 53 M-9 -28 L9 -28 M-10 -6 L10 -6 M-10 16 L10 16 M-9 36 L9 36  M-9 -28 L-38 -40 M-10 -6 L-46 -10 M-10 16 L-44 22 M-9 36 L-30 50 M9 -28 L38 -40 M10 -6 L46 -10 M10 16 L44 22 M9 36 L30 50" fill="none" stroke="#012169" stroke-opacity=".45" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
        <g class="cam">
        <rect x="-10" y="-44" width="20" height="24" rx="4" fill="#ef6079"/>
        <rect x="-10" y="-25" width="20" height="5" rx="1.5" fill="#c94461"/>
        <circle cx="0" cy="-39" r="5" fill="#012169"/><circle cx="0" cy="-39" r="2.6" fill="#2a5fd0"/><circle cx="-1.3" cy="-40.3" r="1" fill="#fff"/>
        <line x1="7" y1="-22" x2="20" y2="-8" stroke="#ef6079" stroke-width="2" stroke-linecap="round"/>
        <circle cx="20" cy="-8" r="2" fill="#ef6079"/>
      </g>
      </g></g>
      <g class="fleet"><g transform="translate(240.0 80.0) rotate(-180)"><g class="asv"><g transform="scale(1.45)"><g fill="none" stroke="#fff" stroke-linecap="round">
          <path d="M-34 -17 C-50 -20 -48 -22 -60 -27" stroke-opacity=".45" stroke-width="2"/>
          <path d="M-34 17 C-50 20 -48 22 -60 27" stroke-opacity=".45" stroke-width="2"/>
          <path d="M-36 -12 L-52 -12 M-36 12 L-52 12" stroke-opacity=".3" stroke-width="3" stroke-dasharray="6 5"/>
        </g>
        <path d="M-30 -5 L18 -5 C28 -5 34 -2 36 0 C34 2 28 5 18 5 L-30 5 Z" transform="translate(0 -15)" fill="#00bfb2"/>
        <path d="M-30 -5 L18 -5 C28 -5 34 -2 36 0 C34 2 28 5 18 5 L-30 5 Z" transform="translate(0 15)" fill="#00bfb2"/>
        <rect x="-34" y="-19" width="5" height="8" rx="1.5" fill="#012169"/><rect x="-34" y="11" width="5" height="8" rx="1.5" fill="#012169"/>
        <rect x="-20" y="-14" width="5" height="28" fill="#c9d6e8"/><rect x="12" y="-14" width="5" height="28" fill="#c9d6e8"/>
        <rect x="-13" y="-8" width="22" height="16" rx="3" fill="#fff"/>
        <circle cx="2" cy="0" r="3.5" fill="#012169"/><circle cx="-7" cy="0" r="2" fill="#ef6079"/></g></g></g><g transform="translate(385.5 332.0) rotate(-60)"><g class="asv"><g transform="scale(1.45)"><g fill="none" stroke="#fff" stroke-linecap="round">
          <path d="M-34 -17 C-50 -20 -48 -22 -60 -27" stroke-opacity=".45" stroke-width="2"/>
          <path d="M-34 17 C-50 20 -48 22 -60 27" stroke-opacity=".45" stroke-width="2"/>
          <path d="M-36 -12 L-52 -12 M-36 12 L-52 12" stroke-opacity=".3" stroke-width="3" stroke-dasharray="6 5"/>
        </g>
        <path d="M-30 -5 L18 -5 C28 -5 34 -2 36 0 C34 2 28 5 18 5 L-30 5 Z" transform="translate(0 -15)" fill="#00bfb2"/>
        <path d="M-30 -5 L18 -5 C28 -5 34 -2 36 0 C34 2 28 5 18 5 L-30 5 Z" transform="translate(0 15)" fill="#00bfb2"/>
        <rect x="-34" y="-19" width="5" height="8" rx="1.5" fill="#012169"/><rect x="-34" y="11" width="5" height="8" rx="1.5" fill="#012169"/>
        <rect x="-20" y="-14" width="5" height="28" fill="#c9d6e8"/><rect x="12" y="-14" width="5" height="28" fill="#c9d6e8"/>
        <rect x="-13" y="-8" width="22" height="16" rx="3" fill="#fff"/>
        <circle cx="2" cy="0" r="3.5" fill="#012169"/><circle cx="-7" cy="0" r="2" fill="#ef6079"/></g></g></g><g transform="translate(94.5 332.0) rotate(60)"><g class="asv"><g transform="scale(1.45)"><g fill="none" stroke="#fff" stroke-linecap="round">
          <path d="M-34 -17 C-50 -20 -48 -22 -60 -27" stroke-opacity=".45" stroke-width="2"/>
          <path d="M-34 17 C-50 20 -48 22 -60 27" stroke-opacity=".45" stroke-width="2"/>
          <path d="M-36 -12 L-52 -12 M-36 12 L-52 12" stroke-opacity=".3" stroke-width="3" stroke-dasharray="6 5"/>
        </g>
        <path d="M-30 -5 L18 -5 C28 -5 34 -2 36 0 C34 2 28 5 18 5 L-30 5 Z" transform="translate(0 -15)" fill="#00bfb2"/>
        <path d="M-30 -5 L18 -5 C28 -5 34 -2 36 0 C34 2 28 5 18 5 L-30 5 Z" transform="translate(0 15)" fill="#00bfb2"/>
        <rect x="-34" y="-19" width="5" height="8" rx="1.5" fill="#012169"/><rect x="-34" y="11" width="5" height="8" rx="1.5" fill="#012169"/>
        <rect x="-20" y="-14" width="5" height="28" fill="#c9d6e8"/><rect x="12" y="-14" width="5" height="28" fill="#c9d6e8"/>
        <rect x="-13" y="-8" width="22" height="16" rx="3" fill="#fff"/>
        <circle cx="2" cy="0" r="3.5" fill="#012169"/><circle cx="-7" cy="0" r="2" fill="#ef6079"/></g></g></g></g>
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
.ping { fill: none; stroke: #fff; stroke-width: 1.5; transform-origin: 240px 248px; animation: ping 3.6s ease-out infinite; opacity: 0; }
.ping.d2 { animation-delay: 1.2s; }
.ping.d3 { animation-delay: 2.4s; }
@keyframes ping { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(4.5); opacity: 0; } }
.asv { animation: bob 4s ease-in-out infinite; }
@keyframes bob { 50% { translate: 0 -3px; } }
.fleet { transform-origin: 240px 248px; animation: orbit 36s linear infinite; }
@keyframes orbit { to { rotate: -360deg; } }
@media (prefers-reduced-motion: reduce) { .ping, .asv, .fleet { animation: none; } }

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
