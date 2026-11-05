export default {
  nav: { about: 'El projecte', objectives: 'Objectius', approach: 'Tecnologia', sites: 'On treballem', team: 'Equip' },
  hero: {
    kicker: 'Projecte de recerca · ICM-CSIC',
    title: 'Sentinelles del mar',
    subtitle: 'Tecnologies innovadores de càmeres en animals i vehicles autònoms per a avaluacions ecològiques de les tortugues marines i els seus hàbitats.',
    cta: 'Descobreix el projecte',
  },
  about: {
    label: 'El projecte',
    title: 'Les tortugues marines com a exploradores de l’oceà',
    paragraphs: [
      'Monitorar els ecosistemes marins és car i lent, i la major part de les aigües espanyoles i europees continuen sense protecció. Saber on viuen les espècies, què mengen i a quines amenaces s’enfronten és clau per dissenyar Àrees Marines Protegides eficaces.',
      'TECTUGA uneix biòlegs i enginyers. Equipem tortugues marines amb petites càmeres que mostren, des del punt de vista del mateix animal, com s’alimenten, com es relacionen i com reaccionen davant les amenaces. Una flota de vehicles autònoms de superfície (ASV) guiada per aprenentatge automàtic les segueix, en transmet les dades en temps real i recupera els dispositius.',
    ],
    hypothesisLabel: 'Hipòtesi de partida',
    hypothesis: 'Les tortugues marines amb dispositius instal·lats, amb el suport d’ASV amb algorismes d’aprenentatge automàtic, poden actuar com a «plataformes autònomes de mostreig» per a avaluacions ecològiques ràpides i cartografia d’hàbitats.',
    speciesTitle: 'Dues espècies a les aigües espanyoles',
    species: [
      { name: 'Tortuga babaua', latin: 'Caretta caretta', status: 'Vulnerable', note: 'Els juvenils s’alimenten a la Mediterrània occidental i al voltant de les Canàries.' },
      { name: 'Tortuga verda', latin: 'Chelonia mydas', status: 'En perill', note: 'Els juvenils s’alimenten de fanerògames i algues a les Canàries.' },
    ],
    statusSource: 'Llista Vermella de la UICN',
    facts: [
      { value: '36', label: 'mesos' },
      { value: '13', label: 'persones a l’equip' },
      { value: '7', label: 'paquets de treball' },
      { value: '3', label: 'regions d’estudi' },
    ],
    figureCaption: 'Els pilars de TECTUGA: dispositius en animals, aprenentatge automàtic, vehicles autònoms, estudis de comportament i cartografia d’hàbitats.',
  },
  objectives: {
    label: 'Objectius',
    title: 'Què volem aconseguir',
    intro: 'Fer servir càmeres en animals i vehicles autònoms per obtenir dades ecològiques i de conservació sobre tortugues marines amenaçades i els seus ecosistemes, amb eines aplicables a altra megafauna marina arreu del món.',
    lead: 'Responsable',
    items: [
      {
        title: 'Revelar el comportament de les tortugues i les amenaces que pateixen',
        pi: 'Nathan J. Robinson',
        points: ['Efecte de la manipulació i el marcatge en el comportament', 'Dieta, alimentació i selectivitat', 'Comportament social entre tortugues', 'Trobades amb arts de pesca, residus i trànsit marítim'],
      },
      {
        title: 'Connectar els dispositius dels animals amb vehicles autònoms',
        pi: 'Ivan Masmitja',
        points: ['Receptors acústics i de ràdio a bord dels ASV', 'Validació en tancs de proves, amb tortugues en captivitat i en llibertat', 'Programari i interfície per a la supervisió humana en el bucle'],
      },
      {
        title: 'Seguir objectius en moviment amb aprenentatge automàtic',
        pi: 'Ivan Masmitja',
        points: ['Aprenentatge per reforç multiagent (MARL) per coordinar una flota d’ASV', 'Localització acústica per distància i per TDOA', 'Moviments fins de les tortugues a partir d’acceleromètria i posicions dels ASV', 'Altera l’ASV el comportament de la tortuga?'],
      },
      {
        title: 'Les tortugues com a plataformes autònomes de mostreig',
        pi: 'Nathan J. Robinson',
        points: ['Fotomosaics georeferenciats del fons marí', 'Corbes d’acumulació d’espècies', 'Distribució d’espècies d’interès per a la conservació i espècies invasores'],
      },
    ],
  },
  approach: {
    label: 'Tecnologia',
    title: 'Càmeres a les tortugues, robots a la superfície',
    pillars: [
      { icon: 'camera', title: 'Càmeres en animals', text: 'Càmeres de baix cost i codi obert desenvolupades amb Arribada Initiative, amb arrencada diferida per enregistrar el comportament natural. Es deslliuren soles i suren fins a la superfície.' },
      { icon: 'boat', title: 'Vehicles autònoms de superfície', text: 'Una flota d’ASV BlueBoat amb BlueOS i ArduPilot, receptors acústics i de ràdio, càmera amb computació a la vora i comunicacions de llarg abast.' },
      { icon: 'brain', title: 'Aprenentatge automàtic', text: 'Aprenentatge per reforç multiagent per coordinar la flota i visió per computador per etiquetar comportaments, hàbitats i espècies en hores de vídeo.' },
      { icon: 'map', title: 'Cartografia d’hàbitats', text: 'Combinem imatges, acceleromètria i posicions dels ASV per cartografiar les praderies marines i els fons que fan servir les tortugues.' },
    ],
    trackingTitle: 'Com segueix la flota una tortuga',
    trackingText: 'La tortuga marcada emet senyals acústics. Tres ASV, coordinats per algorismes MARL, mantenen una formació al seu voltant i n’estimen la posició per diferència de temps d’arribada (TDOA). Quan la càmera es deixa anar i sura, els vehicles la localitzen per ràdio i guien l’equip per recuperar-la.',
    trackingCaption: 'Una flota de tres ASV BlueBoat seguint una tortuga marcada.',
    wpTitle: 'Paquets de treball',
    wps: [
      'Coordinació',
      'Seguiment d’objectius amb ASV i aprenentatge automàtic',
      'Desplegaments de càmeres en tortugues',
      'Eines d’aprenentatge automàtic per a l’anàlisi de vídeo',
      'Anàlisi del comportament i de les amenaces',
      'Les tortugues com a plataformes autònomes de mostreig',
      'Difusió i comunicació',
    ],
  },
  sites: {
    label: 'On treballem',
    title: 'De les Canàries a la Mediterrània',
    items: [
      { region: 'Illes Canàries', species: 'Tortuga verda i tortuga babaua', places: ['Platja d’El Pajar, Gran Canària', 'Badia d’Abades, Tenerife', 'ZEC Franja marina de Teno-Rasca, Tenerife'], text: 'Dues campanyes de marcatge de 10 dies l’any amb ADS Biodiversidad.' },
      { region: 'Mar Balear', species: 'Tortuga babaua', places: ['Expedicions a bord del Bonnie Lass'], text: 'Dues campanyes de marcatge l’any amb SaveTheMed.' },
      { region: 'Barcelona', species: 'Tecnologia', places: ['Laboratori d’Enginyeria Oceanogràfica de l’ICM-CSIC', 'Aigües costaneres de Barcelona'], text: 'Desenvolupament i proves al mar de la flota d’ASV i dels algorismes de seguiment.' },
    ],
  },
  team: {
    label: 'Equip',
    title: 'Biòlegs i enginyers, junts',
    groups: { pi: 'Investigadors principals', research: 'Equip de recerca', work: 'Equip de treball' },
  },
  footer: {
    funding: 'Projecte PID2024 finançat per MICIU/AEI/10.13039/501100011033.',
    institute: 'Institut de Ciències del Mar (ICM-CSIC)',
    address: 'Pg. Marítim de la Barceloneta, 37-49 · 08003 Barcelona',
    madeBy: 'Web feta per BlueLab, ICM-CSIC',
    code: 'Codi font',
  },
}
