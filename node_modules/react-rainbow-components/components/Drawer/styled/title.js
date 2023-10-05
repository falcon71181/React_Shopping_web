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

var _templateObject;

var StyledTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    margin: 0 1.25rem;\n    padding: 1.375rem 0 1.325rem;\n    display: block;\n    box-sizing: border-box;\n    font-family: 'Lato Light';\n    font-weight: 300;\n    font-size: ", ";\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;  \n    letter-spacing: normal;\n"])), function (props) {
  return props.palette.text.label;
}, _fontSizes.FONT_SIZE_HEADING_LARGE);
var _default = StyledTitle;
exports["default"] = _default;