"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledIcon = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 1rem;\n    height: 1rem;\n    line-height: 1.5;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.position === 'left' && "\n            margin-right: 0.75rem;\n            flex-shrink: 0;\n        ";
}, function (props) {
  return props.position === 'right' && "\n                margin-left: 0.75rem;\n                flex-shrink: 0;\n            ";
});

var _default = StyledIcon;
exports["default"] = _default;