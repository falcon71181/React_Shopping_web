"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStrenghtBar = exports.StyledStateLabel = exports.StyledStateBar = exports.StyledHelpText = exports.StyledContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _lighten = _interopRequireDefault(require("../../../styles/helpers/color/lighten"));

var _helpText = _interopRequireDefault(require("../../Input/styled/helpText"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: column;\n"])));

exports.StyledContainer = StyledContainer;

var StyledStrenghtBar = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: row;\n"])));

exports.StyledStrenghtBar = StyledStrenghtBar;
var StyledStateBar = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    flex-grow: 1;\n    height: 2px;\n    background-color: ", ";\n    margin: 0.65em;\n    border-radius: 2px;\n\n    ::before {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        height: 2px;\n        transition-property: all;\n        transition-duration: .5s;\n        width: 0;\n        background-color: ", "\n        border-radius: 2px;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.error.main;
}, function (props) {
  return props.passwordState === 'weak' && "\n            background-color: ".concat(props.palette.error.light, ";\n\n            ::before {\n                width: 33%;\n                background-color: ").concat(props.palette.error.main, "\n            }\n        ");
}, function (props) {
  return props.passwordState === 'average' && "\n            background-color: ".concat((0, _lighten["default"])(props.palette.warning.main), ";\n\n            ::before {\n                width: 66%;\n                background-color: ").concat(props.palette.warning.main, "\n            }\n        ");
}, function (props) {
  return props.passwordState === 'strong' && "\n            background-color: ".concat(props.palette.success.light, ";\n\n            ::before {\n                width: 100%;\n                background-color: ").concat(props.palette.success.main, "\n            }\n        ");
});
exports.StyledStateBar = StyledStateBar;
var StyledStateLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: 0.65em;\n    color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.passwordState === 'weak' && "\n            color: ".concat(props.palette.error.main, ";\n        ");
}, function (props) {
  return props.passwordState === 'average' && "\n            color: ".concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.passwordState === 'strong' && "\n            color: ".concat(props.palette.success.main, ";\n        ");
});
exports.StyledStateLabel = StyledStateLabel;
var StyledHelpText = (0, _styledComponents["default"])(_helpText["default"])(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n"])));
exports.StyledHelpText = StyledHelpText;