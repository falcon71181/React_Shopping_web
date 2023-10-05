import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import DownArrow from '../icons/downArrow';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDownArrow = attachThemeAttrs(styled(DownArrow))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledDownArrow;