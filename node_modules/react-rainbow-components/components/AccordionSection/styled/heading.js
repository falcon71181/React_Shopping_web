"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledHeading = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h3)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    font-size: ", ";\n    font-weight: bold;\n    line-height: 1.25;\n    color: ", ";\n    width: 100%;\n    margin: 0;\n    padding: 0 ", ";\n    ", ";\n    text-align: left;\n"])), _fontSizes.FONT_SIZE_HEADING_SMALL, function (props) {
  return props.palette.text.main;
}, _paddings.PADDING_MEDIUM, function (props) {
  return props.disabled && "color: ".concat(props.palette.text.disabled, ";");
});
var _default = StyledHeading;
exports["default"] = _default;