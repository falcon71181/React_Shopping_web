import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';
import { replaceAlpha } from '../../../styles/helpers/color';
var StyledContainer = styled.div.attrs(function (props) {
  var theme = getTheme(props);
  var _theme$palette = theme.palette,
      brand = _theme$palette.brand,
      success = _theme$palette.success;
  var brandLightColor = brand.light;
  var successLightColor = success.light;
  return {
    brandLightColor: brandLightColor,
    successLightColor: successLightColor
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    border: 0;\n    position: relative;\n    display: block;\n    background: ", ";\n    height: 0.5rem;\n    border-radius: 1rem;\n    ", "\n    ", "\n    ", "\n    ", "\n    ", ";\n"])), function (props) {
  return replaceAlpha(props.brandLightColor, 0.7);
}, function (props) {
  return props.size === 'x-small' && 'height: 0.125rem;';
}, function (props) {
  return props.size === 'small' && 'height: 0.25rem;';
}, function (props) {
  return props.size === 'medium' && 'height: 0.625rem;';
}, function (props) {
  return props.size === 'large' && 'height: 1rem;';
}, function (props) {
  return props.variant === 'success' && "\n            background: ".concat(replaceAlpha(props.successLightColor, 0.7), ";\n        ");
});
export default StyledContainer;