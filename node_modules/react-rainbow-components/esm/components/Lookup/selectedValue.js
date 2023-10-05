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
import copy from 'clipboard-copy';
import formatValue from './helpers/formatValue';
import RenderIf from '../RenderIf/index';
import StyledReadOnlySelectedInput from './styled/input';
import StyledSelectedValueIcon from './styled/selectedValueIcon';
import StyledSelectedValueContainer from './styled/selectedValueContainer';
import { StyledCombobox, StyledInput } from '../MultiSelect/styled';
import StyledChip from './styled/chip';
import StyledSelectedIconContainer from './styled/selectedIconContainer';

var SelectedValue = function (_Component) {
  _inherits(SelectedValue, _Component);

  var _super = _createSuper(SelectedValue);

  function SelectedValue(props) {
    var _this;

    _classCallCheck(this, SelectedValue);

    _this = _super.call(this, props);
    _this.inputRef = React.createRef();
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectedValue, [{
    key: "handleFocus",
    value: function handleFocus() {
      var value = this.props.value;

      var _formatValue = formatValue(value),
          label = _formatValue.label;

      copy(label);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) {
        this.inputRef.current.focus();
      }

      onClick(event);
    }
  }, {
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
      var _this$props2 = this.props,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          onClearValue = _this$props2.onClearValue,
          id = _this$props2.id,
          name = _this$props2.name,
          tabIndex = _this$props2.tabIndex,
          required = _this$props2.required,
          onClick = _this$props2.onClick,
          errorMessageId = _this$props2.errorMessageId,
          error = _this$props2.error,
          borderRadius = _this$props2.borderRadius;

      var _formatValue2 = formatValue(value),
          label = _formatValue2.label,
          icon = _formatValue2.icon;

      return React.createElement(StyledSelectedValueContainer, {
        readOnly: readOnly
      }, React.createElement(RenderIf, {
        isTrue: readOnly || disabled
      }, React.createElement(RenderIf, {
        isTrue: icon
      }, React.createElement(StyledSelectedValueIcon, {
        readOnly: readOnly
      }, icon), React.createElement(StyledReadOnlySelectedInput, {
        id: id,
        name: name,
        type: "text",
        value: label,
        tabIndex: tabIndex,
        onFocus: this.handleFocus,
        onClick: onClick,
        disabled: disabled,
        readOnly: readOnly,
        "aria-describedby": errorMessageId,
        required: required,
        ref: this.inputRef,
        iconPosition: "left",
        icon: icon,
        error: error,
        borderRadius: borderRadius
      }))), React.createElement(RenderIf, {
        isTrue: !(readOnly || disabled)
      }, React.createElement(StyledCombobox, {
        error: error,
        disabled: disabled,
        borderRadius: borderRadius,
        onClick: this.handleClick
      }, React.createElement(StyledInput, {
        id: id,
        role: "textbox",
        "aria-autocomplete": "none",
        tabIndex: tabIndex,
        disabled: disabled,
        ref: this.inputRef,
        onFocus: this.handleFocus,
        value: label,
        type: "text",
        readOnly: true
      }), React.createElement(StyledChip, {
        label: React.createElement("span", null, React.createElement(RenderIf, {
          isTrue: icon
        }, React.createElement(StyledSelectedIconContainer, null, icon)), label),
        onDelete: onClearValue,
        borderRadius: borderRadius
      }))));
    }
  }]);

  return SelectedValue;
}(Component);

export { SelectedValue as default };
SelectedValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.shape({
    label: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    icon: PropTypes.node
  }), PropTypes.string]),
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onClearValue: PropTypes.func,
  errorMessageId: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
SelectedValue.defaultProps = {
  value: undefined,
  name: undefined,
  id: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onClearValue: undefined,
  errorMessageId: undefined,
  error: undefined,
  borderRadius: 'rounded'
};