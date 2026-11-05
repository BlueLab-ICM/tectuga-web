<script setup>
import { t, lang, languages } from '../i18n'
import team from '../team.js'

const initials = (name) => name.split(' ').filter((w) => /^[A-ZÀ-Ý]/.test(w)).map((w) => w[0]).slice(0, 2).join('')
</script>

<template>
  <section id="team" class="alt">
    <div class="container">
      <span class="label">{{ t.team.label }}</span>
      <h2 class="section-title">{{ t.team.title }}</h2>

      <div v-for="g in ['pi', 'research', 'work']" :key="g" class="group">
        <h3>{{ t.team.groups[g] }}</h3>
        <ul :class="{ pis: g === 'pi' }">
          <li v-for="m in team[g]" :key="m.name">
            <img v-if="m.photo" class="avatar" :src="'./img/team/' + m.photo" :alt="m.name" loading="lazy" />
            <span v-else class="avatar">{{ initials(m.name) }}</span>
            <div>
              <strong>{{ m.name }}</strong>
              <span class="org">{{ m.org }}</span>
              <span class="area">{{ m.area[languages.indexOf(lang)] }}</span>
            </div>
          </li>
        </ul>
      </div>

      <ul class="partners">
        <li v-for="p in team.partners" :key="p">{{ p }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.group { margin-bottom: 48px; }
h3 { font-size: 14px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--cyan); margin-bottom: 16px; }
ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
li { display: flex; gap: 16px; align-items: center; background: var(--white); padding: 18px 20px; border-radius: var(--radius); }
.avatar {
  flex-shrink: 0; width: 52px; height: 52px; border-radius: 50%;
  display: grid; place-items: center;
  background: var(--navy); color: var(--white); font-weight: 600; letter-spacing: .05em;
}
img.avatar { object-fit: cover; background: var(--lilac); }
.pis .avatar { background: var(--pink); width: 64px; height: 64px; font-size: 22px; }
.pis strong { font-size: 24px; }
strong { display: block; font-size: 19px; line-height: 1.2; }
.org { display: block; font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--ultramarine); }
.area { display: block; font-size: 15px; color: rgba(var(--navyRGB), .7); line-height: 1.3; }

.partners { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.partners li { padding: 8px 14px; font-size: 15px; font-weight: 600; background: none; border: 1px solid rgba(var(--navyRGB), .25); }
</style>
