import { v4 as uuidv4 } from 'uuid';

export const homePageContent = {
  authorOverallInfo: {
    firstName: 'tram',
    lastName: 'nguyen',
    title: 'frontend developer',
    slogan:
      'sometimes I code, sometimes I read, sometimes I see the problems, and develop digital solutions.',
  },

  decorativeElements: [
    {
      id: uuidv4(),
      imageName: 'Lamp',
      imageSource: 'img/homepage/homepage-1.png',
    },
    {
      id: uuidv4(),
      imageName: 'Laptop',
      imageSource: 'img/homepage/homepage-2.png',
    },
    {
      id: uuidv4(),
      imageName: 'Tram',
      imageSource: 'img/homepage/homepage-3.png',
    },
  ],
};
