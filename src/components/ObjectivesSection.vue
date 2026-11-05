<script setup>
import { t } from '../i18n'
</script>

<template>
  <section id="objectives" class="alt">
    <div class="container">
      <span class="label">{{ t.objectives.label }}</span>
      <h2 class="section-title">{{ t.objectives.title }}</h2>
      <p class="intro">{{ t.objectives.intro }}</p>

      <ol class="cards">
        <li v-for="(o, i) in t.objectives.items" :key="i">
          <span class="num">0{{ i + 1 }}</span>
          <h3>{{ o.title }}</h3>
          <ul>
            <li v-for="p in o.points" :key="p">{{ p }}</li>
          </ul>
          <p class="pi">{{ t.objectives.lead }}: <strong>{{ o.pi }}</strong></p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.intro { max-width: 60ch; font-size: 21px; margin-bottom: 48px; }
.cards { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.cards > li {
  background: var(--white);
  padding: 36px;
  border-radius: var(--radius);
  border-top: 4px solid var(--navy);
  display: flex; flex-direction: column;
  transition: border-color .2s, transform .2s;
}
.cards > li:hover { border-top-color: var(--pink); transform: translateY(-3px); }
.num { font-size: 48px; font-weight: 700; color: var(--cyan); line-height: 1; }
h3 { font-size: 26px; margin: 12px 0 18px; }
ul { padding-left: 20px; margin: 0 0 24px; flex: 1; }
ul li { margin-bottom: 6px; font-size: 17px; }
ul li::marker { color: var(--pink); }
.pi { margin: 0; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; color: var(--cyan); }
.pi strong { color: var(--navy); }

@media (max-width: 860px) {
  .cards { grid-template-columns: 1fr; }
  .cards > li { padding: 28px 22px; }
}
</style>
