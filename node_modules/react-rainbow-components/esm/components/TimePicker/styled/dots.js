import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { PADDING_XX_SMALL } from '../../../styles/paddings';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDots = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 32px;\n    font-weight: 200;\n    height: 100%;\n    color: ", ";\n    margin: auto ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 600px) {\n        margin: 0;\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, PADDING_XX_SMALL);
export default StyledDots;