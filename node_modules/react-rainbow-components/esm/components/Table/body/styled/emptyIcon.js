import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { MARGIN_MEDIUM } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledEmptyIcon = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-bottom: ", ";\n    color: ", ";\n"])), MARGIN_MEDIUM, function (props) {
  return props.palette.border.divider;
});
export default StyledEmptyIcon;