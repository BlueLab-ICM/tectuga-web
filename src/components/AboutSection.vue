<script setup>
import { t } from '../i18n'
</script>

<template>
  <section id="about">
    <div class="container">
      <span class="label">{{ t.about.label }}</span>
      <div class="intro">
        <h2 class="section-title">{{ t.about.title }}</h2>
        <div>
          <p v-for="(p, i) in t.about.paragraphs" :key="i">{{ p }}</p>
        </div>
      </div>

      <ul class="facts">
        <li v-for="f in t.about.facts" :key="f.label"><strong>{{ f.value }}</strong><span>{{ f.label }}</span></li>
      </ul>

      <blockquote>
        <span>{{ t.about.hypothesisLabel }}</span>
        <p>{{ t.about.hypothesis }}</p>
      </blockquote>

      <div class="split">
        <figure>
          <img :src="'img/tectuga-concept.png'" :alt="t.about.figureCaption" loading="lazy" />
          <figcaption>{{ t.about.figureCaption }}</figcaption>
        </figure>
        <div>
          <h3>{{ t.about.speciesTitle }}</h3>
          <article v-for="s in t.about.species" :key="s.latin" class="species">
            <header>
              <div>
                <h4>{{ s.name }}</h4>
                <em>{{ s.latin }}</em>
              </div>
              <span class="status" :title="t.about.statusSource">{{ s.status }}</span>
            </header>
            <p>{{ s.note }}</p>
          </article>
          <small>{{ t.about.statusSource }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro { display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; }

.facts {
  list-style: none; padding: 0; margin: 56px 0;
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(var(--navyRGB), .15);
}
.facts li { padding: 24px 16px 0 0; }
.facts strong { display: block; font-size: 56px; line-height: 1; color: var(--ultramarine); }
.facts span { font-size: 14px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--cyan); }

blockquote {
  margin: 0 0 72px;
  padding: 40px 48px;
  background: var(--navy);
  color: var(--white);
  border-left: 6px solid var(--pink);
  border-radius: var(--radius);
}
blockquote span { font-size: 14px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--teal); }
blockquote p { margin: 12px 0 0; font-size: clamp(21px, 2.2vw, 28px); line-height: 1.3; }

.split { display: grid; grid-template-columns: 1.25fr 1fr; gap: 48px; align-items: start; }
.split img { border-radius: var(--radius); }
h3 { font-size: 28px; color: var(--ultramarine); margin-bottom: 20px; }
.species { background: var(--lilac); padding: 20px 24px; border-radius: var(--radius); margin-bottom: 12px; }
.species header { display: flex; justify-content: space-between; align-items: start; gap: 12px; margin-bottom: 8px; }
.species h4 { font-size: 22px; }
.species em { color: rgba(var(--navyRGB), .7); }
.species p { margin: 0; font-size: 17px; }
.status {
  flex-shrink: 0;
  font-size: 13px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
  padding: 4px 10px; border-radius: var(--radius);
  background: var(--pink); color: var(--white);
}
small { font-size: 13px; color: rgba(var(--navyRGB), .6); }

@media (max-width: 860px) {
  .intro, .split { grid-template-columns: 1fr; gap: 24px; }
  .facts { grid-template-columns: repeat(2, 1fr); }
  blockquote { padding: 28px 24px; }
}
</style>
