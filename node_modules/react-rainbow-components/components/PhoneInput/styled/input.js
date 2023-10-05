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

var StyledInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1 0 auto;\n    font: inherit;\n    background-color: transparent;\n    line-height: 2.5rem;\n    color: ", ";\n    font-size: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    border: 0;\n    padding: 0;\n\n    ", ";\n\n    ", ";\n\n    :focus,\n    :active {\n        outline: 0;\n        padding: 0;\n    }\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    ::placeholder {\n        color: ", ";\n        font-weight: 300;\n        font-size: ", ";\n        ", ";\n    \n        ", ";\n    }\n\n    &[readonly] {\n        color: ", ";\n        font-weight: 400;\n        cursor: text;\n        box-sizing: border-box;\n    }\n\n    &[disabled] {\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n            line-height: 3.275rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_HEADING_MEDIUM, ";\n        ");
}, function (props) {
  return props.size === 'small' && "\n            line-height: 1.775rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n        ");
}, function (props) {
  return props.palette.text.header;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n                font-size: ".concat(_fontSizes.FONT_SIZE_HEADING_MEDIUM, ";\n            ");
}, function (props) {
  return props.size === 'small' && "\n                font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n            ");
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.disabled;
});
var _default = StyledInput;
exports["default"] = _default;