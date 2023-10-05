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

var StyledArrowButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 1rem;\n    position: absolute;\n    width: 100%;\n    z-index: 10;\n    background: ", ";\n    border-radius: 12px;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        left: 50%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        color: ", ";\n        transform: rotate(135deg);\n    }\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.arrow === 'up' && "\n            top: 0;\n            margin-top: 0.4rem;\n            cursor: pointer;\n\n            &::after {\n                border-width: 0 0 0.15em 0.15em;\n                top: 40%;\n            }\n    ";
}, function (props) {
  return props.arrow === 'down' && "\n            bottom: 0;\n            margin-bottom: 0.2rem;\n            cursor: pointer;\n\n            &::after {\n                border-width: 0.15em 0.15em 0 0;\n            }\n    ";
});
var _default = StyledArrowButton;
exports["default"] = _default;