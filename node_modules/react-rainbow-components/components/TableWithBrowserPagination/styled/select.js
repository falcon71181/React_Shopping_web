"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledSelect = (0, _attachThemeAttrs["default"])(_styledComponents["default"].select)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    appearance: none;\n    width: 100%;\n    line-height: 28px;\n    height: 32px;\n    border: 1px solid ", ";\n    border-radius: 1rem;\n    padding: 0 28px 0 12px;\n    background-color: ", ";\n    color: ", ";\n    font-size: 14px;\n    transition: all 0.1s linear;\n    box-sizing: border-box;\n    text-transform: none;\n\n    :focus,\n    :active {\n        outline: 0;\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.variant === 'listview' && "\n        box-shadow:".concat(props.disabled ? '' : props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n    ");
});
var _default = StyledSelect;
exports["default"] = _default;