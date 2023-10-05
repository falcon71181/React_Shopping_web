"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../../Button"));

var _templateObject;

var StyledButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 1.7rem;\n    line-height: 1.7rem;\n    font-size: 0.8rem;\n    padding: 0 0.7rem;\n"])));
var _default = StyledButton;
exports["default"] = _default;