import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import createBadge from './createBadge';
import { ISkill } from './ISkill';

export default function Detail({ payload }: PropsWithChildren<{ payload: ISkill.Payload }>) {
  const layer = [1, 2, 3];
  return (
    <div>
      <Row>
        {layer.map((level, index) => {
          return (
            <Col className="text-md-center">
              {createBadge(level)}
              <div>{payload.detail[index]}</div>
            </Col>
          );
        })}
      </Row>
      <hr />
    </div>
  );
}
