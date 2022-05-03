import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      key: 1,
      title: '인하대학교',
      subTitle: '컴퓨터공학과',
      startedAt: '2014-03',
      endedAt: '2020-09',
    },
    {
      key: 2,
      title: '경기고등학교',
      subTitle: 'Graduated',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
