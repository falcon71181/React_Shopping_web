import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import UploadIcon from '../../icons/upload';
import getTheme from '../../../../styles/helpers/getTheme';
var StyledUploadIcon = styled(UploadIcon).attrs(function (props) {
  var theme = getTheme(props);
  var _theme$palette = theme.palette,
      getContrastText = _theme$palette.getContrastText,
      brand = _theme$palette.brand;
  var brandMainColor = brand.main;
  var brandMainContrastText = getContrastText(brandMainColor);
  return {
    brandMainContrastText: brandMainContrastText
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    fill: ", ";\n    color: ", ";\n    margin-right: 12px;\n"])), function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.brandMainContrastText;
});
export default StyledUploadIcon;