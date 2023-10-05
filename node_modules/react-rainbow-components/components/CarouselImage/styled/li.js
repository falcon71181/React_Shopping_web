"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledLi = _styledComponents["default"].li(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-radius: ", ";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transform: translateX(-100%);\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.shouldShow && props.direction === 'right-to-left' && "\n            transform: translateX(0) !important;\n            position: relative;\n            animation: slide-in-right-to-left;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-in-right-to-left {\n                0% {\n                    transform: translateX(100%);\n                }\n            \n                100% {\n                    transform: translateX(0);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldShow && props.direction === 'left-to-right' && "\n            transform: translateX(0) !important;\n            position: relative;\n            animation: slide-in-left-to-right;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-in-left-to-right {\n                0% {\n                    transform: translateX(-100%);\n                }\n            \n                100% {\n                    transform: translateX(0);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldHide && props.direction === 'right-to-left' && "\n            transform: translateX(-100%) !important;\n            animation: slide-out-right-to-left;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-out-right-to-left {\n                0% {\n                    transform: translateX(0);\n                }\n            \n                100% {\n                    transform: translateX(-100%);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldHide && props.direction === 'left-to-right' && "\n            transform: translateX(100%) !important;\n            animation: slide-out-left-to-right;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-out-left-to-right {\n                0% {\n                    transform: translateX(0);\n                }\n            \n                100% {\n                    transform: translateX(100%);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldBeActive && "\n            transform: translateX(0);\n            position: relative;\n        ";
});

var _default = StyledLi;
exports["default"] = _default;