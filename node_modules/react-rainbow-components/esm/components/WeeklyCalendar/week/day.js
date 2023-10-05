import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { useEventsOfDay } from './hooks';
import Event from './event';
import StyledDay from './styled/day';
export default function Day(props) {
  var day = props.day,
      events = props.events,
      onEventClick = props.onEventClick,
      locale = props.locale;
  var eventsOfDay = useEventsOfDay(events, day);

  var Events = function Events() {
    return eventsOfDay.map(function (event) {
      return React.createElement(Event, _extends({
        key: event.id,
        onEventClick: onEventClick,
        locale: locale
      }, event));
    });
  };

  return React.createElement(StyledDay, null, React.createElement(Events, null));
}
Day.propTypes = {
  day: PropTypes.instanceOf(Date),
  events: PropTypes.array,
  onEventClick: PropTypes.func,
  locale: PropTypes.string
};
Day.defaultProps = {
  day: undefined,
  events: [],
  onEventClick: function onEventClick() {},
  locale: undefined
};