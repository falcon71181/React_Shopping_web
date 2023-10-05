import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["variant"];
import React from 'react';
import PropTypes from 'prop-types';
import AccordionTimeline from './accordionTimeline';
import BasicTimeline from './basicTimeline';
export default function ActivityTimeline(props) {
  var variant = props.variant,
      rest = _objectWithoutProperties(props, _excluded);

  if (variant === 'accordion') {
    return React.createElement(AccordionTimeline, rest);
  }

  return React.createElement(BasicTimeline, rest);
}
ActivityTimeline.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.object,
  multiple: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'accordion']),
  activeSectionNames: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  onToggleSection: PropTypes.func
};
ActivityTimeline.defaultProps = {
  id: undefined,
  children: null,
  className: undefined,
  style: undefined,
  variant: 'default',
  multiple: false,
  onToggleSection: undefined,
  activeSectionNames: undefined
};