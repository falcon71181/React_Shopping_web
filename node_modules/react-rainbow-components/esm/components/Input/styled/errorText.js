import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

function getAlignSelf(props) {
  return props.alignSelf || 'center';
}

var ErrorText = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    margin-top: ", ";\n    align-self: ", ";\n    color: ", ";\n"])), FONT_SIZE_TEXT_MEDIUM, MARGIN_X_SMALL, getAlignSelf, function (props) {
  return props.palette.error.main;
});
export default ErrorText;