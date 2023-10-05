import React from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from './calendarIcon';
import StyledLi from './styled/li';
import StyledColumnLeft from './styled/columnLeft';
import StyledIconContainer from './styled/iconContainer';
import StyledContentContainer from './styled/contentContainer';
import StyledHeader from './styled/header';
import StyledLabel from './styled/label';
import StyledDatetime from './styled/datetime';
import StyledDescription from './styled/description';
import StyledBody from './styled/body';
export default function BasicTimelineMarker(props) {
  var icon = props.icon,
      label = props.label,
      description = props.description,
      datetime = props.datetime,
      children = props.children,
      className = props.className,
      style = props.style;
  return React.createElement(StyledLi, {
    className: className,
    style: style
  }, React.createElement(StyledColumnLeft, null, React.createElement(StyledIconContainer, null, icon)), React.createElement(StyledContentContainer, null, React.createElement("div", null, React.createElement(StyledHeader, null, React.createElement(StyledLabel, null, label), React.createElement(StyledDatetime, null, datetime)), React.createElement(StyledDescription, null, description)), React.createElement(StyledBody, null, children)));
}
BasicTimelineMarker.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};
BasicTimelineMarker.defaultProps = {
  label: null,
  description: null,
  datetime: null,
  icon: React.createElement(CalendarIcon, null),
  children: null,
  className: undefined,
  style: undefined
};