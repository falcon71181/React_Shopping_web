"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledButtonItem = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    border-radius: ", ";\n    border: solid 1px transparent;\n    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),\n        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n    transform: translate3d(0, 0, 0);\n\n    &:hover {\n        border: solid 1px transparent;\n        background-color: ", ";\n        cursor: pointer;\n    }\n\n    > [type='radio'] {\n        width: 1px;\n        height: 1px;\n        border: 0;\n        clip: rect(0 0 0 0);\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n    }\n    ", ";\n    ", ";\n    ", ";\n"])), _borderRadius.BORDER_RADIUS_2, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.6);
}, function (props) {
  return props.variant === 'inverse' && "\n            &:hover {\n                border: solid 1px transparent;\n                background-color: ".concat(props.palette.isDark ? 'rgba(193, 193, 193, 0.4)' : 'rgba(250, 250, 250, 0.10)', ";\n                cursor: pointer;\n            }\n        ");
}, function (props) {
  return props.isChecked && "\n            transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97), all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n            transform: translate3d(0, 0, 0);\n            height: 100%;\n\n            &:hover {\n                background-color: transparent;\n                cursor: pointer;\n            }\n        ";
}, function (props) {
  return props.disabled && "\n            &:hover {\n                background-color: transparent;\n            }\n        ";
});
var _default = StyledButtonItem;
exports["default"] = _default;