import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
export var StyledSaturationContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    flex: 1 0 auto;\n    border-radius: 12px;\n    overflow: hidden;\n    border: 1px solid ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
export var StyledSlidersContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    flex: 1 0 auto;\n    margin-right: 15px;\n    margin-top: 5px;\n"])));
export var StyledHexColorContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    flex: 0 3 auto;\n"])));
export var StyledRgbaColorContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex: 0 4 auto;\n"])));