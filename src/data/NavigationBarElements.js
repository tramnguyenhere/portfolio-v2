import { v4 as uuidv4 } from 'uuid';

export const NavigationBarElements = [
  {
    id: uuidv4(),
    navigationItemName: 'ABOUT',
    navigationItemLink: '/about',
  },
  {
    id: uuidv4(),
    navigationItemName: 'WORK',
    navigationItemLink: '/work',
  },
  {
    id: uuidv4(),
    navigationItemName: 'CONTACT',
    navigationItemLink: '/contact',
  },
];
