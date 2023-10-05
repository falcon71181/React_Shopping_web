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

var StyledInnerContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n\n    ::after {\n        content: '';\n        position: absolute;\n        display: block;\n        right: 1rem;\n        bottom: 45%;\n        pointer-events: none;\n        width: 0.5rem;\n        height: 0.5rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        vertical-align: top;\n        color: ", ";\n        box-sizing: border-box;\n    }\n\n    &[disabled]::after {\n        color: ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.error && "\n            ::after {\n                color: ".concat(props.palette.error.main, ";\n            }\n        ");
});
var _default = StyledInnerContainer;
exports["default"] = _default;