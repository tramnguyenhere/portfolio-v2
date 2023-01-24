import { v4 as uuidv4 } from 'uuid';

export const aboutmeData = {
  headline: {
    title: {
      id: uuidv4(),
      text: 'I’m a web developer based in Finland.',
    },
    detailSectionTitle: {
      id: uuidv4(),
      text: 'a bit more details',
    },
  },
  introPara: {
    id: uuidv4(),
    text: 'I primarily focus on writing efficient and clean code, and designing applications from scratch with minimalistic and user-friendly interfaces.',
  },
  midPara: {
    id: uuidv4(),
    text: 'My works are built using HTML, JavaScript, TypeScript, React.js, Vue.js, Node.js, Express, Redux, Vuex, MongoDB, and styled with CSS, SASS, and Bootstrap. I mostly work with frontend, but my goal is to expand my tech stack to include backend within the next 2 years.',
  },
  finalPara: {
    id: uuidv4(),
    text: 'Even if you are in need with another technology, please do not hesitate to contact me. ☺ My motto is to keep learning and do not mind challenging myself with the new technology.',
  },
  decoImgs: [
    {
      id: uuidv4(),
      name: 'profile',
      src: 'img/aboutme/aboutme-img-1.png',
    },
  ],
  btns: [
    {
      id: uuidv4(),
      name: 'myresume.pdf',
      link: 'https://drive.google.com/file/d/1wdG_oroKDDxpz2ywl9AYHLYIcV8xdX3q/view',
    },
  ],
};
