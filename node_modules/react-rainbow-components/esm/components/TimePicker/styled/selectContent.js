import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { PADDING_X_SMALL } from '../../../styles/paddings';
var StyledSelectContent = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100px;\n    width: 360px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: ", ";\n    border-radius: 8px;\n    margin: 48px 12px 32px 12px;\n    padding: ", ";\n\n    @media (max-width: 600px) {\n        width: 100%;\n        margin: 56px 0 40px 0;\n    }\n"])), function (props) {
  return props.palette.background.secondary;
}, PADDING_X_SMALL);
export default StyledSelectContent;