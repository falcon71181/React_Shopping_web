import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import lighten from '../../../styles/helpers/color/lighten';
import HelpText from '../../Input/styled/helpText';
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n"])));
var StyledStrenghtBar = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n"])));
var StyledStateBar = attachThemeAttrs(styled.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    flex-grow: 1;\n    height: 2px;\n    background-color: ", ";\n    margin: 0.65em;\n    border-radius: 2px;\n\n    ::before {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        height: 2px;\n        transition-property: all;\n        transition-duration: .5s;\n        width: 0;\n        background-color: ", "\n        border-radius: 2px;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.error.main;
}, function (props) {
  return props.passwordState === 'weak' && "\n            background-color: ".concat(props.palette.error.light, ";\n\n            ::before {\n                width: 33%;\n                background-color: ").concat(props.palette.error.main, "\n            }\n        ");
}, function (props) {
  return props.passwordState === 'average' && "\n            background-color: ".concat(lighten(props.palette.warning.main), ";\n\n            ::before {\n                width: 66%;\n                background-color: ").concat(props.palette.warning.main, "\n            }\n        ");
}, function (props) {
  return props.passwordState === 'strong' && "\n            background-color: ".concat(props.palette.success.light, ";\n\n            ::before {\n                width: 100%;\n                background-color: ").concat(props.palette.success.main, "\n            }\n        ");
});
var StyledStateLabel = attachThemeAttrs(styled.span)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 0.65em;\n    color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.passwordState === 'weak' && "\n            color: ".concat(props.palette.error.main, ";\n        ");
}, function (props) {
  return props.passwordState === 'average' && "\n            color: ".concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.passwordState === 'strong' && "\n            color: ".concat(props.palette.success.main, ";\n        ");
});
var StyledHelpText = styled(HelpText)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin: 0;\n"])));
export { StyledContainer, StyledStrenghtBar, StyledStateBar, StyledStateLabel, StyledHelpText };