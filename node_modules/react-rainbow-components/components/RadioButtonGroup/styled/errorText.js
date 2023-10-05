"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _templateObject;

var StyledErrorText = (0, _styledComponents["default"])(_errorText["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n"])));
var _default = StyledErrorText;
exports["default"] = _default;