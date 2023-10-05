import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import CheckmarkIcon from '../../../Option/checkmark';
export var StyledScrollable = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    max-height: 225px;\n    box-sizing: border-box;\n    overflow-y: auto;\n"])));
export var StyledUl = styled.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    height: ", "px;\n"])), function (props) {
  return props.listHeight;
});
export var StyledSearchContainer = attachThemeAttrs(styled.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    border-bottom: 1px solid ", ";\n    padding: 0 1rem;\n    margin-top: 5px;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.border.divider;
});
export var StyledCountryCodeItem = attachThemeAttrs(styled.span)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex: 0 0 auto;\n"])));
export var StyledScrollControls = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    padding-top: 1rem;\n"])));
export var StyledCheckmarkIcon = styled(CheckmarkIcon)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 1;\n    margin-left: 0.75rem;\n    flex-shrink: 0;\n"])));
export { default as StyledDropdown } from './dropdown';
export { default as StyledItem } from './item';
export { default as StyledSearch } from './search';