"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject;

var StyledHours = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h4)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex:none;\n    text-align: center;\n    color: ", ";\n    min-width: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: ", ";\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_SMALL);
var _default = StyledHours;
exports["default"] = _default;