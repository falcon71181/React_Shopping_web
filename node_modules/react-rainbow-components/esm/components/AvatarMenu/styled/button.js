import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
var StyledButton = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    outline: none;\n    border-radius: ", ";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    cursor: pointer;\n    color: inherit;\n    font: inherit;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    width: 100%;\n    height: 100%;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    :active {\n        transform: scale(0.97);\n        transition: all 0.2s ease;\n    }\n\n    :hover {\n        box-shadow: ", ";\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        cursor: pointer;\n    }\n\n    :hover span,\n    :hover abbr {\n        cursor: pointer;\n    }\n\n    &[disabled] {\n        cursor: default;\n    }\n"])), BORDER_RADIUS_2, function (props) {
  return props.shadows.shadow_7;
}, function (props) {
  return props.shadows.shadow_7;
});
export default StyledButton;