import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import normalizeValue from './normalizeValue';
import ProgressRing from './progressRing';
import StyledContainer from './styled/container';
import StyledPercentValue from './styled/percentValue';
export default function ProgressCircular(props) {
  var value = props.value,
      variant = props.variant,
      assistiveText = props.assistiveText,
      className = props.className,
      style = props.style;
  var normalizedValue = normalizeValue(value);
  return React.createElement(StyledContainer, {
    className: className,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": normalizedValue,
    role: "progressbar",
    "aria-label": assistiveText,
    style: style
  }, React.createElement(ProgressRing, {
    variant: variant,
    percent: normalizedValue
  }), React.createElement(StyledPercentValue, {
    variant: variant
  }, "".concat(normalizedValue, "%")), React.createElement(AssistiveText, {
    text: assistiveText
  }));
}
ProgressCircular.propTypes = {
  value: PropTypes.number,
  variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
ProgressCircular.defaultProps = {
  value: 0,
  variant: 'brand',
  assistiveText: '',
  className: undefined,
  style: undefined
};