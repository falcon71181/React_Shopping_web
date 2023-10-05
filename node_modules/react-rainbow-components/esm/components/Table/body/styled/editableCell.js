import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../../ButtonIcon';
import Edit from '../icons/edit';
export var StyledEditIcon = attachThemeAttrs(styled(Edit))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    flex-shrink: 0;\n    display: none;\n"])), function (props) {
  return props.palette.brand.main;
});
export var StyledSpan = attachThemeAttrs(styled.span)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: ", ";\n    padding: 0 10px 0 0;\n"])), function (props) {
  return props.palette.text.title;
});
export var SpanContainer = attachThemeAttrs(styled.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between\n    align-items: center;\n    color: ", ";\n    min-height: 30px;\n    line-height: 18px;\n    max-width: 100%;\n    padding: 5px;\n    margin: auto;\n    border-radius: 0.2rem;\n    width: 100%;\n    :hover {\n        padding: 5px 5px 5px 4px;\n        border: 1px dotted ", ";\n        cursor: pointer;\n        > svg { \n            display: inline;\n        }\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.border.main;
});
export var StyledButtonIcon = attachThemeAttrs(styled(ButtonIcon))(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    height: 100%;\n    top: 0;\n    position: absolute;\n    line-height: 1;\n    border: 0;\n    z-index: 2;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    right: -0.4rem;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
export var RelativeInputContainer = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n"])));
export var StyledInput = attachThemeAttrs(styled.input)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-radius: 0.2rem;\n    background-color: ", ";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 0;\n    color: ", ";\n    border: 1px dotted ", ";\n    padding: 5px 25px 5px 4px;;\n\n    :focus{\n        outline: none;\n        caret-color: ", ";\n    }\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.title;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
});