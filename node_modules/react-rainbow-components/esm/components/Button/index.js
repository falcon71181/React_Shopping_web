import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './content';
import StyledButton from './styled/button';

var Button = function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);
    _this.buttonRef = React.createRef();
    return _this;
  }

  _createClass(Button, [{
    key: "htmlElementRef",
    get: function get() {
      return this.buttonRef;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          isLoading = _this$props.isLoading;
      return disabled || isLoading;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.buttonRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.buttonRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.buttonRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          label = _this$props2.label,
          children = _this$props2.children,
          tabIndex = _this$props2.tabIndex,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onClick = _this$props2.onClick,
          onMouseEnter = _this$props2.onMouseEnter,
          onMouseLeave = _this$props2.onMouseLeave,
          title = _this$props2.title,
          type = _this$props2.type,
          ariaHaspopup = _this$props2.ariaHaspopup,
          id = _this$props2.id,
          isLoading = _this$props2.isLoading,
          variant = _this$props2.variant,
          shaded = _this$props2.shaded,
          ariaPressed = _this$props2.ariaPressed,
          ariaControls = _this$props2.ariaControls,
          ariaExpanded = _this$props2.ariaExpanded,
          onKeyDown = _this$props2.onKeyDown,
          form = _this$props2.form,
          className = _this$props2.className,
          size = _this$props2.size,
          borderRadius = _this$props2.borderRadius;
      return React.createElement(StyledButton, {
        "data-id": "button-element",
        id: id,
        className: className,
        style: style,
        variant: variant,
        isLoading: isLoading,
        shaded: shaded,
        disabled: this.isDisabled(),
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        title: title,
        type: type,
        "aria-haspopup": ariaHaspopup,
        "aria-controls": ariaControls,
        "aria-expanded": ariaExpanded,
        "aria-pressed": ariaPressed,
        onKeyDown: onKeyDown,
        form: form,
        ref: this.buttonRef,
        size: size,
        borderRadius: borderRadius
      }, React.createElement(Content, {
        variant: variant,
        label: label,
        isLoading: isLoading,
        size: size
      }, children));
    }
  }]);

  return Button;
}(Component);

export { Button as default };
Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  variant: PropTypes.oneOf(['base', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'border', 'border-filled', 'inverse', 'border-inverse']),
  shaded: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  ariaHaspopup: PropTypes.bool,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaPressed: PropTypes.bool,
  form: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Button.defaultProps = {
  label: undefined,
  children: null,
  variant: 'neutral',
  shaded: false,
  title: undefined,
  type: 'button',
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  ariaHaspopup: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  isLoading: false,
  ariaPressed: undefined,
  ariaControls: undefined,
  ariaExpanded: undefined,
  form: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};