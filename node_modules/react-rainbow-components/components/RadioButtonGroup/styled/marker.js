"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var sizeMap = {
  large: '3.1rem',
  medium: '2.6rem',
  small: '1.81rem',
  'x-small': '1.31rem'
};
var StyledMarker = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    background-color: ", ";\n    border: solid 1px ", ";\n    opacity: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),\n        all 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);\n    transform: translate3d(0, 0, 0);\n\n    ", ";\n    ", ";\n\n    ", ";\n\n    ", ";\n        \n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  return props.variant === 'inverse' && "\n        background-color: ".concat(props.palette.brand.main, ";\n        border: solid 1px ").concat(props.palette.brand.main, ";\n        box-shadow: 0 0 4px 0 ").concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.variant === 'brand' && "\n            background-color: ".concat(props.palette.brand.main, ";\n            border: solid 1px ").concat(props.palette.brand.dark, ";\n        ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, " !important;\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, " !important;\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, " !important;\n        ");
});
var _default = StyledMarker;
exports["default"] = _default;