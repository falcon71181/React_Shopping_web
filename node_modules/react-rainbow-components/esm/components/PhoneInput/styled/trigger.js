import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTrigger = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 0 0 auto;\n    padding-left: 4px;\n    padding-right: 0;\n    border: none;\n    background: transparent;\n    line-height: 1.5rem;\n    color: ", ";\n    font-weight: 300;\n    font-size: ", ";\n    border-radius: ", " 0 0 ", ";\n\n    :hover,\n    :focus,\n    :active{\n        text-decoration: none;\n        outline: 0;\n        background-color: ", ";\n    }\n\n    &[disabled] {\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n        &:active {\n            background-color: transparent;\n        }\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.text.header;
}, FONT_SIZE_TEXT_LARGE, BORDER_RADIUS_2, BORDER_RADIUS_2, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.disabled && "\n        color: ".concat(props.palette.text.disabled, ";\n    ");
});
export default StyledTrigger;