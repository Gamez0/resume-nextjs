import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      // TODO: 개발한 화면 보여주기
      title: 'Wapl Shop ver 2 선주문 화면 개발',
      startedAt: '2022-03',
      where: '티맥스 에이아이',
      descriptions: [
        {
          content: 'React Native와 Typescript 기반 매장POS 화면 개발',
          postImage: 'http://drive.google.com/uc?export=view&id=1kfChjYXwRDoE80B7_0mpYLDqlDJTBTmT',
          descriptions: [
            { content: '메뉴 카테고리를 추가 화면/기능' },
            { content: '카테고리, 메뉴, 옵션 선택 화면' },
            { content: '선택한 메뉴와 옵션을 출력하는 장바구니 화면/기능' },
          ],
        },
        { content: 'MobX state 관리 라이브러리 사용하여 매장/주문 state 관리' },
        { content: 'Jest 테스트 라이브러리 도입 및 config, 선주문 컴포넌트 테스트 코드 작성' },
        { content: 'REST API를 이용한 비동기 통신 처리' },
        { content: 'Figma 통해 UI/UX 소통' },
      ],
      imageSrc: 'http://drive.google.com/uc?export=view&id=1kfChjYXwRDoE80B7_0mpYLDqlDJTBTmT',
    },
    {
      title: 'Wapl Shop 출시 및 유지 보수',
      startedAt: '2021-10',
      endedAt: '2022-03',
      where: '티맥스 에이아이',
      descriptions: [
        {
          content: 'ElectronJS, React 기반 사내 카페 POS 화면 개발 및 유지 보수',
          postImage: 'http://drive.google.com/uc?export=view&id=1i_fu4cQMNw1IcwN7Kmki7QI1MyWPglw8',
        },
        { content: 'MobX state 관리 라이브러리 사용하여 장바구니 state 관리' },
        {
          content: 'MobX패턴에 적합하게 컴포넌트 분리하는 리팩토링 작업',
          descriptions: [{ content: 're-render 효율성을 위한 컴포넌트 세분화' }],
        },
        {
          content: 'Node JS를 이용한 db 쿼리 요청문 작성, 영수증 출력 구현',
          postImage: 'http://drive.google.com/uc?export=view&id=1dd7f5o-6udV3R7OCzDmOrUhQdj2asOzz',
          descriptions: [
            { content: 'ipc 통신 기반 설계' },
            { content: 'Promise 객체를 사용하여 비동기 처리', weight: 'MEDIUM' },
            { content: 'BxlPrinter web sdk를 이용하여 와플샵 영수증 출력 포맷 구현' },
          ],
        },
        {
          content: 'devDependency 비롯한 package.json 정리, 프로젝트 용량20MB 감소',
        },
        { content: 'Figma 통해 UI/UX 소통' },
      ],
    },
    {
      // TODO: 가능하면 animation gif 를 올리자, 숫자 애니메이션, 로딩 애니메이션, 커피 애니메이션, 진행도 애니메이션
      title: 'Wapl Pay 개발 및 출시',
      startedAt: '2021-07',
      endedAt: '2022-11',
      where: '티맥스 에이아이',
      descriptions: [
        { content: 'React Native 기반 사내 카페 주문 모바일 App 개발' },
        {
          content:
            'Reanimated API를 이용한 숫자변환, 로딩, 진행도, 커피, Transition 애니메이션 개발',
          postImage: 'http://drive.google.com/uc?export=view&id=1cV_NLL4vtbsVieQ9aGP2SfGA0VkRc6gw',
          isMobileImage: true,
          descriptions: [
            {
              content: 'bridge 비동기 통신 구조의 단점을 극복하는 라이브러리 선택  ',
            },
          ],
        },
        { content: 'Figma 통해 UI/UX 소통' },
      ],
    },
    {
      title: '신한 텔러 외부 공모',
      startedAt: '2021-02',
      endedAt: '2021-02',
      where: '티맥스 에이아이',
      descriptions: [
        { content: 'Home 화면 및 대출 심사 팝업 화면 개발' },
        { content: '신한은행 로고, 알림, 프로필 사진을 포함하는 Header 구현' },
        { content: 'UI/UX 문서 기반 결재 Content 구현' },
        { content: '결재의견란, 파일 업로드 기능 구현' },
      ],
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
          descriptions: [{ content: 'DatePicker, TableView, TextField IE에서 오작동 버그 수정' }],
        },
        {
          content: 'ES5을 이용하여 inputmask 기능 구현',
          descriptions: [
            { content: '렌더링 시간을 줄이기 위해 기존 JQuery를 사용하는 inputmask 대체' },
          ],
        },
      ],
    },
  ],
};

export default project;
