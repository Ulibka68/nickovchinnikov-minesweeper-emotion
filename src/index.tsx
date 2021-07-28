import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from './components/Top';
import { Scoreboard } from './components/Scoreboard';
import Button from '@/components/others/Button';
import DivCss from '@/components/others/DivCss';

ReactDOM.render(
  <>
    <div>
      <p>Button</p>
      <Button />
    </div>
    <div>
      <DivCss />
    </div>
    <Top feature="Flag" firstAction="ctrl" secondAction="click">
      Minesweeper
    </Top>
    <Scoreboard
      time="000"
      levels={['beginner', 'intermediate', 'expert']}
      mines="010"
      onReset={() => null}
    />
  </>,
  document.getElementById('root')
);
