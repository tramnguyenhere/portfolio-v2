import { v4 as uuid } from 'uuid';
const workPageElements = {
  sideProjects: [
    {
      id: uuid(),
      projectName: 'A Space',
      projectImage: 'a-space.png',
      projectDescription:
        '🌇  A customizable virtual workspace with white noise and music options to enhance focus and productivity',
      projectSourceCode:
        'https://github.com/tramnguyenhere/working_background-app.git',
      projectDemoLink: 'https://aspace-tramnguyenhere.netlify.app/',
      technologiesUsed: ['ts', 'reactjs', 'redux', 'sass'],
    },
    {
      id: uuid(),
      projectName: 'Wishlist - Christmas 2022 edition',
      projectImage: 'wishlist.png',
      projectDescription: '💫 Customized Wishlist application',
      projectSourceCode: 'https://github.com/tramnguyenhere/wishlist-app.git',
      projectDemoLink: 'https://wishlist-application-tramnguyenhere.fly.dev/',
      technologiesUsed: [
        'js',
        'reactjs',
        'redux',
        'sass',
        'bootstrap',
        'mongodb',
        'firebase',
      ],
    },
    {
      id: uuid(),
      projectName: 'Measurement converter for cooking',
      projectImage: 'measurement-converter.png',
      projectDescription: '🍽 A measurement converter for your kitchen',
      projectSourceCode:
        'https://github.com/tramnguyenhere/ingredient-measurement-converter.git',
      projectDemoLink: 'https://ingredientmeasurementconverter.netlify.app/',
      technologiesUsed: ['js', 'reactjs', 'sass', 'bootstrap'],
    },
    {
      id: uuid(),
      projectName: 'Personal Portfolio',
      projectImage: 'personal-portfolio.png',
      projectDescription: '🌈 Personal Portfolio of a Frontend developer',
      projectSourceCode:
        'https://github.com/tramnguyenhere/tramnguyenhere-porfolio',
      projectDemoLink: 'https://tramnguyenhere-portfolio.netlify.app/',
      technologiesUsed: ['js', 'reactjs', 'sass', 'figma'],
    },
    {
      id: uuid(),
      projectName: 'English Dictionary',
      projectImage: 'english-dictionary.png',
      projectDescription:
        '📖 A minimal English dictionary with pronunciation - data retrieved from Dictionary API',
      projectSourceCode:
        'https://github.com/tramnguyenhere/english-dictionary-react.git',
      projectDemoLink: 'https://english-dictionary-tramnguyenhere.netlify.app/',
      technologiesUsed: ['js', 'reactjs', 'css'],
    },
    {
      id: uuid(),
      projectName: 'Digital Cooking Recipes',
      projectImage: 'cooking-recipes.png',
      projectDescription:
        '🍱 A digital cooking recipes - data retrieved from Spoonacular API',
      projectSourceCode:
        'https://github.com/tramnguyenhere/cooking-recipe-app-react.git',
      projectDemoLink: 'https://cooking-recipe-tramnguyenhere.netlify.app/',
      technologiesUsed: ['js', 'reactjs', 'css', 'styledcomponent'],
    },
  ],
};

export default workPageElements;
