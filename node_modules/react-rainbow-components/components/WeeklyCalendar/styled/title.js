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

var StyledTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h3)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 300;\n    line-height: 2.5rem;\n    text-align: center;\n    margin: 0 1.5rem;\n    min-width: 380px;\n    padding: 0;\n    text-transform: capitalize;\n"])), _fontSizes.FONT_SIZE_HEADING_X_LARGE, function (props) {
  return props.palette.brand.main;
});
var _default = StyledTitle;
exports["default"] = _default;