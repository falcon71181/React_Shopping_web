"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _input = _interopRequireDefault(require("../../Input/inputBase/styled/input"));

var _templateObject;

var StyledInput = (0, _styledComponents["default"])(_input["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n"])), function (props) {
  return props.isLoading && "\n        padding-right: 5rem;\n\n        :focus,\n        :active {\n            padding-right: 5rem;\n        }\n    ";
});
var _default = StyledInput;
exports["default"] = _default;