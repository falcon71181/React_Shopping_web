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
import { uniqueId } from '../../../libs/utils';
import Label from '../label';
import RenderIf from '../../RenderIf';
import RelativeElement from '../../Structural/relativeElement';
import StyledContainer from '../styled/container';
import StyledIconContainer from '../styled/iconContainer';
import { StyledInput, TogglePasswordButton } from './styled';
import HelpText from '../styled/helpText';
import ErrorText from '../styled/errorText';
import { Eye, EyeClosed } from './icons';
import getValueAlignment from '../helpers/getValueAlignment';

var InputBase = function (_Component) {
  _inherits(InputBase, _Component);

  var _super = _createSuper(InputBase);

  function InputBase(props) {
    var _this;

    _classCallCheck(this, InputBase);

    _this = _super.call(this, props);
    _this.inputId = uniqueId('input');
    _this.inlineTextLabelId = uniqueId('inline-text-label');
    _this.errorMessageId = uniqueId('error-message');
    _this.inputRef = React.createRef();
    _this.handlePasswordToggle = _this.handlePasswordToggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isPasswordVisible: false
    };
    return _this;
  }

  _createClass(InputBase, [{
    key: "getInlineTextLabelId",
    value: function getInlineTextLabelId() {
      var bottomHelpText = this.props.bottomHelpText;

      if (bottomHelpText) {
        return this.inlineTextLabelId;
      }

      return undefined;
    }
  }, {
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "getToggleButtonIcon",
    value: function getToggleButtonIcon() {
      var isPasswordVisible = this.state.isPasswordVisible;
      return isPasswordVisible ? React.createElement(EyeClosed, null) : React.createElement(Eye, null);
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      var type = this.props.type;

      if (type === 'password') {
        var isPasswordVisible = this.state.isPasswordVisible;
        return isPasswordVisible ? 'text' : 'password';
      }

      return type;
    }
  }, {
    key: "handlePasswordToggle",
    value: function handlePasswordToggle() {
      var type = this.props.type;

      if (type === 'password') {
        var isPasswordVisible = this.state.isPasswordVisible;
        this.setState({
          isPasswordVisible: !isPasswordVisible
        });
      }
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
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          value = _this$props.value,
          label = _this$props.label,
          error = _this$props.error,
          placeholder = _this$props.placeholder,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          tabIndex = _this$props.tabIndex,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          type = _this$props.type,
          max = _this$props.max,
          min = _this$props.min,
          maxLength = _this$props.maxLength,
          minLength = _this$props.minLength,
          pattern = _this$props.pattern,
          icon = _this$props.icon,
          bottomHelpText = _this$props.bottomHelpText,
          required = _this$props.required,
          id = _this$props.id,
          autoComplete = _this$props.autoComplete,
          name = _this$props.name,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          isBare = _this$props.isBare,
          isCentered = _this$props.isCentered,
          iconPosition = _this$props.iconPosition,
          variant = _this$props.variant,
          size = _this$props.size,
          valueAlignment = _this$props.valueAlignment,
          borderRadius = _this$props.borderRadius;
      var isReadOnly = !!(!disabled && readOnly);
      var isPassword = type === 'password';
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: isReadOnly,
        id: this.getInlineTextLabelId(),
        size: size
      }), React.createElement(RelativeElement, null, React.createElement(RenderIf, {
        isTrue: icon
      }, React.createElement(StyledIconContainer, {
        iconPosition: iconPosition,
        readOnly: readOnly,
        error: error,
        size: size
      }, icon)), React.createElement(StyledInput, {
        id: this.inputId,
        name: name,
        type: this.getInputType(),
        value: value,
        placeholder: placeholder,
        onChange: onChange,
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onKeyDown: onKeyDown,
        disabled: disabled,
        readOnly: readOnly,
        required: required,
        max: max,
        min: min,
        maxLength: maxLength,
        minLength: minLength,
        pattern: pattern,
        autoComplete: autoComplete,
        "aria-labelledby": this.getInlineTextLabelId(),
        "aria-describedby": this.getErrorMessageId(),
        ref: this.inputRef,
        isBare: isBare,
        valueAlignment: getValueAlignment({
          valueAlignment: valueAlignment,
          isCentered: isCentered
        }),
        iconPosition: iconPosition,
        icon: icon,
        error: error,
        variant: variant,
        size: size,
        borderRadius: borderRadius
      }), React.createElement(RenderIf, {
        isTrue: isPassword
      }, React.createElement(TogglePasswordButton, {
        icon: this.getToggleButtonIcon(),
        onClick: this.handlePasswordToggle,
        size: size
      }))), React.createElement(RenderIf, {
        isTrue: bottomHelpText
      }, React.createElement(HelpText, {
        alignSelf: "center"
      }, bottomHelpText)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(ErrorText, {
        alignSelf: "center",
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return InputBase;
}(Component);

export { InputBase as default };
InputBase.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  isBare: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
InputBase.defaultProps = {
  value: undefined,
  name: undefined,
  type: 'text',
  label: undefined,
  placeholder: undefined,
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
  isBare: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  autoComplete: 'on',
  labelAlignment: 'center',
  hideLabel: false,
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};