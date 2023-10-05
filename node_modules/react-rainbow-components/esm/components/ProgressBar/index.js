import React from 'react';
import PropTypes from 'prop-types';
import AsistiveText from '../AssistiveText';
import normalizeValue from './normalizeValue';
import StyledContainer from './styled/container';
import StyledBar from './styled/bar';
export default function ProgressBar(props) {
  var className = props.className,
      style = props.style,
      assistiveText = props.assistiveText,
      value = props.value,
      size = props.size,
      variant = props.variant;
  var normalizedValue = normalizeValue(value);
  var WIDTH = {
    width: "".concat(normalizedValue, "%")
  };
  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    size: size,
    variant: variant,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": normalizedValue,
    role: "progressbar",
    "aria-label": assistiveText
  }, React.createElement(StyledBar, {
    variant: variant,
    style: WIDTH
  }, React.createElement(AsistiveText, {
    text: assistiveText
  })));
}
ProgressBar.propTypes = {
  value: PropTypes.number,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  variant: PropTypes.oneOf(['brand', 'success']),
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
ProgressBar.defaultProps = {
  value: 0,
  size: 'medium',
  variant: 'brand',
  assistiveText: '',
  className: undefined,
  style: undefined
};