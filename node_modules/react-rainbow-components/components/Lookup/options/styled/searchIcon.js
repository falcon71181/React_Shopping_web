"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _searchIcon = _interopRequireDefault(require("../../icons/searchIcon"));

var _templateObject;

var StyledSearchIcon = (0, _styledComponents["default"])(_searchIcon["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 36px;\n    width: 36px;\n"])));
var _default = StyledSearchIcon;
exports["default"] = _default;