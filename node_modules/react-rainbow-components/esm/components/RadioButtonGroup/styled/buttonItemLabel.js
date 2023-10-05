import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_MEDIUM, FONT_SIZE_TEXT_SMALL, FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import { PADDING_X_LARGE, PADDING_LARGE, PADDING_SMALL, PADDING_X_SMALL } from '../../../styles/paddings';
var fontSizeMap = {
  large: FONT_SIZE_TEXT_LARGE,
  medium: FONT_SIZE_TEXT_MEDIUM,
  small: FONT_SIZE_TEXT_SMALL,
  'x-small': FONT_SIZE_TEXT_X_SMALL
};
var paddingMap = {
  large: PADDING_X_LARGE,
  medium: PADDING_LARGE,
  small: PADDING_SMALL,
  'x-small': PADDING_X_SMALL
};
var StyledButtonItemLabel = attachThemeAttrs(styled.label).attrs(function (props) {
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    font-size: ", ";\n    color: ", ";\n    padding: 0 ", ";\n    font-weight: 400;\n    box-sizing: border-box;\n\n    &:hover {\n        cursor: pointer;\n    }\n    ", ";\n    ", ";\n        \n    ", ";\n\n    ", ";\n    ", ";\n"])), function (props) {
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
export default StyledButtonItemLabel;