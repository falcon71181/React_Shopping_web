"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _borderRadius = require("../../../styles/borderRadius");

var _colors = require("../../../styles/colors");

var _templateObject;

var sizeMap = {
  large: '3rem',
  medium: '2.5rem',
  small: '1.8rem',
  'x-small': '1.3rem'
};
var StyledButtonItemsContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div).attrs(function (props) {
  var isDark = props.palette.isDark;
  var inverse = {
    border: isDark ? _colors.COLOR_GRAY_2 : 'rgba(0, 0, 0, 0.4)',
    background: isDark ? 'rgba(239,241,245,0.4)' : 'rgba(0, 0, 0, 0.4)'
  };
  return {
    inverse: inverse
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: ", ";\n    border: solid 1px ", ";\n    background-color: ", ";\n    line-height: ", ";\n    height: ", ";\n    margin: 0px auto;\n    width: calc(100% - 4px);\n\n    ", ";\n\n        ", ";\n\n        ", ";\n        \n        ", ";\n"])), _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.4);
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return props.variant === 'inverse' && "\n            border: solid 1px ".concat(props.inverse.border, ";\n            background-color: ").concat(props.inverse.background, ";\n        ");
}, function (props) {
  return props.borderRadius === 'square' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, " !important;\n            ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, " !important;\n            ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, " !important;\n            ");
});
var _default = StyledButtonItemsContainer;
exports["default"] = _default;