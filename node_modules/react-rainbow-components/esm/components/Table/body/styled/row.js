import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';
var StyledRow = attachThemeAttrs(styled.tr)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    counter-increment: rowCounter;\n    box-sizing: border-box;\n    ", "\n\n    ", "\n\n    ", ";\n\n        height: 1px; // This is needed for expanding the cell height in Firefox\n    \n"])), function (props) {
  return props.theme.variant === 'default' && "\n        box-shadow: ".concat(props.shadows.shadow_8, ";\n        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n        &:hover {\n            background-color: ").concat(replaceAlpha(props.palette.action.hover, 0.4), ";\n            box-shadow: ").concat(props.shadows.shadow_9, ", ").concat(props.shadows.shadow_3, ";\n        }\n    ");
}, function (props) {
  return props.theme.variant === 'listview' && "\n        border-radius: 13px;\n        box-shadow: 0 1px 1px 0 ".concat(props.palette.border.divider, ";\n\n        :last-child th, :last-child td{\n            border-bottom: 1px solid ").concat(props.palette.border.divider, ";\n        }\n        \n\n        &:hover {\n            background-color: ").concat(replaceAlpha(props.palette.action.hover, 0.4), ";\n        }\n    ");
}, function (props) {
  return props.isSelected && "\n        background-color: ".concat(replaceAlpha(props.palette.action.active, 0.4), ";\n        ");
});
export default StyledRow;