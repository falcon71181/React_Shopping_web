import React from 'react';
import PropTypes from 'prop-types';
import StyledArrowButton from './styled/arrowButton';
export default function MenuArrowButton(props) {
  var arrow = props.arrow,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave;
  return React.createElement(StyledArrowButton, {
    "data-id": "lookup-arrow-button-".concat(arrow),
    arrow: arrow,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  });
}
MenuArrowButton.propTypes = {
  arrow: PropTypes.oneOf(['up', 'down']).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};
MenuArrowButton.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};