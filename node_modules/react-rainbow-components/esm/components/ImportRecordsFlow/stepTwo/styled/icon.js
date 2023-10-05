import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import TrashIcon from '../../icons/trash';
import getTheme from '../../../../styles/helpers/getTheme';
var StyledIcon = styled(TrashIcon).attrs(function (props) {
  var brandMainColor = getTheme(props).palette.brand.main;
  return {
    brandMainColor: brandMainColor
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    fill: ", ";\n    color: ", ";\n"])), function (props) {
  return props.brandMainColor;
}, function (props) {
  return props.brandMainColor;
});
export default StyledIcon;