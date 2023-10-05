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

var StyledIndicator = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100%;\n    right: 1.2rem;\n    position: absolute;\n    line-height: 1;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        bottom: 45%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        color: ", ";\n        box-sizing: border-box;\n    }\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.disabled && "\n            &::after {\n                color: ".concat(props.palette.text.disabled, ";\n            }\n    ");
}, function (props) {
  return props.error && "\n            ::after {\n                color: ".concat(props.palette.error.main, ";\n            }\n    ");
});
var _default = StyledIndicator;
exports["default"] = _default;