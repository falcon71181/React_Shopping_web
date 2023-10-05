"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var AnimatedContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    animation: ", " 250ms forwards;\n    overflow: hidden;\n    ", "\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n\n    @keyframes slideVerticalIn {\n        from {\n            max-height: 0;\n        }\n\n        to {\n            max-height: ", "px;\n        }\n    }\n\n    @keyframes slideVerticalOut {\n        from {\n            max-height: ", "px;\n        }\n\n        to {\n            max-height: 0;\n        }\n    }\n\n    @keyframes slideHorizontalIn {\n        from {\n            max-width: 0;\n        }\n\n        to {\n            max-width: ", "px;\n        }\n    }\n\n    @keyframes slideHorizontalOut {\n        from {\n            max-width: ", "px;\n        }\n\n        to {\n            max-width: 0;\n        }\n    }\n"])), function (props) {
  return props.animation;
}, function (props) {
  return !props.isVisible && "display: none;";
}, function (props) {
  return props.dimensions ? props.dimensions.height : 9999;
}, function (props) {
  return props.dimensions ? props.dimensions.height : 9999;
}, function (props) {
  return props.dimensions ? props.dimensions.width : 9999;
}, function (props) {
  return props.dimensions ? props.dimensions.width : 9999;
});

var _default = AnimatedContainer;
exports["default"] = _default;