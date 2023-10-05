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
import RenderIf from '../../RenderIf';
import StyledContainer from '../styled/container';
import HelpText from '../styled/helpText';
import ErrorText from '../styled/errorText';
import Radio from './radio';

var InputRadio = function (_Component) {
  _inherits(InputRadio, _Component);

  var _super = _createSuper(InputRadio);

  function InputRadio(props) {
    var _this;

    _classCallCheck(this, InputRadio);

    _this = _super.call(this, props);
    _this.inlineTextLabelId = uniqueId('inline-text-label');
    _this.errorMessageId = uniqueId('error-message');
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(InputRadio, [{
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
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          value = _this$props.value,
          onChange = _this$props.onChange,
          label = _this$props.label,
          error = _this$props.error,
          disabled = _this$props.disabled,
          tabIndex = _this$props.tabIndex,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          bottomHelpText = _this$props.bottomHelpText,
          id = _this$props.id,
          name = _this$props.name,
          checked = _this$props.checked,
          hideLabel = _this$props.hideLabel;
      var errorMessageId = this.getErrorMessageId();
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style
      }, React.createElement(Radio, {
        name: name,
        value: value,
        onChange: onChange,
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onKeyDown: onKeyDown,
        disabled: disabled,
        checked: checked,
        ariaLabelledBy: this.getInlineTextLabelId(),
        ariaDescribedBy: errorMessageId,
        ref: this.inputRef,
        error: error,
        label: label,
        hideLabel: hideLabel
      }), React.createElement(RenderIf, {
        isTrue: bottomHelpText
      }, React.createElement(HelpText, {
        alignSelf: "flex-start"
      }, bottomHelpText)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(ErrorText, {
        alignSelf: "flex-start",
        id: errorMessageId
      }, error)));
    }
  }]);

  return InputRadio;
}(Component);

export { InputRadio as default };
InputRadio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string
};
InputRadio.defaultProps = {
  value: undefined,
  label: undefined,
  name: undefined,
  bottomHelpText: null,
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
  className: undefined,
  style: undefined,
  id: undefined
};