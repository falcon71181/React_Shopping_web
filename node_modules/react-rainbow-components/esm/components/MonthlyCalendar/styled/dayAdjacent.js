import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDayAdjacent = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    color: ", ";\n    text-align: right;\n    font-size: ", ";\n    font-weight: 400;\n    padding: 7px 7px 0 0;\n    cursor: not-allowed;\n    user-select: none;\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n"])), function (props) {
  return props.palette.text.disabled;
}, FONT_SIZE_TEXT_LARGE);
export default StyledDayAdjacent;