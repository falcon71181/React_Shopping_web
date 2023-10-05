import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["onEventClick", "locale"];
import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { useEventStyle, useEventDuration, useFormattedEventTimeRange, useFormattedEventStartDate } from './hooks';
import StyledEvent from './styled/event';
import StyledEventItem from './styled/eventItem';
import StyledEventTitle from './styled/eventTitle';
import RenderIf from '../../RenderIf';
export default function Event(props) {
  var onEventClick = props.onEventClick,
      locale = props.locale,
      event = _objectWithoutProperties(props, _excluded);

  var title = event.title,
      startDate = event.startDate,
      endDate = event.endDate,
      color = event.color,
      backgroundColor = event.backgroundColor;
  var eventId = useUniqueIdentifier('calendar-event');
  var duration = useEventDuration(startDate, endDate);
  var style = useEventStyle(startDate, duration);
  var formattedTimeRange = useFormattedEventTimeRange(startDate, endDate, locale);
  var formattedStartDate = useFormattedEventStartDate(startDate, locale);
  return React.createElement(StyledEvent, {
    id: eventId,
    style: style,
    color: color,
    backgroundColor: backgroundColor,
    onClick: function onClick() {
      return onEventClick(event);
    }
  }, React.createElement(StyledEventItem, null, React.createElement(StyledEventTitle, null, title), React.createElement(RenderIf, {
    isTrue: duration < 60
  }, React.createElement("span", null, ",\xA0"), React.createElement("span", null, formattedStartDate))), React.createElement(RenderIf, {
    isTrue: duration >= 60
  }, React.createElement(StyledEventItem, null, formattedTimeRange)));
}
Event.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onEventClick: PropTypes.func,
  locale: PropTypes.string
};
Event.defaultProps = {
  onEventClick: function onEventClick() {},
  locale: undefined,
  color: undefined,
  backgroundColor: undefined
};