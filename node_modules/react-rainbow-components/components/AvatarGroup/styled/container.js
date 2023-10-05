"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n\n    > :not(:first-child) {\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n"])), function (props) {
  return props.size === 'large' && "\n            margin-left: -1.6rem;\n            ";
}, function (props) {
  return props.size === 'medium' && "\n            margin-left: -1.25rem;\n            ";
}, function (props) {
  return props.size === 'small' && "\n            margin-left: -0.75rem;\n            ";
}, function (props) {
  return props.size === 'x-small' && "\n            margin-left: -0.625rem;\n            ";
});

var _default = StyledContainer;
exports["default"] = _default;