import _typeof from "@babel/runtime/helpers/typeof";
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
import Label from './label';
import StyledContainer from './styled/container';
import StyledInnerContainer from './styled/innerContainer';

var PrimitiveCheckbox = function (_Component) {
  _inherits(PrimitiveCheckbox, _Component);

  var _super = _createSuper(PrimitiveCheckbox);

  function PrimitiveCheckbox(props) {
    var _this;

    _classCallCheck(this, PrimitiveCheckbox);

    _this = _super.call(this, props);
    _this.inputId = uniqueId('input-checkbox');
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(PrimitiveCheckbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var checked = this.props.checked;
      this.inputRef.current.indeterminate = checked === 'indeterminate';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevChecked = prevProps.checked;
      var checked = this.props.checked;

      if (_typeof(prevChecked) !== _typeof(checked)) {
        this.inputRef.current.indeterminate = checked === 'indeterminate';
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
          style = _this$props.style,
          className = _this$props.className,
          value = _this$props.value,
          onChange = _this$props.onChange,
          label = _this$props.label,
          disabled = _this$props.disabled,
          tabIndex = _this$props.tabIndex,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          id = _this$props.id,
          name = _this$props.name,
          checked = _this$props.checked;
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style
      }, React.createElement(StyledInnerContainer, null, React.createElement("input", {
        id: this.inputId,
        name: name,
        type: "checkbox",
        value: value,
        onChange: onChange,
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onKeyDown: onKeyDown,
        disabled: disabled,
        checked: checked,
        ref: this.inputRef
      }), React.createElement(Label, {
        label: label,
        inputId: this.inputId
      })));
    }
  }]);

  return PrimitiveCheckbox;
}(Component);

export { PrimitiveCheckbox as default };
PrimitiveCheckbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  checked: PropTypes.oneOf([true, false, 'indeterminate']),
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string
};
PrimitiveCheckbox.defaultProps = {
  value: undefined,
  name: undefined,
  disabled: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  checked: undefined,
  className: undefined,
  style: undefined,
  id: undefined
};