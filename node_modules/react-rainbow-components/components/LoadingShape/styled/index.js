"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledShapeContainer = exports.StyledLoadingShape = exports.StyledImageIcon = exports.StyledAvatarIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _darken = _interopRequireDefault(require("../../../styles/helpers/color/darken"));

var _avatar = _interopRequireDefault(require("../icons/avatar"));

var _image = _interopRequireDefault(require("../icons/image"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledShapeContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n"])));

exports.StyledShapeContainer = StyledShapeContainer;
var StyledImageIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_image["default"]))(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shape === 'square' && "\n        width: 85%;\n        ";
}, function (props) {
  return props.shape === 'circle' && "\n        width: 60%;\n        ";
}, function (props) {
  return (props.shape === 'rect' || props.shape === 'rounded-rect') && "\n        height: 80%;\n        ";
});
exports.StyledImageIcon = StyledImageIcon;
var StyledAvatarIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_avatar["default"]))(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shape === 'square' && "\n        width: 85%;\n        ";
}, function (props) {
  return props.shape === 'circle' && "\n        width: 60%;\n        ";
}, function (props) {
  return (props.shape === 'rect' || props.shape === 'rounded-rect') && "\n        height: 80%;\n        ";
});
exports.StyledAvatarIcon = StyledAvatarIcon;
var StyledLoadingShape = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    background: ", "\n        linear-gradient(\n            90deg,\n            ", " 0%,\n            ", " 50%,\n            ", " 100%\n        );\n    background-size: 400% 400%;\n    animation: gradient 2.5s ease-in-out infinite;\n\n    @keyframes gradient {\n        0% {\n            background-position: 14% 0;\n        }\n\n        50% {\n            background-position: 87% 100%;\n        }\n\n        100% {\n            background-position: 14% 0;\n        }\n    }\n\n    ", "\n    \n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.1);
}, function (props) {
  return (0, _darken["default"])(props.palette.background.highlight, 0.1);
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.1);
}, function (props) {
  return (props.shape === 'rect' || props.shape === 'rounded-rect') && "\n        min-height: 12px;\n        min-width: 92px;\n        height: 100%;\n        ";
}, function (props) {
  return (props.shape === 'circle' || props.shape === 'square') && "\n        min-width: 48px;\n        min-height: 48px;\n        ";
}, function (props) {
  return (props.variant === 'image' || props.variant === 'avatar') && "\n        min-width: 48px;\n        min-height: 48px;\n        ";
}, function (props) {
  return props.shape === 'rounded-rect' && "\n        border-radius: 1rem;\n        ";
}, function (props) {
  return props.shape === 'circle' && "\n        border-radius: 50%;\n        ";
});
exports.StyledLoadingShape = StyledLoadingShape;