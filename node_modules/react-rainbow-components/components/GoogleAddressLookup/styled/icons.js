"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchValueIconColor = exports.IconPinColor = exports.IconCircleColor = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("../../../styles/defaultTheme");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2, _templateObject3;

var IconCircleColor = (0, _attachThemeAttrs["default"])(_styledComponents["default"].svg)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    fill: ", "\n"])), function (props) {
  return props.palette.text.disabled;
});
exports.IconCircleColor = IconCircleColor;
var IconPinColor = (0, _attachThemeAttrs["default"])(_styledComponents["default"].svg)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    fill: ", "\n"])), function (props) {
  return props.palette.background.main;
});
exports.IconPinColor = IconPinColor;
var SearchValueIconColor = (0, _attachThemeAttrs["default"])(_styledComponents["default"].svg)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    fill: ", "\n"])), function (props) {
  return props.palette.brand.main;
});
exports.SearchValueIconColor = SearchValueIconColor;