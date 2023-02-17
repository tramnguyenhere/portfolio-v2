import { v4 as uuidv4 } from 'uuid';

export const contactPageElements = {
  accounts: [
    {
      id: uuidv4(),
      platform: 'linkedin',
      address: 'https://www.linkedin.com/in/tramnguyenhere/',
    },
    {
      id: uuidv4(),
      platform: 'email',
      address: 'mailto:tramngoc1402@gmail.com?Subject=From%20your%20portfolio',
    },
    {
      id: uuidv4(),
      platform: 'phone',
      address: 'tel:+358449513040',
    },
    {
      id: uuidv4(),
      platform: 'github',
      address: 'https://github.com/tramnguyenhere',
    },
  ],
  messageForm: {
    header: {
      title: 'Get in touch',
    },
  },
  decorativeElements: [
    {
      id: uuidv4(),
      imageName: 'matisse illustration',
      imageSource: 'img/contact-page/decoration/decoration-matissewebp.webp',
    },
  ],
};
