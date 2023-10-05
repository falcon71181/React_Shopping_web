import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlider, StyledInputRange } from './styled';
export default function Slider(props) {
  var value = props.value,
      min = props.min,
      max = props.max,
      tabIndex = props.tabIndex,
      onChange = props.onChange,
      style = props.style,
      className = props.className;
  return React.createElement(StyledSlider, {
    className: className,
    style: style
  }, React.createElement(StyledInputRange, {
    type: "range",
    value: value,
    min: min,
    max: max,
    onChange: onChange,
    tabIndex: tabIndex
  }));
}
Slider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
Slider.defaultProps = {
  value: undefined,
  min: 0,
  max: 100,
  tabIndex: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};