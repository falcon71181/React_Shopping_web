import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import StyledContainer from './styled/container';
import StyledOptionsContainer from './styled/optionsContainer';
import StyledError from '../Input/styled/errorText';

var VisualPicker = function (_Component) {
  _inherits(VisualPicker, _Component);

  var _super = _createSuper(VisualPicker);

  function VisualPicker(props) {
    var _this;

    _classCallCheck(this, VisualPicker);

    _this = _super.call(this, props);
    _this.errorId = uniqueId('error-message');
    _this.groupNameId = props.name || uniqueId('visual-picker');
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VisualPicker, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorId;
      }

      return undefined;
    }
  }, {
    key: "handleChange",
    value: function handleChange(optionName, isChecked) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          multiple = _this$props.multiple,
          value = _this$props.value;
      var currentValue = optionName;

      if (multiple) {
        if (!Array.isArray(value)) {
          currentValue = isChecked ? [optionName] : [];
        } else {
          currentValue = isChecked ? [].concat(_toConsumableArray(value), [optionName]) : value.filter(function (item) {
            return item !== optionName;
          });
        }
      }

      onChange(currentValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          label = _this$props2.label,
          labelAlignment = _this$props2.labelAlignment,
          hideLabel = _this$props2.hideLabel,
          required = _this$props2.required,
          error = _this$props2.error,
          id = _this$props2.id,
          children = _this$props2.children,
          value = _this$props2.value,
          multiple = _this$props2.multiple,
          className = _this$props2.className,
          size = _this$props2.size;
      var context = {
        ariaDescribedby: this.getErrorMessageId(),
        groupName: this.groupNameId,
        privateOnChange: this.handleChange,
        value: value,
        multiple: multiple,
        size: size
      };
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        as: "legend"
      })), React.createElement(StyledOptionsContainer, null, React.createElement(Provider, {
        value: context
      }, children)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledError, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return VisualPicker;
}(Component);

VisualPicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  id: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  multiple: PropTypes.bool
};
VisualPicker.defaultProps = {
  name: null,
  value: undefined,
  id: undefined,
  onChange: function onChange() {},
  required: false,
  label: null,
  labelAlignment: 'center',
  hideLabel: false,
  error: null,
  className: undefined,
  style: undefined,
  size: 'medium',
  children: [],
  multiple: false
};
export default withReduxForm(VisualPicker);