import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Label from '../checkboxRadioLabel';
import StyledContainer from './styled/container';
import StyledRadioInput from './styled/radio';

var Radio = function (_Component) {
  _inherits(Radio, _Component);

  var _super = _createSuper(Radio);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _super.call(this, props);
    _this.inputId = uniqueId('input-radio');
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(Radio, [{
    key: "focus",
    value: function focus() {
      this.inputRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.inputRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.inputRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value,
          onChange = _this$props.onChange,
          tabIndex = _this$props.tabIndex,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          disabled = _this$props.disabled,
          checked = _this$props.checked,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaDescribedBy = _this$props.ariaDescribedBy,
          error = _this$props.error,
          label = _this$props.label,
          hideLabel = _this$props.hideLabel;
      return React.createElement(StyledContainer, {
        "data-id": "input-radio_container"
      }, React.createElement(StyledRadioInput, {
        as: "input",
        id: this.inputId,
        name: name,
        type: "radio",
        value: value,
        onChange: onChange,
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onKeyDown: onKeyDown,
        disabled: disabled,
        checked: checked,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        ref: this.inputRef,
        error: error
      }), React.createElement(Label, {
        label: label,
        hideLabel: hideLabel,
        disabled: disabled,
        inputId: this.inputId,
        id: ariaLabelledBy
      }));
    }
  }]);

  return Radio;
}(Component);

export { Radio as default };
Radio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  checked: PropTypes.bool,
  hideLabel: PropTypes.bool,
  ariaLabelledBy: PropTypes.string,
  ariaDescribedBy: PropTypes.string
};
Radio.defaultProps = {
  value: undefined,
  label: undefined,
  name: undefined,
  error: null,
  disabled: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  checked: undefined,
  hideLabel: false,
  ariaLabelledBy: undefined,
  ariaDescribedBy: undefined
};