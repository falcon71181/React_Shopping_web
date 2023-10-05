"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _Chip = _interopRequireDefault(require("../../Chip"));

var _templateObject;

var StyledChip = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_Chip["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1 1 auto;\n    margin: 2px;\n    background-color: ", ";\n"])), function (props) {
  return props.palette.background.main;
});
var _default = StyledChip;
exports["default"] = _default;