import { createRef } from 'react';
import { Badge } from 'reactstrap';
import { ISkill } from './ISkill';

export default function createBadge(level?: ISkill.Item['level'] | number) {
  if (!level) {
    return '';
  }
  const badgeRef = createRef<HTMLElement>();

  const color = (() => {
    switch (level) {
      case 3: {
        return 'primary';
      }
      case 2: {
        return 'secondary';
      }
      case 1:
      default: {
        return 'light';
      }
    }
  })();
  return (
    <span>
      <Badge pill color={color} innerRef={badgeRef}>
        {level}
      </Badge>{' '}
    </span>
  );
}
