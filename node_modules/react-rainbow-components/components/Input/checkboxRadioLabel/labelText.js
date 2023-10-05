"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var LabelText = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline;\n    vertical-align: middle;\n    color: ", ";\n    font-size: ", ";\n    line-height: 1.65rem;\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.disabled && "color: ".concat(props.palette.text.disabled, ";");
});
var _default = LabelText;
exports["default"] = _default;