"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _hiddenElement = _interopRequireDefault(require("../../Structural/hiddenElement"));

var _templateObject;

var StyledInput = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_hiddenElement["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: inherit;\n    font: inherit;\n    margin: 0;\n    line-height: normal;\n\n    :hover ~ label > [data-id='visual-picker_option'] {\n        cursor: pointer;\n        border: solid 1.5px ", ";\n        box-shadow: ", ";\n    }\n\n    :focus ~ label > [data-id='visual-picker_option'] {\n        border: solid 1px ", ";\n        box-shadow: ", ", ", ";\n    }\n\n    :checked ~ label > [data-id='visual-picker_option'] {\n        border: solid 2px ", ";\n        position: relative;\n    }\n\n    &[disabled] ~ label > [data-id='visual-picker_option'] {\n        border: solid 1.5px ", ";\n        box-shadow: 0 0 0 0 transparent;\n        background-color: ", ";\n        cursor: not-allowed;\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.palette.brand.light;
}, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.background.disabled;
});
var _default = StyledInput;
exports["default"] = _default;