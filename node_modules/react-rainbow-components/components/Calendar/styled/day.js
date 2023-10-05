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

var StyledDay = (0, _attachThemeAttrs["default"])(_styledComponents["default"].td)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 400;\n    border-radius: 100%;\n    width: 38px;\n    padding: 0;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM);
var _default = StyledDay;
exports["default"] = _default;