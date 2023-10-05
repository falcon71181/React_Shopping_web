"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

var _templateObject;

var StyledAvatar = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_Avatar["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: 2px solid ", ";\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.zIndex && "\n        z-index: ".concat(props.zIndex, ";\n        ");
});
var _default = StyledAvatar;
exports["default"] = _default;