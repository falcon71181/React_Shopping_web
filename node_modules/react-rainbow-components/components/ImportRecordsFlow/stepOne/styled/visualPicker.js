"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _VisualPicker = _interopRequireDefault(require("../../../VisualPicker"));

var _templateObject;

var StyledVisualPicker = (0, _styledComponents["default"])(_VisualPicker["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0 24px 16px 24px;\n"])));
var _default = StyledVisualPicker;
exports["default"] = _default;