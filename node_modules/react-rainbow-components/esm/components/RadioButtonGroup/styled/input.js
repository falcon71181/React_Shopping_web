import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledInput = attachThemeAttrs(styled.input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: inherit;\n    font: inherit;\n    margin: 0;\n    line-height: normal;\n    box-sizing: border-box;\n    padding: 0;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :-ms-input-placeholder {\n        color: ", ";\n        font-weight: 400;\n    }\n\n    &[disabled] {\n        cursor: default;\n    }\n"])), function (props) {
  return props.palette.text.label;
});
export default StyledInput;