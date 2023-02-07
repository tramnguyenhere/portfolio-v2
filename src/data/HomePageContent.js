import { v4 as uuidv4 } from 'uuid';

export const HomePageContent = {
  MainSection: {
    AuthorFirstName: 'tram',
    AuthorLastName: 'nguyen',
    AuthorTitle: 'frontend developer',
    AuthorSologan:
      'sometimes I code, sometimes I read, sometimes I see the problems, and develop digital solutions.',
  },
  DecorativeSection: [
    {
      id: uuidv4(),
      name: 'lamp',
      src: 'img/homepage/homepage-1.png',
    },
    {
      id: uuidv4(),
      name: 'laptop',
      src: 'img/homepage/homepage-2.png',
    },
    {
      id: uuidv4(),
      name: 'tram',
      src: 'img/homepage/homepage-3.png',
    },
  ],
};
