import { v4 as uuid } from 'uuid';

export const TechnicalSkillGroups = {
  frontend: [
    {
      id: uuid(),
      code: 'html',
      name: 'HTML',
    },
    {
      id: uuid(),
      code: 'js',
      name: 'JavaScript',
    },
    {
      id: uuid(),
      code: 'ts',
      name: 'TypeScript',
    },
    {
      id: uuid(),
      code: 'reactjs',
      name: 'React.js',
    },
    {
      id: uuid(),
      code: 'vuejs',
      name: 'Vue.js',
    },
    {
      id: uuid(),
      code: 'css',
      name: 'CSS',
    },
    {
      id: uuid(),
      code: 'sass',
      name: 'SASS',
    },
    {
      id: uuid(),
      code: 'bootstrap',
      name: 'Bootstrap',
    },
  ],
  backend: [
    {
      id: uuid(),
      code: 'expressjs',
      name: 'Express.js',
    },
    {
      id: uuid(),
      code: 'nodejs',
      name: 'Node.js',
    },
    {
      id: uuid(),
      code: 'mongodb',
      name: 'MongoDB',
    },
  ],
};
