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
    date: '2026-07-22',
    image: 'img/news/espai-vela-blueboat.jpg',
    type: 'campaign',
    title: [
      'Els BlueBoats localitzen boies al port de Barcelona',
      'Los BlueBoats localizan boyas en el puerto de Barcelona',
      'BlueBoats locate buoys in Barcelona harbour',
    ],
    text: [
      'Durant el 2026 hem fet dues tandes de proves amb els BlueBoats de l’ICM per localitzar petites boies de superfície, en col·laboració amb Matias Carandell, de la Facultat de Nàutica de Barcelona (FNB-UPC). Els assaigs es van fer des de l’Espai Vela de la FNB, al port de Barcelona; la segona campanya va tenir lloc el 22 de juliol. El treball forma part del desenvolupament de les boies pop-up per a observatoris submarins autònoms.',
      'Durante 2026 hemos realizado dos tandas de pruebas con los BlueBoats del ICM para localizar pequeñas boyas de superficie, en colaboración con Matias Carandell, de la Facultat de Nàutica de Barcelona (FNB-UPC). Los ensayos se hicieron desde el Espai Vela de la FNB, en el puerto de Barcelona; la segunda campaña tuvo lugar el 22 de julio. El trabajo forma parte del desarrollo de las boyas pop-up para observatorios submarinos autónomos.',
      'In 2026 we ran two rounds of trials with the ICM BlueBoats to locate small surface buoys, together with Matias Carandell from the Barcelona School of Nautical Studies (FNB-UPC). The tests were run from the FNB’s Espai Vela in Barcelona harbour; the second campaign took place on 22 July. The work is part of the development of pop-up buoys for stand-alone seabed observatories.',
    ],
    links: [
      { label: 'Espai Vela (FNB-UPC)', url: 'https://www.fnb.upc.edu/content/nou-espai-vela-de-la-fnb-al-port-de-barcelona' },
      { label: 'Pop-up buoys · Results in Engineering', url: 'https://www.sciencedirect.com/science/article/pii/S2590123026030513' },
    ],
  },
  {
    date: '2026-07-20',
    image: 'img/news/obsea-2026.jpg?v=2',
    type: 'campaign',
    title: [
      'Experiment mar endins a l’observatori OBSEA',
      'Experimento mar adentro en el observatorio OBSEA',
      'Offshore experiment at the OBSEA observatory',
    ],
    text: [
      'El 20 de juliol vam sortir mar endins fins a l’OBSEA, l’observatori submarí cablejat de Vilanova i la Geltrú gestionat pel grup SARTI de la UPC. Hi vam continuar treballant en el seguiment de petites boies a la superfície del mar amb els nostres vehicles autònoms, ara en condicions de mar obert.',
      'El 20 de julio salimos mar adentro hasta el OBSEA, el observatorio submarino cableado de Vilanova i la Geltrú gestionado por el grupo SARTI de la UPC. Allí seguimos trabajando en el seguimiento de pequeñas boyas en la superficie del mar con nuestros vehículos autónomos, ahora en condiciones de mar abierto.',
      'On 20 July we headed offshore to OBSEA, the cabled seafloor observatory off Vilanova i la Geltrú run by the SARTI research group at UPC. There we continued our work on tracking small buoys on the sea surface with our autonomous vehicles, this time in open-sea conditions.',
    ],
    links: [{ label: 'OBSEA', url: 'https://www.obsea.es/' }],
  },
  {
    date: '2025-08-24',
    image: 'img/news/mbari-fulbright-lrauv.jpg',
    type: 'project',
    title: [
      'Estada de recerca al MBARI amb una beca Fulbright',
      'Estancia de investigación en el MBARI con una beca Fulbright',
      'Research stay at MBARI with a Fulbright fellowship',
    ],
    text: [
      'Del 24 d’agost al 14 de desembre de 2025, Ivan Masmitja va fer una estada al Monterey Bay Aquarium Research Institute (MBARI, Califòrnia) gràcies a una beca Fulbright. Allà va provar al mar els algorismes d’aprenentatge per reforç multiagent (MARL) per al seguiment d’objectius que hem desenvolupat amb Matteo Gallici i Mario Martín (UPC), fent-los servir als vehicles autònoms de llarg abast (LRAUV) del MBARI.',
      'Del 24 de agosto al 14 de diciembre de 2025, Ivan Masmitja realizó una estancia en el Monterey Bay Aquarium Research Institute (MBARI, California) gracias a una beca Fulbright. Allí probó en el mar los algoritmos de aprendizaje por refuerzo multiagente (MARL) para el seguimiento de objetivos que hemos desarrollado con Matteo Gallici y Mario Martín (UPC), utilizándolos en los vehículos autónomos de largo alcance (LRAUV) del MBARI.',
      'From 24 August to 14 December 2025, Ivan Masmitja carried out a research stay at the Monterey Bay Aquarium Research Institute (MBARI, California) with a Fulbright fellowship. There he tested at sea the multi-agent reinforcement learning (MARL) algorithms for target tracking that we developed with Matteo Gallici and Mario Martín (UPC), running them on MBARI’s long-range autonomous underwater vehicles (LRAUVs).',
    ],
    links: [
      { label: 'Ivan Masmitja', url: 'https://sites.google.com/view/ivanmasmitja/home' },
      { label: 'MBARI LRAUV', url: 'https://www.mbari.org/at-sea/vehicles/autonomous-underwater-vehicles/long-range-auv-tethys/' },
    ],
  },
  {
    date: '2026-11-10',
    image: 'img/news/open-house-poster.jpg',
    type: 'outreach',
    title: [
      'Tortugues exploradores a les Portes Obertes de l’ICM',
      'Tortugas exploradoras en las Puertas Abiertas del ICM',
      'Turtle explorers at the ICM Open House',
    ],
    text: [
      'Del 10 al 13 de novembre participem a les Jornades de Portes Obertes de l’ICM per a ESO i batxillerat amb l’activitat «Tortugues exploradores: robots i càmeres per estudiar (i protegir) el mar». L’alumnat es compararà amb tortugues marines de mida real, veurà vídeos gravats per les tortugues amb la TurtleCam, obrirà un BlueBoat per descobrir què porta a dins i el pilotarà en un tanc d’assaig. Pots descarregar el nostre pòster de tortugues a mida real (per imprimir a 150 × 200 cm).',
      'Del 10 al 13 de noviembre participamos en las Jornadas de Puertas Abiertas del ICM para ESO y bachillerato con la actividad «Tortugas exploradoras: robots y cámaras para estudiar (y proteger) el mar». El alumnado se comparará con tortugas marinas de tamaño real, verá vídeos grabados por las tortugas con la TurtleCam, abrirá un BlueBoat para descubrir qué lleva dentro y lo pilotará en un tanque de ensayo. Puedes descargar nuestro póster de tortugas a tamaño real (para imprimir a 150 × 200 cm).',
      'On 10–13 November we take part in the ICM Open House for secondary-school students with the activity “Turtle explorers: robots and cameras to study (and protect) the sea”. Students compare themselves with life-size sea turtles, watch videos filmed by the turtles with the TurtleCam, open up a BlueBoat to see what is inside and pilot it in a test tank. You can download our life-size turtle poster (to print at 150 × 200 cm).',
    ],
    links: [
      { label: 'ICM · Portes Obertes', url: 'https://www.icm.csic.es/ca/esdeveniment/jornades-de-portes-obertes-eso-i-batxillerat-0' },
      { label: 'PDF', url: './files/tectuga-poster-mida-real.pdf' },
    ],
  },
  {
    date: '2026-09-21',
    image: 'img/news/oceans-2026-monterey.jpg',
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
    image: 'img/news/icra-2026-vienna.jpg',
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
    image: 'img/tectuga-concept.png',
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
