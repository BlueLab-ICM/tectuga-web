<script setup>
import { t } from '../i18n'

// Simple line icons, drawn on a 24x24 grid
const icons = {
  camera: 'M3 8h4l2-3h6l2 3h4v11H3z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  boat: 'M2 15h20 M2 19h20 M5 15v4 M19 15v4 M12 15V5 M12 5l5 4 M8 11h8',
  brain: 'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0V4z M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0V4z',
  map: 'M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14',
}
</script>

<template>
  <section id="approach">
    <div class="container">
      <span class="label">{{ t.approach.label }}</span>
      <h2 class="section-title">{{ t.approach.title }}</h2>

      <div class="pillars">
        <article v-for="p in t.approach.pillars" :key="p.icon">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="icons[p.icon]" /></svg>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>

      <div class="tracking">
        <figure>
          <img :src="'img/asv-tracking.png?v=2'" :alt="t.approach.trackingCaption" loading="lazy" />
          <figcaption>{{ t.approach.trackingCaption }}</figcaption>
        </figure>
        <div>
          <h3>{{ t.approach.trackingTitle }}</h3>
          <p>{{ t.approach.trackingText }}</p>
        </div>
      </div>

      <h3 class="wp-title">{{ t.approach.wpTitle }}</h3>
      <ol class="wps">
        <li v-for="(w, i) in t.approach.wps" :key="i"><span>WP{{ i + 1 }}</span>{{ w }}</li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.pillars { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-bottom: 80px; }
.pillars svg { width: 44px; height: 44px; fill: none; stroke: var(--pink); stroke-width: 1.6; stroke-linejoin: round; stroke-linecap: round; margin-bottom: 16px; }
.pillars h3 { font-size: 23px; margin-bottom: 10px; }
.pillars p { font-size: 17px; margin: 0; }

.tracking {
  display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center;
  background: var(--lilac); padding: 48px; border-radius: var(--radius); margin-bottom: 80px;
}
.tracking img { border-radius: var(--radius); }
.tracking h3 { font-size: 30px; color: var(--ultramarine); margin-bottom: 16px; }

.wp-title { font-size: 28px; color: var(--ultramarine); margin-bottom: 20px; }
.wps { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 0 32px; }
.wps li { display: flex; gap: 16px; align-items: baseline; padding: 16px 0; border-bottom: 1px solid rgba(var(--navyRGB), .15); font-weight: 500; }
.wps span { flex-shrink: 0; width: 44px; font-size: 14px; font-weight: 700; letter-spacing: .1em; color: var(--cyan); }

@media (max-width: 980px) {
  .pillars { grid-template-columns: repeat(2, 1fr); }
  .tracking { grid-template-columns: 1fr; padding: 28px 20px; gap: 24px; }
}
@media (max-width: 560px) {
  .pillars { grid-template-columns: 1fr; }
  .wps { grid-template-columns: 1fr; }
}
</style>
