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

var StyledHeaderDays = (0, _attachThemeAttrs["default"])(_styledComponents["default"].th)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 400;\n    line-height: 40px;\n    height: 40px;\n    padding: 0;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.header;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM);
var _default = StyledHeaderDays;
exports["default"] = _default;