import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '티맥스 에이아이',
      position: '금융/커머스 Front-end 개발자',
      startedAt: '2021-01',
      descriptions: [
        '대외용 매장POS 앱, Wapl Shop ver 2 선주문 화면 개발',
        '사내 카페를 위한 Wapl Shop 출시 및 유지 보수',
        '사내 카페 주문을 위한 Wapl Pay 개발 및 출시',
        '신한 텔러 외부 과제 공모',
        '웹/서버 통합 개발 툴, TOP Web Studio 유지보수',
      ],
      skillKeywords: [
        'React Native',
        'React',
        'Electron',
        'MobX',
        'Reanimated API',
        // 'axios',
        'TypeScript',
      ],
    },
    // {
    //   title: 'Bar Co., Ltd.',
    //   position: 'Software Enginner',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   descriptions: [
    //     'Online Commerce IT Startup',
    //     'Development of reservation system and service worker',
    //     'AWS infrastructure and RDBMS maintenance and development',
    //   ],
    //   skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    // },
  ],
};

export default experience;
