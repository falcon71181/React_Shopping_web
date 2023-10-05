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

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledDatetime = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-size: ", ";\n    margin: 0;\n    padding: 0;\n    margin-left: ", ";\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.header;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, _margins.MARGIN_SMALL);
var _default = StyledDatetime;
exports["default"] = _default;