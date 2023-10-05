import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import StyledCircleSpinner from './styled/circleSpinner';
import StyledArcSpinner from './styled/arcSpinner';
import StyledSpinnerContainer from './styled/spinnerContainer';
import StyledChildContainer from './styled/childContainer';
import getSizeValue from './helpers/getSizeValue';
export default function Spinner(props) {
  var className = props.className,
      style = props.style,
      assistiveText = props.assistiveText,
      isVisible = props.isVisible,
      size = props.size,
      variant = props.variant,
      type = props.type,
      children = props.children;
  var currentSize = getSizeValue(size);

  if (isVisible) {
    if (type === 'arc') {
      return React.createElement(StyledSpinnerContainer, {
        className: className,
        style: style
      }, React.createElement(StyledArcSpinner, {
        viewBox: "".concat(0, " ", 0, " ", currentSize, " ").concat(currentSize),
        size: size,
        variant: variant
      }, React.createElement("circle", {
        className: "path",
        cx: currentSize / 2,
        cy: currentSize / 2,
        r: (currentSize - 3) / 2,
        fill: "none",
        strokeWidth: "3"
      })), React.createElement(StyledChildContainer, null, children), React.createElement(AssistiveText, {
        text: assistiveText
      }));
    }

    return React.createElement(StyledCircleSpinner, {
      className: className,
      size: size,
      variant: variant,
      style: style
    }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement(StyledChildContainer, null, children), React.createElement(AssistiveText, {
      text: assistiveText
    }));
  }

  return null;
}
Spinner.propTypes = {
  variant: PropTypes.oneOf(['base', 'brand', 'inverse', 'neutral']),
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large']),
  isVisible: PropTypes.bool,
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['circle', 'arc']),
  children: PropTypes.node
};
Spinner.defaultProps = {
  variant: 'base',
  size: 'medium',
  isVisible: true,
  assistiveText: null,
  className: undefined,
  style: undefined,
  type: 'circle',
  children: null
};