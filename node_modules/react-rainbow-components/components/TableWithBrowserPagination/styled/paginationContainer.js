"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledPaginationContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: ", ";\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    ", ";\n    ", ";\n    ", "\n"])), _paddings.PADDING_SMALL, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.paginationAlignment === 'right' && "\n            justify-content: flex-start;\n            flex-direction: row-reverse;\n        ";
}, function (props) {
  return props.paginationAlignment === 'left' && "\n            justify-content: flex-start;\n        ";
}, function (props) {
  return props.variant === 'listview' && "\n        background-color: transparent;\n        border-top: none;\n        border-bottom: none;\n    ";
});
var _default = StyledPaginationContainer;
exports["default"] = _default;