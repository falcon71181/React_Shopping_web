import _extends from "@babel/runtime/helpers/extends";
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
import { Consumer as VisualPickerConsumer } from '../VisualPicker/context';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import StyledCheckmarkIcon from './styled/checkmarkIcon';
import StyledContainer from './styled/container';
import StyledInput from './styled/input';
import StyledLabel from './styled/label';
import StyledContent from './styled/content';
import StyledCheckedTriangle from './styled/checkedTriangle';
import StyledFooter from './styled/footer';

var PickerOption = function (_Component) {
  _inherits(PickerOption, _Component);

  var _super = _createSuper(PickerOption);

  function PickerOption(props) {
    var _this;

    _classCallCheck(this, PickerOption);

    _this = _super.call(this, props);
    _this.inputId = uniqueId('radio');
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickerOption, [{
    key: "getType",
    value: function getType() {
      var multiple = this.props.multiple;

      if (multiple) {
        return 'checkbox';
      }

      return 'radio';
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          name = _this$props.name,
          privateOnChange = _this$props.privateOnChange;
      privateOnChange(name, event.target.checked);
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      var _this$props2 = this.props,
          multiple = _this$props2.multiple,
          name = _this$props2.name,
          value = _this$props2.value;

      if (multiple) {
        return Array.isArray(value) && value.includes(name);
      }

      return typeof value === 'string' && name === value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          children = _this$props3.children,
          footer = _this$props3.footer,
          style = _this$props3.style,
          className = _this$props3.className,
          size = _this$props3.size;
      var _this$props4 = this.props,
          groupName = _this$props4.groupName,
          ariaDescribedby = _this$props4.ariaDescribedby;
      return React.createElement(StyledContainer, {
        "data-id": "visual-picker_option-container",
        className: className,
        style: style
      }, React.createElement(StyledInput, {
        as: "input",
        type: this.getType(),
        id: this.inputId,
        name: groupName,
        checked: this.isChecked(),
        "aria-describedby": ariaDescribedby,
        onChange: this.handleChange,
        disabled: disabled
      }), React.createElement(StyledLabel, {
        "data-id": "visual-picker_option-label",
        htmlFor: this.inputId
      }, React.createElement(StyledContent, {
        "data-id": "visual-picker_option",
        size: size
      }, React.createElement(RenderIf, {
        isTrue: this.isChecked()
      }, React.createElement(StyledCheckedTriangle, null), React.createElement(StyledCheckmarkIcon, null)), children), React.createElement(RenderIf, {
        isTrue: footer
      }, React.createElement(StyledFooter, null, footer))));
    }
  }]);

  return PickerOption;
}(Component);

export default function VisualPickerOption(props) {
  return React.createElement(VisualPickerConsumer, null, function (context) {
    return React.createElement(PickerOption, _extends({}, props, context));
  });
}
VisualPickerOption.propTypes = {
  name: PropTypes.string,
  footer: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
VisualPickerOption.defaultProps = {
  name: undefined,
  footer: undefined,
  disabled: false,
  className: undefined,
  style: undefined,
  children: []
};