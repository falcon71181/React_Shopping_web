import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import Options from './options';
import StyledContainer from './styled/container';
import Label from '../Input/label';
import StyledInnerContainer from './styled/innerContainer';
import StyledSelect from './styled/select';
import ErrorText from '../Input/styled/errorText';
import HelpText from '../Input/styled/helpText';

var Select = function (_Component) {
  _inherits(Select, _Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);
    _this.selectId = uniqueId('select');
    _this.selectRef = React.createRef();
    return _this;
  }

  _createClass(Select, [{
    key: "focus",
    value: function focus() {
      this.selectRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.selectRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.selectRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          bottomHelpText = _this$props.bottomHelpText,
          error = _this$props.error,
          required = _this$props.required,
          disabled = _this$props.disabled,
          options = _this$props.options,
          style = _this$props.style,
          className = _this$props.className,
          id = _this$props.id,
          name = _this$props.name,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          tabIndex = _this$props.tabIndex,
          variant = _this$props.variant,
          size = _this$props.size,
          borderRadius = _this$props.borderRadius;
      return React.createElement(StyledContainer, {
        className: className,
        style: style,
        id: id
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.selectId,
        size: size
      }), React.createElement(StyledInnerContainer, {
        error: error,
        disabled: disabled
      }, React.createElement(StyledSelect, {
        error: error,
        id: this.selectId,
        name: name,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        value: value,
        tabIndex: tabIndex,
        required: required,
        disabled: disabled,
        variant: variant,
        ref: this.selectRef,
        size: size,
        borderRadius: borderRadius
      }, React.createElement(Options, {
        options: options
      }))), React.createElement(RenderIf, {
        isTrue: bottomHelpText
      }, React.createElement(HelpText, null, bottomHelpText)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(ErrorText, null, error)));
    }
  }]);

  return Select;
}(Component);

Select.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool
  })),
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(['default', 'shaded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Select.defaultProps = {
  label: undefined,
  value: undefined,
  name: undefined,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  bottomHelpText: null,
  error: null,
  required: false,
  disabled: false,
  options: [],
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  tabIndex: undefined,
  variant: 'default',
  size: 'medium',
  borderRadius: 'rounded'
};
export default withReduxForm(Select);