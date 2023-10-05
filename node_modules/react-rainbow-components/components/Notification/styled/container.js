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

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    border-radius: ", ";\n    box-shadow: ", ";\n    padding: ", ";\n    background-color: ", ";\n    width: 20rem;\n    border: solid 1px ", ";\n    transition-duration: 0.4s;\n    transition-timing-function: ease-in-out;\n    transition-property: margin, max-height, opacity, top;\n    min-height: 2.625rem;\n\n    :hover {\n        background-color: ", ";\n        cursor: pointer;\n    }\n"])), _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.shadows.shadow_4;
}, _paddings.PADDING_SMALL, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.action.hover;
});
var _default = StyledContainer;
exports["default"] = _default;