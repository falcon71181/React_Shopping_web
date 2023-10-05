import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ActivityTimelineContext } from '../ActivityTimeline/context';
import CalendarIcon from './calendarIcon';
import AccordionTimelineMarker from './accordionMarker';
import BasicTimelineMarker from './basicMarker';
export default function TimelineMarker(props) {
  var context = useContext(ActivityTimelineContext);

  if (context) {
    return React.createElement(AccordionTimelineMarker, props);
  }

  return React.createElement(BasicTimelineMarker, props);
}
TimelineMarker.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  isLoading: PropTypes.bool
};
TimelineMarker.defaultProps = {
  label: null,
  description: null,
  datetime: null,
  icon: React.createElement(CalendarIcon, null),
  children: null,
  className: undefined,
  style: undefined,
  name: undefined,
  isLoading: false
};