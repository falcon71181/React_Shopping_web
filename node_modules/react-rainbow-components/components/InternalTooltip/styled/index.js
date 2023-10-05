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

var StyledTooltip = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: ", ";\n    color: ", ";\n    text-align: center;\n    padding: 6px 12px;\n    border-radius: 4px;\n    z-index: 1;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 250ms;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n    width: auto;\n    \n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.getContrastText(props.palette.text.main);
}, function (props) {
  return props.position === 'top' && "\n        opacity: 1;\n        &::after {\n            content: \" \";\n            position: absolute;\n            top: 100%;\n            left: 50%;\n            margin-left: -7px;\n            border-width: 7px;\n            border-style: solid;\n            border-color: ".concat(props.palette.text.main, " transparent transparent transparent;\n        }\n        ");
}, function (props) {
  return props.position === 'bottom' && "\n        opacity: 1;\n        &::after {\n            content: \" \";\n            position: absolute;\n            bottom: 100%;\n            left: 50%;\n            margin-left: -7px;\n            border-width: 7px;\n            border-style: solid;\n            border-color: transparent transparent ".concat(props.palette.text.main, " transparent;\n        }\n        ");
}, function (props) {
  return props.position === 'left' && "\n        opacity: 1;\n        &::after {\n            content: \" \";\n            position: absolute;\n            top: 50%;\n            left: 100%; /* To the right of the tooltip */\n            margin-top: -7px;\n            border-width: 7px;\n            border-style: solid;\n            border-color: transparent transparent transparent ".concat(props.palette.text.main, ";\n        }\n        ");
}, function (props) {
  return props.position === 'right' && "\n        opacity: 1;\n        &::after {\n            content: \" \";\n            position: absolute;\n            top: 50%;\n            right: 100%; /* To the left of the tooltip */\n            margin-top: -7px;\n            border-width: 7px;\n            border-style: solid;\n            border-color: transparent ".concat(props.palette.text.main, " transparent transparent;\n        }\n        ");
}, function (props) {
  return props.position === 'floating' && "\n        opacity: 1;    \n        ";
});
var _default = StyledTooltip;
exports["default"] = _default;