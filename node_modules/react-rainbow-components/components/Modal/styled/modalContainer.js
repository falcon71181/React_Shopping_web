"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _Structural = require("../../Structural");

var _templateObject;

var StyledModalContainer = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_Structural.BorderRadiusElement))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 55%;\n    min-width: 18rem;\n    max-height: 80vh;\n    min-height: 4rem;\n    background-color: ", ";\n    color: ", ";\n    box-shadow: ", ";\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: normal;\n    position: relative;\n\n    &:focus {\n        outline: 0;\n    }\n\n    ", ";\n    ", ";\n    ", "\n    ", "\n\n    @media (min-width: 1240px) {\n        width: 520px;\n        ", "\n        ", "\n    }\n\n    @media (max-width: 800px) {\n        width: 95%;\n    }\n\n    @keyframes slide-up-in {\n        0% {\n            opacity: 0;\n            transform: scale(0.8, 0.8) translateY(70%);\n        }\n\n        100% {\n            opacity: 1;\n            transform: scale(1, 1) translateY(0);\n        }\n    }\n\n    @keyframes slide-down-out {\n        0% {\n            opacity: 1;\n            transform: translateY(0);\n        }\n\n        100% {\n            opacity: 0;\n            transform: translateY(50%);\n        }\n    }\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.isOpen && "\n            animation: slide-up-in 0.2s linear;\n            opacity: 1;\n            transform: scale(1, 1) translateY(0);\n        ";
}, function (props) {
  return !props.isOpen && "\n            animation: slide-down-out 0.2s linear;\n            opacity: 0;\n            transform: translateY(50%);\n        ";
}, function (props) {
  return props.size === 'large' && 'width: 85%;';
}, function (props) {
  return props.size === 'medium' && 'width: 70%;';
}, function (props) {
  return props.size === 'large' && 'width: 920px;';
}, function (props) {
  return props.size === 'medium' && 'width: 720px;';
});
var _default = StyledModalContainer;
exports["default"] = _default;