"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledFaux = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 1.25rem;\n    height: 1.25rem;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    background: ", ";\n    margin-right: $margin-small;\n    transition: border 0.1s linear, background-color 0.1s linear;\n"])), function (props) {
  return props.palette.border.divider;
}, _borderRadius.BORDER_RADIUS_3, function (props) {
  return props.palette.background.main;
});
var _default = StyledFaux;
exports["default"] = _default;