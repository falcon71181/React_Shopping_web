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

var StyledLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-size: ", ";\n    margin-left: ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, _margins.MARGIN_SMALL, function (props) {
  return props.labelAlignment === 'left' && "\n            margin-right: 12px;\n        ";
}, function (props) {
  return props.labelAlignment === 'top' && "\n            margin-left: 0;\n            margin-bottom: ".concat(_margins.MARGIN_XX_SMALL, ";\n        ");
});
var _default = StyledLabel;
exports["default"] = _default;