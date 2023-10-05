"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultTextContainer = exports.DefaultHitContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2;

var DefaultHitContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-weight: bold;\n    font-size: 1rem;\n    font-family: 'Lato Black';\n"])), function (props) {
  return props.palette.text.main;
});
exports.DefaultHitContainer = DefaultHitContainer;
var DefaultTextContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-size: 1rem;\n"])), function (props) {
  return props.palette.text.main;
});
exports.DefaultTextContainer = DefaultTextContainer;