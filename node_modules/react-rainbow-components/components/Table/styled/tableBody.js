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

var StyledTableBody = (0, _attachThemeAttrs["default"])(_styledComponents["default"].tbody)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: ", ";\n    counter-reset: rowCounter ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.rowNumberOffset;
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n        ";
});
var _default = StyledTableBody;
exports["default"] = _default;