"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _paddings = require("../../../styles/paddings");

var _templateObject;

var fontSizeMap = {
  large: _fontSizes.FONT_SIZE_TEXT_LARGE,
  medium: _fontSizes.FONT_SIZE_TEXT_MEDIUM,
  small: _fontSizes.FONT_SIZE_TEXT_SMALL,
  'x-small': _fontSizes.FONT_SIZE_TEXT_X_SMALL
};
var paddingMap = {
  large: _paddings.PADDING_X_LARGE,
  medium: _paddings.PADDING_LARGE,
  small: _paddings.PADDING_SMALL,
  'x-small': _paddings.PADDING_X_SMALL
};
var StyledButtonItemLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].label).attrs(function (props) {
  var _props$palette = props.palette,
      getContrastText = _props$palette.getContrastText,
      brand = _props$palette.brand,
      text = _props$palette.text;
  var brandMainContrastText = getContrastText(brand.main);
  var inverseLabel = props.palette.isDark ? text.label : text.header;
  return {
    brandMainContrastText: brandMainContrastText,
    inverseLabel: inverseLabel
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    font-size: ", ";\n    color: ", ";\n    padding: 0 ", ";\n    font-weight: 400;\n    box-sizing: border-box;\n\n    &:hover {\n        cursor: pointer;\n    }\n    ", ";\n    ", ";\n        \n    ", ";\n\n    ", ";\n    ", ";\n"])), function (props) {
  return fontSizeMap[props.size] || fontSizeMap.medium;
}, function (props) {
  return props.inverseLabel;
}, function (props) {
  return paddingMap[props.size] || paddingMap.medium;
}, function (props) {
  return props.isChecked && "\n            color: ".concat(props.palette.text.main, ";\n        ");
}, function (props) {
  return props.disabled && "   \n            background-color: transparent;\n            border-color: ".concat(props.palette.border.main, ";\n            color: ").concat(props.palette.text.disabled, ";\n\n            :hover {\n                cursor: not-allowed;\n            }\n        ");
}, function (props) {
  return props.disabled && props.palette.isDark && "\n            color: ".concat(props.palette.text.header, ";\n        ");
}, function (props) {
  return props.variant === 'brand' && props.isChecked && "\n            color: ".concat(props.brandMainContrastText, ";\n        ");
}, function (props) {
  return props.variant === 'inverse' && props.isChecked && "\n            color: ".concat(props.brandMainContrastText, ";\n        ");
});
var _default = StyledButtonItemLabel;
exports["default"] = _default;