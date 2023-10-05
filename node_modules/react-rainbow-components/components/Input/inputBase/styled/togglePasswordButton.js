"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../../../styles/colors");

var _color = require("../../../../styles/helpers/color");

var _ButtonIcon = _interopRequireDefault(require("../../../ButtonIcon"));

var _templateObject;

var COLOR = (0, _color.darken)(_colors.COLOR_GRAY_3, 0.2);
var TogglePasswordButton = (0, _styledComponents["default"])(_ButtonIcon["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0.4rem;\n    font-size: 1em;\n    color: ", ";\n    background-color: ", ";\n    border-radius: 100px;\n    border: none;\n    width: 1.5rem;\n    height: 1.5rem;\n    ", ";\n    ", ";\n\n    &:hover,\n    &:focus {\n        color: ", ";\n        background-color: ", ";\n    }\n"])), COLOR, _colors.COLOR_GRAY_TRANSPARENT_3, function (props) {
  return props.size === 'large' && "\n            top: 0.2rem;\n            width: 2rem;\n            height: 2rem;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            width: 1.1rem;\n            height: 1.1rem;\n        ";
}, COLOR, (0, _color.lighten)(_colors.COLOR_GRAY_TRANSPARENT_3, 0.4));
var _default = TogglePasswordButton;
exports["default"] = _default;