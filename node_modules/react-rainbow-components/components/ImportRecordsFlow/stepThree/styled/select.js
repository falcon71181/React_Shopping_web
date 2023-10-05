"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Select = _interopRequireDefault(require("../../../Select"));

var _templateObject;

var StyledSelect = (0, _styledComponents["default"])(_Select["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n"])));
var _default = StyledSelect;
exports["default"] = _default;