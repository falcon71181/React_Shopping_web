import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';
var StyledCellContent = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 1px solid transparent;\n    color: ", ";\n    font-size: ", ";\n    min-height: 42px;\n    line-height: 40px;\n    padding: 0 0.5rem;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    box-sizing: border-box;\n    height: 100%;\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.component && "\n        padding: 0;\n    ";
}, function (props) {
  return props.isEditable && !props.component && "\n        min-height: 20px;\n        line-height: 12px;\n        max-width: 100%;\n        margin: auto;\n        padding: 0.3rem 0.5rem;\n    ";
});
export default StyledCellContent;