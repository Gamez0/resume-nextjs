import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, particpant } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Pay & Shop 2개 서비스를 기획부터 출시까지한 경험이 있습니다.',
    'React Native에서 아키텍쳐 한계로 인한 frame drop이 없는 animation 개발한 경험이 있고, MobX패턴에 맞게 컴포넌트 구현과 성능 최적화 작업한 경험이 있습니다.',
    'Jest를 프로젝트에 주도적으로 도입하여 테스트를 진행할 수 있는 환경 세팅을 했고, 현재는 Electron 프로젝트를 React Native로 imigration하는 작업을 진행하고 있습니다.',
    '움켜쥐지 않고 펴서 돕는 서비스를 개발하는 환경을 찾고 있습니다.',
  ],
  // sign: 'Love poem',
  sign: particpant.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
