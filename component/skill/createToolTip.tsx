import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const createTooltip = (
  content?: string,
  ref?: string | HTMLElement | React.RefObject<HTMLElement>,
) => {
  if (!content) {
    return '';
  }
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <small>
      {' '}
      <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
      <Tooltip
        style={{ whiteSpace: 'pre-wrap' }}
        placement="right"
        target={ref || 'skill-tooltip'}
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </small>
  );
};

export default createTooltip;
