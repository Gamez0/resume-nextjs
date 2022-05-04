import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, particpant } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Pay & Shop 2개 프로젝트를 기획부터 출시까지한 경험이 있습니다.',
    'React Native, React, TypeScript, Electron, MobX, Git, Figma등을 주로 사용했습니다. MobX 패턴에 맞도록 컴포넌트를 성능 최적화한 경험,  NodeJS환경도 포함된 Shop 프로젝트에서, Promise객체를 이용한 비동기 처리 경험이 있습니다.',
    '저는 rough한 코드들이 스터디를 통해 최적화되어 가는 것을 좋아합니다. 움켜쥐지 않고 펴서 돕는 서비스를 개발하는 환경을 찾고 있습니다.',
  ],
  // sign: 'Love poem',
  sign: particpant.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
