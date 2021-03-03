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
  paragraphOne: 'Après 10 ans passés dans le commerce et la vente de matériel industriel, à manager et atteindre des objectifs de performance et de satisfaction client, j\'ai choisi de donner un nouvel élan à ma carrière et de relever un nouveau défi: celui de devenir développeur web !',
  paragraphTwo: 'Il s\'agit d\'un métier qui me passionne, qui me permet d\'apprendre tous les jours et souvent par moi même mais avec en plus, cette sensation que tout est possible pour peu que l\'on ai une connexion internet à portée de main. J\'ai été formé au sein de l\'école O\'Clock depuis le mois d\'Août et j\'ai pu réaliser un projet de fin d\'étude durant 1 mois en tant que Git Master et Développeur Front. Pour se faire, j\'ai choisi d\'apprendre à maîtriser React et Redux afin d\'optimiser toujours plus l\'expérience des utilisateurs.',
  paragraphThree: 'De nature curieux et très impliqué, je m\'intéresse à tout nouveau défi, je m\'adapte très facilement en équipe et j\'aime partager mon expérience, aussi petite soit elle ! Mon nouvel objectif est de trouver une entreprise qui m\'accueille pour un stage d\'1 an en alternance afin de parfaire mes connaissances de développeur Full Stack, j\'aimerais ainsi me préparer à passer le titre professionnel de "Concepteur Développeur d\'Application"',
  resume: 'https://drive.google.com/file/d/1YE76rnVy-z6eSSTtZPwTzkBuWe0b0OmO/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'happy-news-website.png',
    title: 'Happy News',
    info: 'Projet de fin d\'étude au sein de l\'école O\'Clock',
    info2: 'Tout d’abord, l’idée du projet est née du constat que beaucoup de PME comme les commerces de proximité (Producteurs locaux et artisans) n’ont pas les moyens d’investir dans une campagne de communication, pourtant à l’heure actuelle, la visibilité de ces commerces est l’un des points cruciaux à leur survie ! Afin de répondre à cette problématique et renouer le lien entre ces 2 acteurs. Il a fallu imaginer et concevoir une plateforme de communication qui permettrait à n’importe quel petit commerce de pouvoir créer un profil en quelques clics, consultable par tous les visiteurs du site et avec un moyen d’attirer leur attention... Technologies utilisées : FRONT = React, Redux, Sass, Axios, Leaflet, Firebase ----- BACK = Node.js, Express, PostgreSQL, Bcrypt, JWT',
    url: 'https://happy-news.bluefoo.fr/',
    repo: 'https://github.com/O-clock-Lyra-JS/projet-happy-news', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'find-on-github.png',
    title: 'Find on Github',
    info: 'Projet personnel : site de recherche de repo Github',
    info2: 'Projet réalisé en React avec Semantic UI en tant que librairie de composants ainsi que axios et l\'API de Github pour la recherche de repo sur github.com',
    url: 'https://find-on-github.netlify.app/',
    repo: 'https://github.com/thobenayann/find-on-github', // if no repo, the button will not show up
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
