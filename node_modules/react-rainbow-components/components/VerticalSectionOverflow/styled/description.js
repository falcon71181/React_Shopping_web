"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _truncatedText = _interopRequireDefault(require("../../Structural/truncatedText"));

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var StyledDescription = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_truncatedText["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    line-height: 1rem;\n    color: ", ";\n    text-align: left;\n    max-width: 100%;\n    transition: all 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_X_SMALL, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.isExpanded && "\n            opacity: 0;\n        ";
});
var _default = StyledDescription;
exports["default"] = _default;