"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _Structural = require("../../../Structural");

var _templateObject;

var StyledDropdown = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_Structural.BorderRadiusElement))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    overflow: hidden;\n    float: left;\n    width: 100%;\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n    border: solid 1px ", ";\n    padding: 0 0 1rem 0;\n    font-size: 0.75rem;\n    background: ", ";\n    box-shadow: ", ";\n    top: 100%;\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_2;
});
var _default = StyledDropdown;
exports["default"] = _default;