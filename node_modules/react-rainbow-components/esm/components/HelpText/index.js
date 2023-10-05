import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useWindowScrolling } from '@rainbow-modules/hooks';
import { useUniqueIdentifier, useDisclosure, useWindowResize } from '../../libs/hooks';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';
import { ESCAPE_KEY } from '../../libs/constants';
import { StyledTooltip, StyledTitle, StyledIconContainer, StyledText, StyledButton } from './styled';
import { ErrorIcon, InfoIcon, QuestionIcon, WarningIcon, ErrorInverseIcon, InfoInverseIcon, QuestionInverseIcon, WarningInverseIcon } from './icons';
var iconMap = {
  question: QuestionIcon,
  info: InfoIcon,
  error: ErrorIcon,
  warning: WarningIcon
};
var inverseIconMap = {
  question: React.createElement(QuestionInverseIcon, null),
  info: React.createElement(InfoInverseIcon, null),
  error: React.createElement(ErrorInverseIcon, null),
  warning: React.createElement(WarningInverseIcon, null)
};
var HelpText = React.forwardRef(function (props, ref) {
  var id = props.id,
      title = props.title,
      text = props.text,
      variant = props.variant,
      tabIndex = props.tabIndex,
      iconSize = props.iconSize,
      className = props.className,
      style = props.style;
  var triggerRef = useRef();
  var helpTextId = useUniqueIdentifier('help-text');

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var isHoverTooltip = useRef(false);
  var isClickTooltip = useRef(false);

  var _useDisclosure = useDisclosure(false),
      isOpen = _useDisclosure.isOpen,
      openOverlay = _useDisclosure.open,
      closeOverlay = _useDisclosure.close;

  useImperativeHandle(ref, function () {
    return {
      close: closeOverlay
    };
  });
  useEffect(function () {
    if (isFocused) {
      openOverlay();
    } else {
      closeOverlay();
    }
  }, [closeOverlay, isFocused, openOverlay]);
  useWindowResize(function () {
    return closeOverlay();
  }, isOpen);
  useWindowScrolling(closeOverlay, isOpen);

  var handleBlur = function handleBlur() {
    if (!isClickTooltip.current) {
      setIsFocused(false);
    }
  };

  var handleButtonMouseLeave = function handleButtonMouseLeave() {
    if (!isFocused) {
      setTimeout(function () {
        if (!isHoverTooltip.current) closeOverlay();
      }, 50);
    }
  };

  var handleTooltipMouseDown = function handleTooltipMouseDown() {
    isClickTooltip.current = true;
  };

  var handleTooltipMouseUp = function handleTooltipMouseUp() {
    isClickTooltip.current = false;
    setTimeout(function () {
      return triggerRef.current.focus();
    });
  };

  var handleTooltipMouseEnter = function handleTooltipMouseEnter() {
    isHoverTooltip.current = true;
  };

  var handleTooltipMouseLeave = function handleTooltipMouseLeave() {
    isHoverTooltip.current = false;

    if (!isFocused) {
      closeOverlay();
    }
  };

  var handleKeyPressed = function handleKeyPressed(event) {
    if (event.keyCode === ESCAPE_KEY) {
      event.preventDefault();
      closeOverlay();
    }
  };

  var Icon = iconMap[variant] || iconMap.info;
  var inverseIcon = inverseIconMap[variant] || inverseIconMap.info;
  return React.createElement(React.Fragment, null, React.createElement(StyledButton, {
    id: id,
    className: className,
    style: style,
    ref: triggerRef,
    onMouseEnter: openOverlay,
    onMouseLeave: handleButtonMouseLeave,
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: handleBlur,
    onKeyDown: handleKeyPressed,
    type: "button",
    tabIndex: tabIndex,
    ariaLabelledby: helpTextId,
    variant: variant,
    iconSize: iconSize
  }, React.createElement(Icon, {
    isFocused: isFocused,
    iconSize: iconSize
  }), React.createElement(AssistiveText, {
    text: variant
  })), React.createElement(RenderIf, {
    isTrue: text
  }, React.createElement(InternalOverlay, {
    isVisible: isOpen,
    render: function render() {
      return React.createElement(StyledTooltip, {
        id: helpTextId,
        role: "tooltip",
        onMouseDown: handleTooltipMouseDown,
        onMouseUp: handleTooltipMouseUp,
        onMouseEnter: handleTooltipMouseEnter,
        onMouseLeave: handleTooltipMouseLeave
      }, React.createElement(RenderIf, {
        isTrue: title
      }, React.createElement(StyledTitle, {
        variant: variant
      }, React.createElement(StyledIconContainer, null, inverseIcon), title)), React.createElement(StyledText, null, text));
    },
    triggerElementRef: triggerRef
  })));
});
HelpText.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.node,
  variant: PropTypes.oneOf(['question', 'info', 'error', 'warning']),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSize: PropTypes.oneOf(['small', 'medium'])
};
HelpText.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  title: undefined,
  text: undefined,
  variant: 'info',
  tabIndex: undefined,
  iconSize: 'medium'
};
export default HelpText;