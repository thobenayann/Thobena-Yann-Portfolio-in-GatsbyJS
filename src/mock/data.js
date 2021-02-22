import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yann Thobena',
  subtitle: 'Développeur FullStack JS',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'happy-news-website.png',
    title: 'Happy News',
    info: 'Projet de fin d\'étude au sein de l\'école O\'Clock',
    info2: 'Tout d’abord, l’idée du projet est née du constat que beaucoup de PME comme les commerces de proximité (Producteurs locaux et artisan) n’ont pas les moyens d’investir dans une campagne de communication, pourtant à l’heure actuel, la visibilité de ces commerces est l’un des points cruciaux à leur survie ! Afin de répondre à cette problématique et renouer le lien entre ces 2 acteurs. Il a fallu imaginer et concevoir une plateforme de communication qui permettrait à n’importe quel petit commerce de pouvoir de créer un profil en quelques clics, consultable par tous les visiteurs du site et avec un moyen d’attirer leur attention...',
    url: 'https://happy-news.bluefoo.fr/',
    repo: 'https://github.com/O-clock-Lyra-JS/projet-happy-news', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'Challenge-wildschool.png',
    title: 'Projet réalisé dans l\'optique d\'un entretien technique',
    info: 'FRONT : React JS',
    info2: 'BACK : Node.JS, express et postgreSQL',
    url: 'https://wildschool-argonaute-app.herokuapp.com/',
    repo: 'https://github.com/thobenayann/challenge-prepa-wildSchool', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sathya-website.png',
    title: 'Sathya Beaumont Cascadeur Acrobate Modele',
    info: 'Un site vitrine réalisé avant ma formation de développeur',
    info2: 'Uniquement du HTML + CSS pour apprendre en autodidacte à réaliser ce site qui est destiné à mon cousin, Sathya, afin qu\'il gagne en visibilité dans son activité professionnelle',
    url: 'http://www.sathyabeaumont-cascadeur-acrobate-modele.fr/index.html',
    repo: 'https://github.com/thobenayann/cv-en-ligne_Sathya', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'thobena.yann@orange.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ThobenaY',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yannthobena/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thobenayann',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
