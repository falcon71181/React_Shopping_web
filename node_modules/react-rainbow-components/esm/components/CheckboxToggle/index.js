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
import StyledLabelContainer from './styled/labelContainer';
import StyledLabel from './styled/label';
import HiddenElement from '../Structural/hiddenElement';

var CheckboxToggle = function (_Component) {
  _inherits(CheckboxToggle, _Component);

  var _super = _createSuper(CheckboxToggle);

  function CheckboxToggle(props) {
    var _this;

    _classCallCheck(this, CheckboxToggle);

    _this = _super.call(this, props);
    _this.checkboxToggleRef = React.createRef();
    _this.inputIndentifier = props.name || uniqueId('checkbox-toggle');
    return _this;
  }

  _createClass(CheckboxToggle, [{
    key: "focus",
    value: function focus() {
      this.checkboxToggleRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.checkboxToggleRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.checkboxToggleRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          disabled = _this$props.disabled,
          label = _this$props.label,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          id = _this$props.id,
          labelAlignment = _this$props.labelAlignment;
      return React.createElement(StyledLabelContainer, {
        labelAlignment: labelAlignment,
        id: id,
        className: className,
        style: style
      }, React.createElement(HiddenElement, {
        as: "input",
        type: "checkbox",
        name: this.inputIndentifier,
        value: this.inputIndentifier,
        "aria-describedby": this.inputIndentifier,
        checked: value,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        disabled: disabled,
        ref: this.checkboxToggleRef
      }), React.createElement("span", {
        id: this.inputIndentifier,
        className: "rainbow-checkbox-toggle_faux-container",
        "aria-live": "assertive"
      }, React.createElement("span", {
        className: "rainbow-checkbox-toggle_faux"
      })), React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(StyledLabel, {
        labelAlignment: labelAlignment
      }, label)));
    }
  }]);

  return CheckboxToggle;
}(Component);

CheckboxToggle.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  labelAlignment: PropTypes.oneOf(['left', 'right', 'top'])
};
CheckboxToggle.defaultProps = {
  label: null,
  disabled: false,
  value: false,
  name: undefined,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'right'
};
export default withReduxForm(CheckboxToggle);