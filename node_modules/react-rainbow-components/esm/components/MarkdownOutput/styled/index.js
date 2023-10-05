import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../renderers/fontSizes';
var StyledContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n\n    .task-list-item {\n        list-style: none;\n        margin-left: 0;\n    }\n\n    ", "\n\n    > div > *:first-child {\n        margin-top: 0;\n    }\n"])), FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.variant === 'inline' && "\n        display: inline;\n\n        > div {\n            display: inline;\n        }\n    ";
});
export default StyledContainer;