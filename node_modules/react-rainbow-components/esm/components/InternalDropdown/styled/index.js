import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import SearchIcon from '../icons/searchIcon';
import PrimitiveCheckbox from '../../PrimitiveCheckbox';
import StyledHeader from '../../Option/styled/header';
import BorderRadiusElement from '../../Structural/borderRadiusElement';
export var Dropdown = attachThemeAttrs(styled(BorderRadiusElement))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    font-size: 0.75rem;\n    background: ", ";\n    box-shadow: ", ";\n    transition: opacity 0.1s linear, visibility 0.1s linear;\n\n    &:focus,\n    &:active {\n        outline: none;\n    }\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_12;
});
export var Ul = styled.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    overflow-y: auto;\n    ", "\n"])), function (props) {
  return props.showEmptyMessage && "\n        display: none;\n    ";
});
export var Arrow = attachThemeAttrs(styled.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 1rem;\n    position: absolute;\n    width: 100%;\n    z-index: 10;\n    background: ", ";\n    cursor: pointer;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        left: 50%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-color: ", ";\n        transform: rotate(135deg);\n    }\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.direction === 'up' && "\n            top: 0;\n            margin-top: 0.2rem;\n\n            &::after {\n                border-width: 0 0 0.15em 0.15em;\n                top: 40%;\n            }\n    ";
}, function (props) {
  return props.direction === 'down' && "\n            bottom: 0;\n            margin-bottom: 0.2rem;\n\n            &::after {\n                border-width: 0.15em 0.15em 0 0;\n            }\n    ";
});
export var UlContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: relative;\n    padding: 1rem 0;\n"])));
export var SearchContainer = attachThemeAttrs(styled.div)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
export var Icon = attachThemeAttrs(styled(SearchIcon))(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 14px;\n    height: 14px;\n    margin-left: 12px;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
export var StyledSearchIcon = attachThemeAttrs(styled(SearchIcon))(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 32px;\n    height: 32px;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
export var InputSearch = attachThemeAttrs(styled.input)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    font: inherit;\n    background-color: transparent;\n    border: 0;\n    color: ", ";\n    caret-color: ", " ;\n    font-size: ", ";\n    margin: 0;\n    line-height: 42px;\n    height: 42px;\n    width: 85%;\n    padding: 0 0.5rem;\n\n    :focus,\n    :active {\n        outline: 0;\n        background-color: transparent;\n        border: 0;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.brand.main;
}, FONT_SIZE_TEXT_LARGE);
export var SpinnerContainer = attachThemeAttrs(styled.div)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 3.125rem 0;\n"])));
export var MessageContainer = attachThemeAttrs(styled.div)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 16px;\n    "])));
export var MessageDescription = attachThemeAttrs(styled.p)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    font-size: 14px;\n    line-height: 1.43;\n    text-align: center;\n    color: ", ";\n    margin-top: 12px;\n    word-wrap: break-word;\n"])), function (props) {
  return props.palette.text.header;
});
export var MessageHighLight = attachThemeAttrs(styled.p)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    font-size: 14px;\n    font-weight: 900;\n    text-align: center;\n    color: ", ";\n    word-wrap: break-word;\n"])), function (props) {
  return props.palette.text.main;
});
export var StyledPrimitiveCheckbox = styled(PrimitiveCheckbox)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    display: inline;\n    margin-left: 4px;\n    margin-right: 8px;\n"])));
export var StyledTopHeader = attachThemeAttrs(styled(StyledHeader))(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    position: sticky;\n    top: 0;\n    border-bottom: 1px solid ", ";\n    background: ", ";\n    z-index: 1;\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
});