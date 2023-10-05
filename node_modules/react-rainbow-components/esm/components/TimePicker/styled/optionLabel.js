import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
var StyledOptionLabel = attachThemeAttrs(styled.label)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    font-size: 24px;\n    font-weight: 200;\n    text-transform: uppercase;\n    color: ", ";\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 50%;\n\n    &:hover {\n        cursor: pointer;\n        background-color: ", ";\n        border-radius: 4px;\n    }\n\n    @media (max-width: 340px) {\n        font-size: 22px;\n    }\n"])), function (props) {
  return replaceAlpha(props.palette.getContrastText(props.palette.brand.main), 0.3);
}, function (props) {
  return props.palette.brand.dark;
});
export default StyledOptionLabel;