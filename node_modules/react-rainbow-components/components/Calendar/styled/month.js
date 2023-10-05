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

var StyledMonth = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h3)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n"])), _fontSizes.FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.text.main;
});
var _default = StyledMonth;
exports["default"] = _default;