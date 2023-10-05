import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
var StyledButton = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 0;\n    display: flex;\n    padding: 1rem 1rem 1rem 1.25rem;\n    border-radius: 0;\n    color: ", ";\n    font-size: ", ";\n    background-clip: border-box;\n    background-color: transparent;\n    text-decoration: none;\n    width: 100%;\n    cursor: pointer;\n    white-space: normal;\n    user-select: none;\n    appearance: none;\n    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    box-sizing: border-box;\n\n    :focus {\n        outline: 0;\n        background-color: ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.isExpanded && props.description && "\n            padding-bottom: 0;\n        ";
});
export default StyledButton;