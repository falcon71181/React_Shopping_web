"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledItemDescription = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    display: inline-block;\n    margin-left: 2rem;\n    line-height: 1.35em;\n    margin-bottom: ", ";\n    ", ";\n"])), function (props) {
  return (0, _color.lighten)(props.palette.text.label, 0.2);
}, _margins.MARGIN_SMALL, function (props) {
  return props.disabled && "color: ".concat(props.palette.text.disabled, ";");
});
var _default = StyledItemDescription;
exports["default"] = _default;