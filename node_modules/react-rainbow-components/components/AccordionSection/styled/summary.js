"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../styles/borderRadius");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledSummary = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: ", ";\n    border: 1px solid ", ";\n    background-color: ", ";\n    width: 100%;\n    border-radius: ", ";\n\n    &:hover {\n        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);\n        background-color: ", ";\n    }\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n    \n    ", "\n\n    ", "\n"])), _paddings.PADDING_MEDIUM, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, _borderRadius.BORDER_RADIUS_4, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.isExpanded && "\n        border-bottom: solid 1px ".concat(props.palette.border.divider, ";\n        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n\n        &:hover {\n            background-color: ").concat(props.palette.background.secondary, ";\n        }\n    ");
}, function (props) {
  return props.variant === 'error' && "\n        \n        background-color: ".concat((0, _color.replaceAlpha)(props.palette.error.main, 0.1), ";\n        border-color: ").concat((0, _color.replaceAlpha)(props.palette.error.main, 0.3), ";\n\n        &:hover {\n            background-color: ").concat((0, _color.replaceAlpha)(props.palette.error.main, 0.2), ";\n        }\n\n        &:focus {\n            outline: 0;\n            box-shadow: ").concat(props.shadows.error, ";\n        }\n    ");
});
var _default = StyledSummary;
exports["default"] = _default;