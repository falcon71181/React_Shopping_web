import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledPreviewText = attachThemeAttrs(styled.p)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 14px;\n    margin: 16px 0 8px 0;\n    padding: 0;\n\n    b {\n        font-family: 'Lato Black', sans-serif;\n        font-weight: bold;\n        font-weight: 700;\n    }\n"])), function (props) {
  return props.palette.text.title;
});
export default StyledPreviewText;