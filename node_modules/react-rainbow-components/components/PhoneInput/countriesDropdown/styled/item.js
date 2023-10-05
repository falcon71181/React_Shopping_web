"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject;

var StyledItem = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    font-size: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 0.75rem;\n    height: 45px;\n    color: ", ";\n    white-space: nowrap;\n    cursor: pointer;\n    text-decoration: none;\n\n    &:hover,\n    &:active,\n    &[aria-selected=\"true\"] {\n        background-color: ", ";\n    }\n\n    ", ";\n\n    &[aria-disabled='true'] {\n        color: ", ";\n        cursor: default;\n\n        &:hover,\n        &:focus {\n            background-color: transparent;\n        }\n    }\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return !props.isSelected && "\n            padding-right: 37px;\n        ";
}, function (props) {
  return props.palette.text.disabled;
});
var _default = StyledItem;
exports["default"] = _default;