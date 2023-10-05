import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import StyledButton from './styled/button';
import RenderIf from '../RenderIf';
import InternalTooltip from '../InternalTooltip';
import useDefaultTooltipConnector from '../InternalTooltip/hooks/useDefaultTooltipConnector';
var ButtonIcon = React.forwardRef(function (props, ref) {
  var buttonRef = useRef();
  var tooltipRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      get htmlElementRef() {
        return buttonRef;
      },

      get buttonRef() {
        return buttonRef;
      },

      focus: function focus() {
        buttonRef.current.focus();
      },
      click: function click() {
        buttonRef.current.click();
      },
      blur: function blur() {
        buttonRef.current.blur();
      }
    };
  });
  var title = props.title,
      type = props.type,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      focusInProps = props.onFocus,
      blurInProps = props.onBlur,
      assistiveText = props.assistiveText,
      ariaHaspopup = props.ariaHaspopup,
      ariaPressed = props.ariaPressed,
      style = props.style,
      id = props.id,
      ariaControls = props.ariaControls,
      ariaExpanded = props.ariaExpanded,
      icon = props.icon,
      form = props.form,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      mouseEnterInProps = props.onMouseEnter,
      mouseLeaveInProps = props.onMouseLeave,
      className = props.className,
      shaded = props.shaded,
      variant = props.variant,
      size = props.size,
      tooltip = props.tooltip,
      borderRadius = props.borderRadius;

  var _useDefaultTooltipCon = useDefaultTooltipConnector({
    tooltipRef: tooltipRef,
    triggerRef: function triggerRef() {
      return buttonRef;
    }
  }),
      onMouseEnter = _useDefaultTooltipCon.onMouseEnter,
      onMouseLeave = _useDefaultTooltipCon.onMouseLeave,
      onFocus = _useDefaultTooltipCon.onFocus,
      onBlur = _useDefaultTooltipCon.onBlur,
      isTooltipVisible = _useDefaultTooltipCon.isVisible;

  var handleMouseEnter = function handleMouseEnter(event) {
    onMouseEnter();
    mouseEnterInProps(event);
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    onMouseLeave();
    mouseLeaveInProps(event);
  };

  var handleOnFocus = function handleOnFocus(event) {
    onFocus();
    focusInProps(event);
  };

  var handleOnBlur = function handleOnBlur(event) {
    onBlur();
    blurInProps(event);
  };

  return React.createElement(StyledButton, {
    onMouseDown: onMouseDown,
    "data-id": "button-icon-element",
    id: id,
    className: className,
    shaded: shaded,
    variant: variant,
    size: size,
    style: style,
    disabled: disabled,
    tabIndex: tabIndex,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onClick: onClick,
    title: title,
    type: type,
    "aria-haspopup": ariaHaspopup,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-pressed": ariaPressed,
    onKeyDown: onKeyDown,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    form: form,
    ref: buttonRef,
    borderRadius: borderRadius
  }, icon, React.createElement(AssistiveText, {
    text: assistiveText
  }), React.createElement(RenderIf, {
    isTrue: tooltip
  }, React.createElement(InternalTooltip, {
    triggerElementRef: function triggerElementRef() {
      return buttonRef;
    },
    isVisible: isTooltipVisible,
    preferredPosition: "top",
    ref: tooltipRef
  }, tooltip)));
});
ButtonIcon.propTypes = {
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['base', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'border', 'border-filled', 'border-inverse', 'inverse']),
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  shaded: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tooltip: PropTypes.node,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  assistiveText: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  ariaPressed: PropTypes.bool,
  form: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonIcon.defaultProps = {
  icon: null,
  variant: 'base',
  size: 'medium',
  shaded: false,
  title: undefined,
  type: 'button',
  disabled: false,
  tabIndex: undefined,
  tooltip: undefined,
  onClick: function onClick() {},
  onMouseDown: function onMouseDown() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  assistiveText: undefined,
  ariaHaspopup: undefined,
  className: undefined,
  ariaPressed: undefined,
  style: undefined,
  id: undefined,
  ariaControls: undefined,
  ariaExpanded: undefined,
  form: undefined,
  borderRadius: 'rounded'
};
export default ButtonIcon;