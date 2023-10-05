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
import { uniqueId } from '../../../libs/utils';
import Label from '../label';
import RenderIf from '../../RenderIf';
import RelativeElement from '../../Structural/relativeElement';
import StyledContainer from '../styled/container';
import StyledIconContainer from '../styled/iconContainer';
import HelpText from '../styled/helpText';
import ErrorText from '../styled/errorText';
import StyledReadonlyInput from '../inputBase/styled/input';
import StyledPickerInput from './styled/input';
import getValueAlignment from '../helpers/getValueAlignment';

var Input = function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.inputId = uniqueId('input');
    _this.inlineTextLabelId = uniqueId('inline-text-label');
    _this.errorMessageId = uniqueId('error-message');
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(Input, [{
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
    key: "renderInput",
    value: function renderInput() {
      var props = this.props;
      var readOnly = props.readOnly,
          isCentered = props.isCentered,
          valueAlignment = props.valueAlignment;
      var alignment = getValueAlignment({
        valueAlignment: valueAlignment,
        isCentered: isCentered
      });

      if (readOnly) {
        return React.createElement(StyledReadonlyInput, _extends({}, props, {
          id: this.inputId,
          readOnly: true,
          "aria-labelledby": this.getInlineTextLabelId(),
          "aria-describedby": this.getErrorMessageId(),
          autoComplete: "off",
          valueAlignment: alignment,
          ref: this.inputRef
        }));
      }

      return React.createElement(StyledPickerInput, _extends({}, props, {
        id: this.inputId,
        readOnly: true,
        "aria-labelledby": this.getInlineTextLabelId(),
        "aria-describedby": this.getErrorMessageId(),
        autoComplete: "off",
        valueAlignment: alignment,
        ref: this.inputRef
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          label = _this$props.label,
          error = _this$props.error,
          readOnly = _this$props.readOnly,
          icon = _this$props.icon,
          bottomHelpText = _this$props.bottomHelpText,
          required = _this$props.required,
          id = _this$props.id,
          hideLabel = _this$props.hideLabel,
          labelAlignment = _this$props.labelAlignment,
          iconPosition = _this$props.iconPosition,
          size = _this$props.size;
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style,
        readOnly: readOnly
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: readOnly,
        id: this.getInlineTextLabelId(),
        size: size
      }), React.createElement(RelativeElement, null, React.createElement(RenderIf, {
        isTrue: icon
      }, React.createElement(StyledIconContainer, {
        iconPosition: iconPosition,
        readOnly: readOnly,
        error: error,
        size: size
      }, icon)), this.renderInput()), React.createElement(RenderIf, {
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

  return Input;
}(Component);

export { Input as default };
Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  pattern: PropTypes.string,
  isCentered: PropTypes.bool,
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
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  valueAlignment: PropTypes.oneOf(['left', 'center', 'right'])
};
Input.defaultProps = {
  value: undefined,
  name: undefined,
  type: 'text',
  label: undefined,
  placeholder: undefined,
  icon: undefined,
  iconPosition: 'left',
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
  className: undefined,
  style: undefined,
  id: undefined,
  autoComplete: 'on',
  labelAlignment: 'center',
  hideLabel: false,
  size: 'medium',
  valueAlignment: 'left'
};