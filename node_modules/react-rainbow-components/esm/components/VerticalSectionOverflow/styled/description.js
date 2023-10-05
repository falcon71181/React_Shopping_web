import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import TruncatedText from '../../Structural/truncatedText';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
var StyledDescription = attachThemeAttrs(styled(TruncatedText))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 1rem;\n    color: ", ";\n    text-align: left;\n    max-width: 100%;\n    transition: all 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    ", ";\n"])), FONT_SIZE_TEXT_X_SMALL, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.isExpanded && "\n            opacity: 0;\n        ";
});
export default StyledDescription;