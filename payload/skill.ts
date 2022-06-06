import { ISkill } from '../component/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React Native',
      level: 2,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'Typescript',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'MobX',
      level: 2,
    },
    {
      title: 'Reanimated API',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'Electron',
      level: 2,
    },
    {
      title: 'Android/Java',
      level: 1,
    },
    {
      title: 'Flutter/Dart',
      level: 1,
    },
    {
      title: 'Next.js',
      level: 1,
    },
    {
      title: 'Redux',
      level: 1,
    },
    {
      title: 'React query',
      level: 1,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 1,
    },
    {
      title: 'GCP',
      level: 1,
    },
    {
      title: 'MySQL',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'jest',
    },
    {
      title: 'Figma',
    },
    {
      title: 'Source Tree',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'GitLab',
    },
    {
      title: 'Slack',
    },
    {
      title: 'postman',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, backend, etc],
  tooltip: '1: Basic\n2: Demonstrating\n3: Proficient',
  detail: [
    '관련 지식이나 경험이 매우 제한적이며\n기본적인 업무 수행에도 상당한 도움이 필요한 수준.\n업무 관련 꾸준한 학습이 필요함.',
    '기본적인 업무 수행이 가능, 매우 능숙하진 않으나 경험이 있음. 업무 수행을 위해 추가적인 학습이나 타인의 도움이 필요할 수 있음',
    '관련 지식과 경험이 풍부한 편이며\n능숙하게 업무 가능한 수준.\n업무 수행에 특별히 도움이 필요 없음.',
  ],
};

export default skill;
