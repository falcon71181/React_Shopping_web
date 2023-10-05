"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _label = _interopRequireDefault(require("../../Input/label"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledLabel = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_label["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", ";\n"])), function (props) {
  return props.variant === 'inverse' && "\n            color: ".concat(props.palette.isDark ? '#576574' : 'rgb(178,178,178)', "\n        ");
});
var _default = StyledLabel;
exports["default"] = _default;