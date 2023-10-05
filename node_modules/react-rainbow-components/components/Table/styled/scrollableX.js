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

var StyledScrollableX = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: ", ";\n    height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    overflow-x: auto;\n    padding-top: 44px;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.theme.hideTableHeader && "\n        padding-top: 0;\n        border-top: none;\n    ";
}, function (props) {
  return props.theme.variant === 'listview' && "\n            border-top: none;\n            background-color: transparent;\n    ";
});
var _default = StyledScrollableX;
exports["default"] = _default;