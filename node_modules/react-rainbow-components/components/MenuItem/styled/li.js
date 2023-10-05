"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledLi = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    line-height: 1.5;\n    width: 100%;\n    background: none;\n    border: none;\n    outline: inherit;\n    margin: 0;\n    transition: color 0.1s linear;\n    position: relative;\n    font-size: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.75rem 0.75rem;\n    color: ", ";\n    white-space: nowrap;\n    cursor: pointer;\n    text-decoration: none;\n    box-sizing: border-box;\n\n    &:focus {\n        outline: 0;\n        background-color: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n        outline: 0;\n    }\n\n    &[aria-disabled='true'] {\n        color: ", ";\n        cursor: default;\n\n        &:hover,\n        &:focus {\n            background-color: transparent;\n            outline: 0;\n        }\n    }\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.text.disabled;
});
var _default = StyledLi;
exports["default"] = _default;