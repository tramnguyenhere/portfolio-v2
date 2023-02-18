import { v4 as uuidv4 } from 'uuid';

export const contactPageElements = {
  callToAction: {
    text: 'contact me via',
    arrowIcon: 'img/contact-page/decoration/arrow.webp',
  },
  accounts: [
    {
      id: uuidv4(),
      platform: 'linkedin',
      platformIcon: 'fa-brands fa-linkedin',
      address: 'https://www.linkedin.com/in/tramnguyenhere/',
    },
    {
      id: uuidv4(),
      platform: 'email',
      platformIcon: 'fa-solid fa-envelope',
      address: 'mailto:tramngoc1402@gmail.com?Subject=From%20your%20portfolio',
    },
    {
      id: uuidv4(),
      platform: 'phone',
      platformIcon: 'fa-solid fa-phone',
      address: 'tel:+358449513040',
    },
    {
      id: uuidv4(),
      platform: 'github',
      platformIcon: 'fa-brands fa-github',
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
