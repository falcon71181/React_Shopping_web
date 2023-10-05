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

var StyledTextContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1;\n    min-width: 0;\n    font-size: ", ";\n    color: ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_SMALL, function (props) {
  return props.palette.text.label;
});
var _default = StyledTextContainer;
exports["default"] = _default;