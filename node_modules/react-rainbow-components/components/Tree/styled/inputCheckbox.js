"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PrimitiveCheckbox = _interopRequireDefault(require("../../PrimitiveCheckbox"));

var _templateObject;

var InputCheckbox = (0, _styledComponents["default"])(_PrimitiveCheckbox["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: 8px;\n"])));
var _default = InputCheckbox;
exports["default"] = _default;