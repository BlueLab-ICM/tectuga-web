// News of the TECTUGA project. Newest items can go anywhere: the page sorts by date.
//
// Each item:
//   date:  'YYYY-MM-DD'
//   type:  'event' | 'campaign' | 'conference' | 'publication' | 'outreach' | 'project'
//   title: [ca, es, en]
//   text:  [ca, es, en]
//   link:  optional URL (paper, news article, event page…)
//   image: optional file in public/img/news/, e.g. 'img/news/canarias-2027.jpg'
export default [
  {
    date: '2026-11-05',
    type: 'project',
    title: [
      'Neix la web de TECTUGA',
      'Nace la web de TECTUGA',
      'The TECTUGA website is live',
    ],
    text: [
      'Estrenem la pàgina del projecte, on anirem explicant les campanyes de marcatge, els avenços tecnològics i les novetats de l’equip.',
      'Estrenamos la página del proyecto, donde iremos contando las campañas de marcaje, los avances tecnológicos y las novedades del equipo.',
      'We are launching the project website, where we will share our tagging campaigns, technology progress and team news.',
    ],
  },
]
