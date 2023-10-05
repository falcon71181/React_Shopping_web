import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledOl = attachThemeAttrs(styled.ol)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n\n    li > a {\n        text-decoration: none;\n    }\n\n    > li:last-child > a {\n        font-weight: 900;\n        color: ", ";\n        text-decoration: none;\n        pointer-events: none;\n    }\n\n    > li:last-child > button {\n        font-weight: 900;\n        color: ", ";\n        pointer-events: none;\n    }\n\n    > li:not(:first-child)::before {\n        margin: 0 10px;\n        content: '>';\n        color: ", ";\n    }\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.label;
});
export default StyledOl;