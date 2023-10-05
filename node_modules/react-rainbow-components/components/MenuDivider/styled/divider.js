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

var StyledDivider = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-top: solid 1px ", ";\n    box-sizing: border-box;\n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.variant === 'space' && "\n            margin-top: 0.5rem;\n            padding-top: 0.5rem;\n        ";
});
var _default = StyledDivider;
exports["default"] = _default;