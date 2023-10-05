import React from 'react';
import PropTypes from 'prop-types';
import { addDays } from '../../Calendar/helpers';
import Day from './day';
import ClockLine from './clockLine';
import StyledContainer from './styled/container';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';
import StyledScroll from './styled/scroll';
import StyledDays from './styled/days';
export default function Week(props) {
  var week = props.week,
      events = props.events,
      onEventClick = props.onEventClick,
      onScroll = props.onScroll,
      locale = props.locale;

  function Days() {
    return Array.from(Array(7), function (_value, index) {
      var day = addDays(week, index);
      return React.createElement(Day, {
        key: index,
        day: day,
        events: events,
        onEventClick: onEventClick,
        locale: locale
      });
    });
  }

  function GridLines() {
    return Array.from(Array(24), function (_value, index) {
      return React.createElement(StyledGridLine, {
        key: index
      });
    });
  }

  return React.createElement(StyledScroll, {
    onScroll: onScroll
  }, React.createElement(StyledContainer, null, React.createElement(StyledGrid, null, React.createElement(GridLines, null)), React.createElement(ClockLine, null), React.createElement(StyledDays, null, React.createElement("div", null), React.createElement(Days, null))));
}
Week.propTypes = {
  week: PropTypes.instanceOf(Date),
  events: PropTypes.array,
  onScroll: PropTypes.func,
  onEventClick: PropTypes.func,
  locale: PropTypes.string
};
Week.defaultProps = {
  week: undefined,
  events: [],
  onScroll: function onScroll() {},
  onEventClick: function onEventClick() {},
  locale: undefined
};