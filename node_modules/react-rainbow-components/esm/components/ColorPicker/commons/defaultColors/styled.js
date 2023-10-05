import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import HiddenElement from '../../../Structural/hiddenElement';
import { CssCircleColor } from '../styled';
export var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 0 0 auto;\n    padding: 0.5rem 0 0.25rem;\n"])));
export var StyledColors = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    text-align: center;\n"])));
export var StyledColor = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    line-height: inherit;\n    height: inherit;\n"])));
export var StyledInput = attachThemeAttrs(styled(HiddenElement))(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    &:focus + label {\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
});
export var StyledLabel = attachThemeAttrs(styled.label)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin: 0 0.45rem;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    ", "\n\n    &:hover {\n        cursor: pointer;\n    }\n"])), CssCircleColor);