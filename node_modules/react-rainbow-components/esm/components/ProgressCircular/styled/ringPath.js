import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledRingPath = attachThemeAttrs(styled.circle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    stroke: ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledRingPath;