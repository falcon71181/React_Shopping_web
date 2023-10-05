import React from 'react';
import PropTypes from 'prop-types';
import { addDays, isSameDay } from '../../Calendar/helpers';
import StyledHeader from './styled/header';
import StyledDay from './styled/day';
import StyledDays from './styled/days';
import StyledHours from './styled/hours';
import StyledContentDay from './styled/contentDay';
import StyledWeekDay from './styled/weekDay';
import StyledNumberDay from './styled/numberDay';
import { useFormatedWeekDay, useFormattedNumberDay } from './hooks';
var timeZone = new Date().toTimeString().substring(9, 15);
var Header = React.forwardRef(function (props, ref) {
  var week = props.week,
      today = props.today,
      locale = props.locale;
  var formattedWeekDay = useFormatedWeekDay(locale);
  var formattedNumberDay = useFormattedNumberDay(locale);

  function Days() {
    return Array.from(Array(7), function (_value, index) {
      var day = addDays(week, index);
      return React.createElement(StyledDay, {
        key: index
      }, React.createElement(StyledContentDay, {
        isToday: isSameDay(today, day)
      }, React.createElement(StyledWeekDay, null, formattedWeekDay(day)), React.createElement(StyledNumberDay, null, formattedNumberDay(day))));
    });
  }

  return React.createElement(StyledHeader, {
    role: "presentation"
  }, React.createElement(StyledHours, null, timeZone), React.createElement(StyledDays, {
    ref: ref
  }, React.createElement("div", null), React.createElement(Days, null)), React.createElement("div", null));
});
Header.propTypes = {
  week: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
  locale: PropTypes.string
};
Header.defaultProps = {
  week: undefined,
  today: undefined,
  locale: undefined
};
export default Header;