import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_4 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { PADDING_MEDIUM } from '../../../styles/paddings';
var StyledSummary = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: ", ";\n    border: 1px solid ", ";\n    background-color: ", ";\n    width: 100%;\n    border-radius: ", ";\n\n    &:hover {\n        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);\n        background-color: ", ";\n    }\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n    \n    ", "\n\n    ", "\n"])), PADDING_MEDIUM, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, BORDER_RADIUS_4, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.isExpanded && "\n        border-bottom: solid 1px ".concat(props.palette.border.divider, ";\n        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n\n        &:hover {\n            background-color: ").concat(props.palette.background.secondary, ";\n        }\n    ");
}, function (props) {
  return props.variant === 'error' && "\n        \n        background-color: ".concat(replaceAlpha(props.palette.error.main, 0.1), ";\n        border-color: ").concat(replaceAlpha(props.palette.error.main, 0.3), ";\n\n        &:hover {\n            background-color: ").concat(replaceAlpha(props.palette.error.main, 0.2), ";\n        }\n\n        &:focus {\n            outline: 0;\n            box-shadow: ").concat(props.shadows.error, ";\n        }\n    ");
});
export default StyledSummary;