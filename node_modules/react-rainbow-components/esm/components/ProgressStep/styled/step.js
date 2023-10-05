import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledStep = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-self: center;\n    justify-content: center;\n    box-sizing: border-box;\n    flex-grow: 1;\n    position: relative;\n\n    :not(:first-child),\n    :not(:last-child) {\n        &:before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            display: block;\n            width: 100%;\n            height: 1px;\n            border: solid 0.5px ", ";\n            margin: -0.5px 0 0;\n        }\n    }\n\n    :first-child {\n        &:before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            display: block;\n            width: 50%;\n            height: 1px;\n            border: solid 0.5px ", ";\n            margin: -0.5px 0 0;\n        }\n    }\n\n    :last-child {\n        &:before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            right: 50%;\n            display: block;\n            width: 50%;\n            height: 1px;\n            border: solid 0.5px ", ";\n            margin: -0.5px 0 0;\n        }\n    }\n    \n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
});
export default StyledStep;