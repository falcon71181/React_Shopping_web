import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../styles/margins';
var StyledIcon = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    background-color: ", ";\n    border-radius: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: ", ";\n    height: 2.125rem;\n    width: 2.125rem;\n"])), function (props) {
  return props.palette.background.highlight;
}, BORDER_RADIUS_2, MARGIN_SMALL);
export default StyledIcon;