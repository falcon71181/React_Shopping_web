import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTimer, useClockStyle } from './hooks';
import { isSameDay } from '../Calendar/helpers';
import StyledHours from './styled/hours';
import StyledHour from './styled/hour';
import StyledClock from './styled/clock';
import StyledTitleHour from './styled/titleHour';
var Hours = React.forwardRef(function (props, ref) {
  var today = props.today,
      setToday = props.setToday,
      locale = props.locale;
  var clock = useTimer();
  useEffect(function () {
    if (!isSameDay(today, clock)) {
      setToday(clock);
    }
  }, [clock, setToday, today]);
  var before = new Date(clock);
  before.setMinutes(before.getMinutes() + 15);
  var after = new Date(clock);
  after.setMinutes(after.getMinutes() - 15);

  function ListHours() {
    var hour = new Date();
    hour.setMinutes(0);
    hour.setSeconds(0);
    return Array.from(Array(24), function (_value, index) {
      hour.setHours(index);
      var formattedHours = new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        hour12: true
      }).format(hour);
      return React.createElement(StyledHour, {
        key: index
      }, React.createElement(StyledTitleHour, {
        visible: before < hour || after > hour
      }, formattedHours));
    });
  }

  var formattedClock = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(clock);
  var style = useClockStyle(clock);
  return React.createElement(StyledHours, {
    ref: ref,
    "data-id": "25"
  }, React.createElement(ListHours, null), React.createElement(StyledClock, {
    style: style
  }, formattedClock));
});
Hours.propTypes = {
  locale: PropTypes.string,
  today: PropTypes.instanceOf(Date),
  setToday: PropTypes.func
};
Hours.defaultProps = {
  locale: undefined,
  today: undefined,
  setToday: function setToday() {}
};
export default Hours;