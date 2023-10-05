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

var StyledFlagContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    padding-right: 12px;\n    border-right: 1px solid ", ";\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.readOnly && "\n        border-right: 1px solid transparent;\n        padding-right: 8px;\n    ";
}, function (props) {
  return props.disabled && "\n        border-right: 1px solid ".concat(props.palette.border.disabled, ";\n    ");
});
var _default = StyledFlagContainer;
exports["default"] = _default;