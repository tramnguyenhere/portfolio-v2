import { v4 as uuidv4 } from 'uuid';

export const workPageElements = {
  sideProjects: [
    {
      id: uuidv4(),
      projectName: 'A Space',
      projectImage: 'img/project-thumbnail/a-space.png',
      projectDescription:
        'A customizable virtual workspace with white noise and music options to enhance focus and productivity',
      projectSourceCode:
        'https://github.com/tramnguyenhere/working_background-app.git',
      projectDemoLink: 'https://aspace-tramnguyenhere.netlify.app/',
      technologiesUsed: ['html', 'typescript', 'reactjs', 'redux', 'sass'],
    },
    {
      id: uuidv4(),
      projectName: 'Personal Portfolio - verson 2.0',
      projectImage: 'img/project-thumbnail/personal-portfolio-v2.png',
      projectDescription:
        '[Ongoing] Redesigned Personal Portfolio of a Frontend developer with Vue.js',
      projectSourceCode: 'https://github.com/tramnguyenhere/portfolio-v2.git',
      projectDemoLink: 'https://tramnguyenhere-portfolio-v2.netlify.app/',
      technologiesUsed: ['html', 'javascript', 'vuejs', 'sass'],
    },
    {
      id: uuidv4(),
      projectName: 'Wishlist - Christmas 2022 edition',
      projectImage: 'img/project-thumbnail/wishlist.png',
      projectDescription: 'Customized Wishlist application',
      projectSourceCode: 'https://github.com/tramnguyenhere/wishlist-app.git',
      projectDemoLink: 'https://wishlist-application-tramnguyenhere.fly.dev/',
      technologiesUsed: [
        'html',
        'javascript',
        'reactjs',
        'redux',
        'sass',
        'bootstrap',
        'nodejs',
        'mongodb',
        'firebase',
      ],
    },
    {
      id: uuidv4(),
      projectName: 'Personal Portfolio',
      projectImage: 'img/project-thumbnail/personal-portfolio.png',
      projectDescription: 'Personal Portfolio of a Frontend developer',
      projectSourceCode:
        'https://github.com/tramnguyenhere/tramnguyenhere-porfolio',
      projectDemoLink: 'https://tramnguyenhere-portfolio.netlify.app/',
      technologiesUsed: ['html', 'javascript', 'reactjs', 'sass', 'figma'],
    },
    {
      id: uuidv4(),
      projectName: 'Measurement converter for cooking',
      projectImage: 'img/project-thumbnail/measurement-converter.png',
      projectDescription: 'A measurement converter for your kitchen',
      projectSourceCode:
        'https://github.com/tramnguyenhere/ingredient-measurement-converter.git',
      projectDemoLink: 'https://ingredientmeasurementconverter.netlify.app/',
      technologiesUsed: ['html', 'javascript', 'reactjs', 'sass', 'bootstrap'],
    },

    {
      id: uuidv4(),
      projectName: 'English Dictionary',
      projectImage: 'img/project-thumbnail/english-dictionary.png',
      projectDescription:
        'A minimal English dictionary with pronunciation - data retrieved from Dictionary API',
      projectSourceCode:
        'https://github.com/tramnguyenhere/english-dictionary-react.git',
      projectDemoLink: 'https://english-dictionary-tramnguyenhere.netlify.app/',
      technologiesUsed: ['html', 'javascript', 'reactjs', 'css'],
    },
    {
      id: uuidv4(),
      projectName: 'Digital Cooking Recipes',
      projectImage: 'img/project-thumbnail/cooking-recipes.png',
      projectDescription:
        'A digital cooking recipes - data retrieved from Spoonacular API',
      projectSourceCode:
        'https://github.com/tramnguyenhere/cooking-recipe-app-react.git',
      projectDemoLink: 'https://cooking-recipe-tramnguyenhere.netlify.app/',
      technologiesUsed: [
        'html',
        'javascript',
        'reactjs',
        'css',
        'styledcomponent',
      ],
    },
  ],
};
