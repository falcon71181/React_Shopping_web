import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_4 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_XX_SMALL } from '../../../styles/margins';
var StyledLi = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    list-style: none;\n    box-sizing: border-box;\n    border-radius: ", ";\n    margin-bottom: ", ";\n\n    ", ";\n\n    ", " \n"])), BORDER_RADIUS_4, MARGIN_XX_SMALL, function (props) {
  return props.disabled && 'pointer-events: none;';
}, function (props) {
  return props.isExpanded && "\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.28);\n    ";
});
export default StyledLi;