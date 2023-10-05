"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    outline: none;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n        outline: 0;\n    }\n\n    ", "\n"])), function (props) {
  return props.isReadOnly && "\n            display: flex;\n    ";
});

var _default = StyledContainer;
exports["default"] = _default;