import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';
var StyledBar = styled.span.attrs(function (props) {
  var theme = getTheme(props);
  var _theme$palette = theme.palette,
      brand = _theme$palette.brand,
      success = _theme$palette.success;
  var brandMainColor = brand.main;
  var successMainColor = success.main;
  return {
    brandMainColor: brandMainColor,
    successMainColor: successMainColor
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    background: ", ";\n    height: 100%;\n    border-radius: 1rem;\n    ", ";\n"])), function (props) {
  return props.brandMainColor;
}, function (props) {
  return props.variant === 'success' && "\n            background: ".concat(props.successMainColor, ";\n        ");
});
export default StyledBar;