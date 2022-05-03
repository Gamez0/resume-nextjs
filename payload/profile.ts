import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: '',
  // image,
  name: {
    title: '신도빈',
    // small: '(LI)',
  },
  contact: [
    {
      title: 'dobinshin@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com',
      link: 'https://github.com/Gamez0',
      icon: faGithub,
    },
    {
      title: 'https://linked.com',
      link: 'https://www.linkedin.com/in/%EB%8F%84%EB%B9%88-%EC%8B%A0-431aab200/',
      icon: faLinkedin,
    },
    {
      title: 'Blog',
      link: 'https://jireh.tistory.com/',
      // icon: faRss,
      icon: faBlogger,
    },
  ],
  notice: {
    title: '링크드인 메시지 또는 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
