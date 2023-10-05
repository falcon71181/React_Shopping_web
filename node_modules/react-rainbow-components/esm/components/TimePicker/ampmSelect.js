import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import isChecked from './helpers/isChecked';
import StyledInputHidden from './styled/inputHidden';
import StyledOptionLabel from './styled/optionLabel';
import StyledSelectValue from './styled/selectValue';

function handleAmPmBlur(event) {
  event.stopPropagation();
}

var AmPmSelect = function (_PureComponent) {
  _inherits(AmPmSelect, _PureComponent);

  var _super = _createSuper(AmPmSelect);

  function AmPmSelect(props) {
    var _this;

    _classCallCheck(this, AmPmSelect);

    _this = _super.call(this, props);
    _this.fieldsetRef = React.createRef();
    _this.inputAmId = uniqueId('am');
    _this.inputPmId = uniqueId('pm');
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AmPmSelect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isFocused = this.props.isFocused;
      if (isFocused) this.focus();
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value;

      if (!value) {
        onChange(defaultValue || 'AM');
      }

      onFocus();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event) {
      var onChange = this.props.onChange;
      var value = event.target.value;
      onChange(value);
    }
  }, {
    key: "isInputChecked",
    value: function isInputChecked(inputValue) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          defaultValue = _this$props2.defaultValue;
      return isChecked({
        inputValue: inputValue,
        value: value,
        defaultValue: defaultValue
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      this.fieldsetRef.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isFocused = _this$props3.isFocused,
          tabIndex = _this$props3.tabIndex,
          onFocus = _this$props3.onFocus,
          value = _this$props3.value,
          onClick = _this$props3.onClick;

      if (isFocused) {
        return React.createElement(StyledSelectValue, {
          as: "fieldset",
          "data-id": "fieldset-element",
          role: "presentation",
          tabIndex: tabIndex,
          onFocus: onFocus,
          ref: this.fieldsetRef,
          isFocused: isFocused
        }, React.createElement(StyledInputHidden, {
          as: "input",
          type: "radio",
          id: this.inputAmId,
          name: "ampmOptions",
          value: "AM",
          checked: this.isInputChecked('AM'),
          onChange: this.handleOnChange,
          onClick: onClick,
          onBlur: handleAmPmBlur
        }), React.createElement(StyledOptionLabel, {
          htmlFor: this.inputAmId
        }, "am"), React.createElement(StyledInputHidden, {
          as: "input",
          type: "radio",
          id: this.inputPmId,
          name: "ampmOptions",
          value: "PM",
          checked: this.isInputChecked('PM'),
          onChange: this.handleOnChange,
          onClick: onClick,
          onBlur: handleAmPmBlur
        }), React.createElement(StyledOptionLabel, {
          htmlFor: this.inputPmId
        }, "pm"));
      }

      return React.createElement(StyledSelectValue, {
        "aria-label": "am-pm selector",
        tabIndex: tabIndex,
        onFocus: this.handleFocus,
        placeholder: "--",
        defaultValue: value,
        ref: this.fieldsetRef
      });
    }
  }]);

  return AmPmSelect;
}(PureComponent);

export { AmPmSelect as default };
AmPmSelect.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  tabIndex: PropTypes.string,
  isFocused: PropTypes.bool
};
AmPmSelect.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  onClick: function onClick() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  tabIndex: undefined,
  isFocused: false
};