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

var _input = _interopRequireDefault(require("../../Input/styled/input"));

var _templateObject;

var StyledSelectedInput = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_input["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    caret-color: transparent;\n    color: ", ";\n    font-size: ", ";\n    padding-right: 2.35rem;\n    text-overflow: ellipsis;\n    box-shadow: inset 0 0 0 3px ", ",\n                inset 0 0 0 4px ", ";\n\n    :focus,\n    :active {\n        box-shadow: inset 0 0 0 2px ", ",\n                    inset 0 0 0 3px ", ";\n                    ", ";\n        padding-right: 2.35rem;\n        text-overflow: ellipsis;\n    }\n\n    &[disabled] {\n        box-shadow: none;\n\n        &:focus,\n        &:active {\n            padding-right: 1rem;\n        }\n    }\n"])), function (props) {
  return props.palette.text.label;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.shadows.brand;
});
var _default = StyledSelectedInput;
exports["default"] = _default;