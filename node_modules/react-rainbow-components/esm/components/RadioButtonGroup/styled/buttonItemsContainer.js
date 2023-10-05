import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { BORDER_RADIUS_2, BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';
import { COLOR_GRAY_2 } from '../../../styles/colors';
var sizeMap = {
  large: '3rem',
  medium: '2.5rem',
  small: '1.8rem',
  'x-small': '1.3rem'
};
var StyledButtonItemsContainer = attachThemeAttrs(styled.div).attrs(function (props) {
  var isDark = props.palette.isDark;
  var inverse = {
    border: isDark ? COLOR_GRAY_2 : 'rgba(0, 0, 0, 0.4)',
    background: isDark ? 'rgba(239,241,245,0.4)' : 'rgba(0, 0, 0, 0.4)'
  };
  return {
    inverse: inverse
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: ", ";\n    border: solid 1px ", ";\n    background-color: ", ";\n    line-height: ", ";\n    height: ", ";\n    margin: 0px auto;\n    width: calc(100% - 4px);\n\n    ", ";\n\n        ", ";\n\n        ", ";\n        \n        ", ";\n"])), BORDER_RADIUS_2, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.4);
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return props.variant === 'inverse' && "\n            border: solid 1px ".concat(props.inverse.border, ";\n            background-color: ").concat(props.inverse.background, ";\n        ");
}, function (props) {
  return props.borderRadius === 'square' && "\n                border-radius: ".concat(BORDER_RADIUS_SQUARE, " !important;\n            ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n                border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, " !important;\n            ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n                border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, " !important;\n            ");
});
export default StyledButtonItemsContainer;