import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: '바로켜기 QR체크인',
      descriptions: [
        { content: '쉽고 빠르게 QR코드를 띄워주는 어플리케이션' },
        { content: '1000+ 다운로드 수' },
        // {
        //   content: 'https://github.com/nodejs/node',
        //   href: 'https://github.com/nodejs/node',
        // },
        {
          content: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.praylist.simpleqrcheck',
        },
      ],
    },
    {
      title: 'resume-nextjs',
      descriptions: [
        {
          content: 'next.js 로 누구나 쉽게 만드는 웹 이력서 프로젝트',
        },
        {
          content: 'https://github.com/uyu423/resume-nextjs 프로젝트를 fork',
        },
      ],
    },
    {
      title: 'ko.mobx.js.org',
      descriptions: [
        { content: 'Open source project contribution' },
        {
          content:
            ' https://mobx.js.org의 내용을 영-한 번역을 통해 모국어가 한국어인 개발자가 MobX를 쉽게 접할 수 있도록 하는 프로젝트',
        },
        {
          content: '클래스 속성에 대한 transpilation 설정 검증을 위한 예제 코드 작성',
          href:
            'https://ko.mobx.js.org/installation.html#%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%86%8D%EC%84%B1%EC%97%90-%EB%8C%80%ED%95%9C-transpilation-%EC%84%A4%EC%A0%95',
        },
        {
          content: 'actions 예시 확인 버튼 미작동 버그 수정',
          descriptions: [{ content: '<a> 태그 href 수정' }],
        },
      ],
    },
  ],
};

export default openSource;
