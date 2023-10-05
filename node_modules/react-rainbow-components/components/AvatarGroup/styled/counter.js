"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _container = _interopRequireDefault(require("../../Avatar/styled/container"));

var _templateObject;

var StyledCounter = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_container["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid ", ";\n"])), function (props) {
  return props.palette.background.main;
});
var _default = StyledCounter;
exports["default"] = _default;