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

var StyledLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    color: ", ";\n    margin-top: ", ";\n    position: absolute;\n    display: inline;\n    top: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n    text-align: center;\n    ", ";\n    ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_X_SMALL, function (props) {
  return props.palette.text.label;
}, _margins.MARGIN_XX_SMALL, function (props) {
  return props.stepState === 'Active' && "\n            color: ".concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.stepState === 'Error' && "\n            color: ".concat(props.palette.error.main, ";\n        ");
});
var _default = StyledLabel;
exports["default"] = _default;