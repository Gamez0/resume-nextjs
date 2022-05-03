import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Wapl Shop ver 2 선주문 화면 개발',
      startedAt: '2022-03',
      where: '티맥스 에이아이',
      descriptions: [
        { content: 'React Native와 Typescript 기반 매장POS 화면 개발' },
        { content: 'MobX state 관리 라이브러리 사용하여 매장/주문 state 관리' },
        { content: 'Figma 통해 UI/UX 소통' },
        // {
        //   content: 'Add Foo Feature in 2019',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
        //     { content: 'Integer non turpis ante' },
        //   ],
        // },
        // {
        //   content: 'Launched Bar Service in 2018',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
        //     {
        //       content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: 'Wapl Shop 출시 및 유지 보수',
      startedAt: '2021-10',
      endedAt: '2022-03',
      where: '티맥스 에이아이',
      descriptions: [
        { content: 'ElectronJS, React 기반 사내 카페 POS 화면 개발 및 유지 보수' },
        { content: 'MobX state 관리 라이브러리 사용하여 장바구니 state 관리' },
        { content: 'MobX패턴에 적합하게 컴포넌트 분리하는 리팩토링 작업' },
        {
          content: 'Node JS를 이용한 db 쿼리 요청문 작성, 영수증 출력 구현',
          descriptions: [{ content: 'Promise 객체를 사용하여 비동기 처리', weight: 'MEDIUM' }],
        },
        { content: 'Figma 통해 UI/UX 소통' },
      ],
    },
    {
      title: 'Wapl Pay 개발 및 출시',
      startedAt: '2021-07',
      endedAt: '2022-11',
      where: '티맥스 에이아이',
      descriptions: [
        { content: 'React Native 기반 사내 카페 주문 모바일 App 개발' },
        { content: 'Reanimated API를 이용한 로딩, 진행도, 커피, transition 애니메이션 개발' },
        { content: 'Figma 통해 UI/UX 소통' },
      ],
    },
    {
      title: '신한 텔러 외부 공모',
      startedAt: '2021-02',
      endedAt: '2021-02',
      where: '티맥스 에이아이',
      descriptions: [{ content: 'Home 화면 및 대출 심사 팝업 화면 개발' }],
    },
    {
      title: 'TOP Web Studio 유지보수',
      startedAt: '2021-01',
      endedAt: '2021-06',
      where: '티맥스 에이아이',
      descriptions: [
        { content: 'ES5 기반 웹 개발 플랫폼 유지 보수' },
        {
          content: '크로스브라우징 작업',
          descriptions: [
            { content: 'DatePicker, TableView, TextField Chrom에서 오작동 버그 수정' },
          ],
        },
        { content: 'ES5을 이용하여 inputmask 기능 구현' },
      ],
    },
  ],
};

export default project;
