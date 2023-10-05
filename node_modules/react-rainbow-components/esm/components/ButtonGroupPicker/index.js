import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import { Provider } from './context';
import { StyledButtonGroup, StyledContainer, StyledErrorText, StyledHelpText } from './styled';

var ButtonGroupPicker = function (_Component) {
  _inherits(ButtonGroupPicker, _Component);

  var _super = _createSuper(ButtonGroupPicker);

  function ButtonGroupPicker(props) {
    var _this;

    _classCallCheck(this, ButtonGroupPicker);

    _this = _super.call(this, props);
    var name = _this.props.name;
    _this.groupNameId = name || uniqueId('options');
    _this.errorMessageId = uniqueId('error-message');
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonGroupPicker, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var _this$props = this.props,
          multiple = _this$props.multiple,
          size = _this$props.size,
          value = _this$props.value,
          variant = _this$props.variant;
      return {
        onChange: this.handleOnChange,
        values: value,
        type: multiple ? 'checkbox' : 'radio',
        name: this.groupNameId,
        ariaDescribedBy: this.getErrorMessageId(),
        size: size,
        variant: variant
      };
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event) {
      var _event$target = event.target,
          eventValue = _event$target.value,
          checked = _event$target.checked;
      var _this$props2 = this.props,
          value = _this$props2.value,
          multiple = _this$props2.multiple,
          onChange = _this$props2.onChange;

      if (!multiple) {
        return onChange(eventValue);
      }

      if (checked && Array.isArray(value)) {
        return onChange(value.concat([eventValue]));
      }

      if (checked && !Array.isArray(value)) {
        return onChange([eventValue]);
      }

      return onChange(value.filter(function (valueId) {
        return valueId !== eventValue;
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          className = _this$props3.className,
          style = _this$props3.style,
          label = _this$props3.label,
          children = _this$props3.children,
          error = _this$props3.error,
          bottomHelpText = _this$props3.bottomHelpText,
          required = _this$props3.required,
          labelAlignment = _this$props3.labelAlignment,
          hideLabel = _this$props3.hideLabel,
          variant = _this$props3.variant,
          borderRadius = _this$props3.borderRadius;
      var context = this.getContext();
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style,
        borderRadius: borderRadius
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        as: "legend"
      })), React.createElement(StyledButtonGroup, {
        variant: variant,
        borderRadius: borderRadius
      }, React.createElement(Provider, {
        value: context
      }, children)), React.createElement(RenderIf, {
        isTrue: bottomHelpText
      }, React.createElement(StyledHelpText, null, bottomHelpText)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledErrorText, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return ButtonGroupPicker;
}(Component);

ButtonGroupPicker.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  name: PropTypes.string,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'shaded']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonGroupPicker.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  label: undefined,
  value: undefined,
  required: false,
  onChange: function onChange() {},
  multiple: false,
  name: undefined,
  size: 'medium',
  error: undefined,
  bottomHelpText: undefined,
  children: undefined,
  labelAlignment: 'center',
  variant: 'default',
  hideLabel: false,
  borderRadius: 'rounded'
};
export default withReduxForm(ButtonGroupPicker);
export { ButtonGroupPicker as Component };