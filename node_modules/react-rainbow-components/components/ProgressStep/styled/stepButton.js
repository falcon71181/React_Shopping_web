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

var StyledStepButton = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_ButtonIcon["default"])).attrs(function (props) {
  var contrastText = props.palette.getContrastText(props.palette.brand.main);
  return {
    contrastText: contrastText
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 1.25rem;\n    height: 1.25rem;\n    cursor: auto;\n    z-index: 1;\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.stepState === 'Inactive' && "\n            width: 0.75rem;\n            height: 0.75rem;\n            margin: 0.25rem;\n            background-color: ".concat(props.palette.background.highlight, ";\n        ");
}, function (props) {
  return props.stepState === 'Completed' && "\n            color: ".concat(props.contrastText, ";\n            background-color: ").concat(props.palette.brand.main, ";\n            \n\n            &:hover, &:focus, &:active {\n                color: ").concat(props.contrastText, ";\n            }\n\n            > svg {\n                width: 0.75rem !important;\n                height: 0.75rem !important;\n            }\n        ");
}, function (props) {
  return props.stepState === 'Active' && "\n            background-color: ".concat(props.contrastText, ";\n        ");
}, function (props) {
  return props.stepState === 'Error' && "\n            color: ".concat(props.palette.error.main, ";\n\n            &:hover, &:focus, &:active {\n                color: ").concat(props.palette.error.main, ";\n            }\n\n            > svg {\n                width: 100% !important;\n                height: 100% !important;\n        ");
});
var _default = StyledStepButton;
exports["default"] = _default;