import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledSlider from './styled/slider';
import StyledInputRange from './styled/inputRange';
import StyledValue from './styled/value';
import ErrorText from '../Input/styled/errorText';

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this.sliderId = uniqueId('slider-id');
    _this.errorMessageId = uniqueId('error-message');
    _this.sliderRef = React.createRef();
    return _this;
  }

  _createClass(Slider, [{
    key: "getAriaDescribedBy",
    value: function getAriaDescribedBy() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "click",
    value: function click() {
      this.sliderRef.current.click();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.sliderRef.current.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.sliderRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          name = _this$props.name,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          error = _this$props.error,
          disabled = _this$props.disabled,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          onFocus = _this$props.onFocus,
          style = _this$props.style,
          className = _this$props.className,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          required = _this$props.required;
      var valueWidth = Math.max("".concat(max).length, "".concat(min).length) + 1;
      return React.createElement(StyledContainer, {
        className: className,
        style: style
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(StyledLabel, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        inputId: this.sliderId,
        required: required
      })), React.createElement(StyledSlider, null, React.createElement(StyledInputRange, {
        id: this.sliderId,
        type: "range",
        name: name,
        value: value,
        min: min,
        max: max,
        step: step,
        "aria-describedby": this.getAriaDescribedBy(),
        disabled: disabled,
        required: required,
        onClick: onClick,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        ref: this.sliderRef
      }), React.createElement(StyledValue, {
        width: valueWidth,
        "aria-hidden": true
      }, value)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(ErrorText, {
        id: this.errorMessageId
      }, error)));
    }
  }]);

  return Slider;
}(Component);

export { Slider as default };
Slider.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
Slider.defaultProps = {
  label: null,
  value: undefined,
  name: undefined,
  min: 0,
  max: 100,
  step: 1,
  error: undefined,
  disabled: false,
  required: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: null,
  labelAlignment: 'center',
  hideLabel: false
};