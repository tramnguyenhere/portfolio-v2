import { v4 as uuidv4 } from 'uuid';

export const aboutMePageElements = {
  headlines: {
    aboutMeSectionHeadline: {
      id: uuidv4(),
      content: 'a web developer based in Finland',
    },
    technicalSectionHeadline: {
      id: uuidv4(),
      content: 'a bit more details',
    },
  },

  personalInformation: {
    careerObjective: {
      id: uuidv4(),
      content:
        'I focus on writing efficient and clean code and designing applications with minimalistic, user-friendly interfaces. ',
    },
    overallTechnicalSkills: {
      id: uuidv4(),
      content:
        'I build my works using HTML, JavaScript, TypeScript, React.js, Vue.js, Node.js, Express, Redux, Vuex, MongoDB, and style them with CSS, SASS, and Bootstrap. Currently, I mostly work with the frontend, but I aim to expand my tech stack to include the backend within the next 2 years.',
    },
    callToAction: {
      id: uuidv4(),
      content:
        'Even if you are in need with another technology, please do not hesitate to contact me. ☺ My motto is to keep learning and do not mind challenging myself with the new technologies.',
    },
  },

  technicalSkillGroups: {
    frontendTechStack: [
      {
        id: uuidv4(),
        code: 'html',
        name: 'HTML',
      },
      {
        id: uuidv4(),
        code: 'js',
        name: 'JavaScript',
      },
      {
        id: uuidv4(),
        code: 'ts',
        name: 'TypeScript',
      },
      {
        id: uuidv4(),
        code: 'reactjs',
        name: 'React.js',
      },
      {
        id: uuidv4(),
        code: 'vuejs',
        name: 'Vue.js',
      },
      {
        id: uuidv4(),
        code: 'css',
        name: 'CSS',
      },
      {
        id: uuidv4(),
        code: 'sass',
        name: 'SASS',
      },
      {
        id: uuidv4(),
        code: 'bootstrap',
        name: 'Bootstrap',
      },
    ],
    backendTechStack: [
      {
        id: uuidv4(),
        code: 'expressjs',
        name: 'Express.js',
      },
      {
        id: uuidv4(),
        code: 'nodejs',
        name: 'Node.js',
      },
      {
        id: uuidv4(),
        code: 'mongodb',
        name: 'MongoDB',
      },
    ],
  },

  decorativeImages: [
    {
      id: uuidv4(),
      imageName: 'Profile',
      imageSource: 'img/about-me/profile-image.png',
    },
  ],
  buttons: [
    {
      id: uuidv4(),
      buttonName: 'myresume.pdf',
      buttonLink:
        'https://drive.google.com/file/d/1wdG_oroKDDxpz2ywl9AYHLYIcV8xdX3q/view',
    },
  ],
};
