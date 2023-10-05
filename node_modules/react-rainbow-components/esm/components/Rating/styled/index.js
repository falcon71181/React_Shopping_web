import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

import styled from 'styled-components';
import { labelAlignmentMap } from '../../Input/label/labelText';
import Label from '../../Input/label';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
export var StyledFieldset = styled.fieldset(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    line-height: 1.5rem;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n"])));
export var StyledItemsContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    align-self: ", ";\n"])), function (props) {
  return labelAlignmentMap[props.labelAlignment] || labelAlignmentMap.center;
});
export var StyledLabel = styled(Label)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-left: 0;\n    padding-right: 0;\n"])));
export var StyledStarContainer = attachThemeAttrs(styled.span)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    line-height: inherit;\n    height: inherit;\n    color: ", ";\n\n    :not(:last-child) {\n        margin-right: 0.25rem;\n    }\n\n    display: ", ";\n    transition: transform 300ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.5);\n    }\n"])), function (props) {
  return props.palette.warning.main;
}, function (props) {
  return props.readOnly ? '' : 'inline-block';
});
export var StyledStarInput = attachThemeAttrs(styled.input)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    position: absolute;\n    opacity: 0;\n    width: 22px;\n    height: 22px;\n    cursor: pointer;\n    color: inherit;\n    font: inherit;\n    margin: 2px 0;\n    line-height: normal;\n    padding: 0;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :-ms-input-placeholder {\n        color: ", ";\n        font-weight: 400;\n        font-size: 0.8125rem;\n    }\n"])), function (props) {
  return props.palette.text.label;
});