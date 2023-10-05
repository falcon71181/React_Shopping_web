"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../../../Button"));

var _templateObject;

var StyledCancelButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: 24px;\n"])));
var _default = StyledCancelButton;
exports["default"] = _default;