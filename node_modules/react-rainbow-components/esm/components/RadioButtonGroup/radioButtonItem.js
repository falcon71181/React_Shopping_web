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
import StyledButtonItem from './styled/buttonItem';
import StyledButtonItemLabel from './styled/buttonItemLabel';
import StyledInput from './styled/input';

var RadioButtonItem = function (_Component) {
  _inherits(RadioButtonItem, _Component);

  var _super = _createSuper(RadioButtonItem);

  function RadioButtonItem(props) {
    var _this;

    _classCallCheck(this, RadioButtonItem);

    _this = _super.call(this, props);
    _this.radioId = uniqueId('radiobutton');
    return _this;
  }

  _createClass(RadioButtonItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          itemRef = _this$props.itemRef,
          label = _this$props.label,
          ariaDescribedby = _this$props.ariaDescribedby,
          onChange = _this$props.onChange,
          value = _this$props.value,
          disabled = _this$props.disabled,
          isChecked = _this$props.isChecked,
          name = _this$props.name,
          required = _this$props.required,
          variant = _this$props.variant,
          size = _this$props.size;
      return React.createElement(StyledButtonItem, {
        "data-id": "radio-button-group_radio-container",
        variant: variant,
        size: size,
        isChecked: isChecked,
        disabled: disabled,
        ref: itemRef
      }, React.createElement(StyledInput, {
        type: "radio",
        required: required,
        id: this.radioId,
        name: name,
        value: value,
        checked: isChecked,
        "aria-describedby": ariaDescribedby,
        onChange: onChange,
        disabled: disabled
      }), React.createElement(StyledButtonItemLabel, {
        disabled: disabled,
        isChecked: isChecked,
        variant: variant,
        htmlFor: this.radioId,
        size: size
      }, label));
    }
  }]);

  return RadioButtonItem;
}(Component);

export { RadioButtonItem as default };
RadioButtonItem.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  ariaDescribedby: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool.isRequired,
  itemRef: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large'])
};
RadioButtonItem.defaultProps = {
  value: undefined,
  onChange: function onChange() {},
  ariaDescribedby: undefined,
  disabled: false,
  isChecked: false,
  name: undefined,
  variant: 'default',
  size: 'medium'
};