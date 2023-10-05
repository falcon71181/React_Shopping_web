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

var StyledScrollableY = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid ", ";\n    background-color: ", ";\n    ", ";\n    ", ";\n        \n    ", ";    \n    \n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.isEmpty && !props.isLoading && "\n            display: flex;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n        ";
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n            border-top: none;\n        ";
}, function (props) {
  return props.theme.variant === 'listview' && props.isEmpty && "\n            border-top: 1px solid ".concat(props.palette.border.divider, ";\n        ");
}, function (props) {
  return props.theme.variant === 'listview' && props.isLoading && "\n            border-top: none;\n        ";
});
var _default = StyledScrollableY;
exports["default"] = _default;