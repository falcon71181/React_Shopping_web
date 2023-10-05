import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledEmptyMessage = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 12px;\n    width: 90%;\n    font-size: 15px;\n    color: ", ";\n    line-height: 1.7;\n\n    > span {\n        color: ", ";\n        font-family: 'Lato Black', Arial, sans-serif;\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"])), function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.text.main;
});
export default StyledEmptyMessage;