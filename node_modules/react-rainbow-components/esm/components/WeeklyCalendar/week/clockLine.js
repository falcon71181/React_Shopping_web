import React from 'react';
import { useTimer } from '../hooks';
import { useClockLineStyle } from './hooks';
import StyledClockLine from './styled/clockLine';
import StyledCircle from './styled/circle';
import StyledLine from './styled/line';
export default function ClockLine() {
  var clock = useTimer();
  var style = useClockLineStyle(clock);
  return React.createElement(StyledClockLine, {
    style: style
  }, React.createElement(StyledCircle, null), React.createElement(StyledLine, null));
}