"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledStepNumberButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button).attrs(function (props) {
  var contrastText = props.palette.getContrastText(props.palette.brand.main);
  return {
    contrastText: contrastText
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 1.25rem;\n    height: 1.25rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    cursor: auto;\n    z-index: 1;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:active {\n        transform: scale(0.7);\n        transition: all 0.3s ease;\n    }\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.stepState === 'Inactive' && "\n            background-color: ".concat(props.palette.background.highlight, ";\n        ");
}, function (props) {
  return props.stepState === 'Active' && "\n            color: ".concat(props.contrastText, ";\n            background-color: ").concat(props.palette.brand.main, ";            \n\n            &:hover, &:focus, &:active {\n                color: ").concat(props.contrastText, ";\n            }\n        ");
});
var _default = StyledStepNumberButton;
exports["default"] = _default;