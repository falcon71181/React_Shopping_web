"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var StyledAnchor = (0, _attachThemeAttrs["default"])(_styledComponents["default"].a)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    background: none;\n    border: none;\n    padding: 0;\n    outline: inherit;\n    cursor: pointer;\n    letter-spacing: 0.3px;\n    font-size: ", ";\n    color: ", ";\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    :hover {\n        color: ", ";\n    }\n\n    &:focus {\n        color: ", ";\n    }\n\n    :active {\n        transform: scale(0.95);\n        transition: all 0.2s ease;\n    }\n\n    ::after {\n        display: block;\n        content: \"\";\n        border-bottom: 2px solid ", ";\n        transform: scaleX(0);\n        transition: transform 250ms ease-in-out;\n    }\n\n    :hover::after {\n        transform: scaleX(1);\n    }\n\n    ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.disabled && "\n            color: ".concat(props.palette.text.disabled, ";\n            pointer-events: none;\n    ");
});
var _default = StyledAnchor;
exports["default"] = _default;