"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _trash = _interopRequireDefault(require("../../icons/trash"));

var _getTheme = _interopRequireDefault(require("../../../../styles/helpers/getTheme"));

var _templateObject;

var StyledIcon = (0, _styledComponents["default"])(_trash["default"]).attrs(function (props) {
  var brandMainColor = (0, _getTheme["default"])(props).palette.brand.main;
  return {
    brandMainColor: brandMainColor
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    fill: ", ";\n    color: ", ";\n"])), function (props) {
  return props.brandMainColor;
}, function (props) {
  return props.brandMainColor;
});
var _default = StyledIcon;
exports["default"] = _default;