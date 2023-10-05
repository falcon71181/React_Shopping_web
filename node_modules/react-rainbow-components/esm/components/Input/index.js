import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBase from './inputBase';
import InputRadio from './inputRadio';
import InputCheckbox from './inputCheckbox';
import withReduxForm from '../../libs/hocs/withReduxForm';

var Input = function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(Input, [{
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
      var type = this.props.type;

      if (type === 'radio') {
        return React.createElement(InputRadio, _extends({
          ref: this.inputRef
        }, this.props));
      }

      if (type === 'checkbox') {
        return React.createElement(InputCheckbox, _extends({
          ref: this.inputRef
        }, this.props));
      }

      return React.createElement(InputBase, _extends({
        ref: this.inputRef
      }, this.props));
    }
  }]);

  return Input;
}(Component);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color', 'radio', 'checkbox']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  pattern: PropTypes.string,
  isCentered: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right'])
};
Input.defaultProps = {
  value: undefined,
  type: 'text',
  name: undefined,
  placeholder: null,
  icon: undefined,
  iconPosition: 'left',
  max: undefined,
  min: undefined,
  maxLength: undefined,
  minLength: undefined,
  bottomHelpText: null,
  required: false,
  pattern: undefined,
  isCentered: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  checked: undefined,
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  autoComplete: 'on',
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  size: 'medium',
  valueAlignment: undefined
};
export default withReduxForm(Input);