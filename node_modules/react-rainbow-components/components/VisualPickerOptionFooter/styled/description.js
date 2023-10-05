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

var StyledDescription = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h2)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    padding: 0;\n    font-weight: inherit;\n    font-size: ", ";\n    color: ", ";\n    text-align: center;\n"])), _fontSizes.FONT_SIZE_TEXT_SMALL, function (props) {
  return props.palette.text.label;
});
var _default = StyledDescription;
exports["default"] = _default;