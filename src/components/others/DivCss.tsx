import React from 'react';
import { css } from '@emotion/css';
import classnames from 'classnames';

const redClass = css('color: red');
const boldClass = css(`
font-style: bold;
text-decoration: underline;
`);

export default function DivCss() {
  return (
    <div>
      <p className={[redClass, boldClass].join(' ')}>
        Start editing to see some magic happen!
      </p>
      <p className={classnames({ [redClass]: true, [boldClass]: true })}>
        Start editing to see some magic happen!
      </p>
    </div>
  );
}
