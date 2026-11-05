// News of the TECTUGA project. Newest items can go anywhere: the page sorts by date.
//
// Each item:
//   date:  'YYYY-MM-DD'
//   type:  'event' | 'campaign' | 'conference' | 'publication' | 'outreach' | 'project'
//   title: [ca, es, en]
//   text:  [ca, es, en]
//   link:  optional URL, shown as “Read more”
//   links: optional list of labelled links, e.g. [{ label: 'arXiv', url: '…' }]
//   image: optional file in public/img/news/, e.g. 'img/news/canarias-2027.jpg'
export default [
  {
    date: '2026-09-21',
    type: 'conference',
    title: [
      'TECTUGA a OCEANS 2026 Monterey',
      'TECTUGA en OCEANS 2026 Monterey',
      'TECTUGA at OCEANS 2026 Monterey',
    ],
    text: [
      'Hem presentat el pòster del projecte TECTUGA i l’article «An adaptive open-source architecture for enhanced autonomy in BlueBoat ASVs based on ROS2» (Masmitja, Somers, Agundez i Pradell) al congrés IEEE OCEANS 2026, a Monterey (Califòrnia), del 21 al 24 de setembre. L’article descriu l’arquitectura oberta basada en ROS2 que dona més autonomia als nostres BlueBoats.',
      'Hemos presentado el póster del proyecto TECTUGA y el artículo «An adaptive open-source architecture for enhanced autonomy in BlueBoat ASVs based on ROS2» (Masmitja, Somers, Agundez y Pradell) en el congreso IEEE OCEANS 2026, en Monterey (California), del 21 al 24 de septiembre. El artículo describe la arquitectura abierta basada en ROS2 que da más autonomía a nuestros BlueBoats.',
      'We presented the TECTUGA project poster and the paper “An adaptive open-source architecture for enhanced autonomy in BlueBoat ASVs based on ROS2” (Masmitja, Somers, Agundez and Pradell) at IEEE OCEANS 2026 in Monterey, California, on 21–24 September. The paper describes the open ROS2-based architecture that gives our BlueBoats more autonomy.',
    ],
    links: [{ label: 'OCEANS 2026', url: 'https://monterey26.oceansconference.org/' }],
  },
  {
    date: '2026-06-03',
    type: 'conference',
    title: [
      'Article a ICRA 2026, Viena',
      'Artículo en ICRA 2026, Viena',
      'Paper at ICRA 2026, Vienna',
    ],
    text: [
      'Hem presentat «Scaling Multi-Agent Reinforcement Learning for Underwater Acoustic Tracking via Autonomous Vehicles» (Gallici, Masmitja i Martín) a l’IEEE ICRA 2026 de Viena. Un simulador accelerat per GPU, fins a 30.000 vegades més ràpid que Gazebo, i una arquitectura basada en Transformers permeten entrenar flotes de vehicles que segueixen diversos objectius ràpids amb errors inferiors a 5 m.',
      'Hemos presentado «Scaling Multi-Agent Reinforcement Learning for Underwater Acoustic Tracking via Autonomous Vehicles» (Gallici, Masmitja y Martín) en el IEEE ICRA 2026 de Viena. Un simulador acelerado por GPU, hasta 30.000 veces más rápido que Gazebo, y una arquitectura basada en Transformers permiten entrenar flotas de vehículos que siguen varios objetivos rápidos con errores inferiores a 5 m.',
      'We presented “Scaling Multi-Agent Reinforcement Learning for Underwater Acoustic Tracking via Autonomous Vehicles” (Gallici, Masmitja and Martín) at IEEE ICRA 2026 in Vienna. A GPU-accelerated simulator, up to 30,000× faster than Gazebo, and a Transformer-based architecture let us train vehicle fleets that track several fast-moving targets with errors below 5 m.',
    ],
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2505.08222' },
      { label: 'ICRA 2026', url: 'https://2026.ieee-icra.org/' },
    ],
  },
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
