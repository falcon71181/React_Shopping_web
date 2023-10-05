"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Input = _interopRequireDefault(require("../../Input"));

var _templateObject;

var StyledInput = (0, _styledComponents["default"])(_Input["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline;\n    margin-bottom: 0;\n    margin-left: 4px;\n"])));
var _default = StyledInput;
exports["default"] = _default;