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

var StyledHeaderDays = (0, _attachThemeAttrs["default"])(_styledComponents["default"].th)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-size: ", ";\n    font-weight: 900;\n    line-height: 40px;\n    text-align: center;\n    height: 40px;\n    padding: 0;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.border.divider;
});
var _default = StyledHeaderDays;
exports["default"] = _default;