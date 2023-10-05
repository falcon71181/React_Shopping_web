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

var StyledHour = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    height: 40px;\n    min-height: 40px;\n    padding-right: 8px;\n    text-align: right;\n    color: ", ";\n    font-size: ", ";\n\n    :first-child>div {\n        display: none;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_SMALL);
var _default = StyledHour;
exports["default"] = _default;