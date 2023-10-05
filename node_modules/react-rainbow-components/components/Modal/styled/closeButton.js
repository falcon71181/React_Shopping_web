"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledCloseButton = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_ButtonIcon["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    z-index: 1;\n    color: ", ";\n"])), function (props) {
  return props.palette.text.header;
});
var _default = StyledCloseButton;
exports["default"] = _default;