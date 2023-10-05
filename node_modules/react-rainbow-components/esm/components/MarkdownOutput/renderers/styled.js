import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_X_LARGE, FONT_SIZE_HEADING_LARGE, FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_HEADING_SMALL, FONT_SIZE_HEADING_X_SMALL, FONT_SIZE_HEADING_XX_SMALL, FONT_SIZE_TEXT_MEDIUM, FONT_SIZE_TEXT_LARGE } from './fontSizes';
import { BORDER_RADIUS_3 } from '../../../styles/borderRadius';
import { getContrastText } from '../../../styles/helpers/color';
var fontSizesMap = {
  1: FONT_SIZE_HEADING_X_LARGE,
  2: FONT_SIZE_HEADING_LARGE,
  3: FONT_SIZE_HEADING_MEDIUM,
  4: FONT_SIZE_HEADING_SMALL,
  5: FONT_SIZE_HEADING_X_SMALL,
  6: FONT_SIZE_HEADING_XX_SMALL
};
export var StyledHeading = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    margin-top: 1.25rem;\n    margin-bottom: 0.75rem;\n\n    b, strong {\n        font-family: 'Lato Bold', Arial, Helvetica, sans-serif;\n    }\n"])), function (props) {
  return fontSizesMap[props.level] || FONT_SIZE_HEADING_XX_SMALL;
});
export var StyledInlineHeading = styled(StyledHeading)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin: 0;\n    display: inline;\n"])));
export var StyledParagraph = attachThemeAttrs(styled.p)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-bottom: 1rem;\n\n    b, strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n\n    code {\n        display: inline-block;\n        margin-bottom: -4px;\n        padding: 0 0.3rem;\n        line-height: 1.3;\n        font-size: 1rem;\n    }\n"])));
export var StyledInlineParagraph = styled(StyledParagraph)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin: 0;\n    display: inline;\n\n    code {\n        display: inline;\n        margin: 0;\n    }\n"])));
export var StyledLink = attachThemeAttrs(styled.a)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: ", ";\n    text-decoration: underline;\n\n    :hover {\n        color: ", ";\n    }\n\n    > p {\n        margin-bottom: 0;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.main;
});
export var StyledPre = attachThemeAttrs(styled.pre.attrs({
  className: 'hljs'
}))(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: block;\n    font-size: ", ";\n    border-radius: 4px;\n    border: 1px solid ", ";\n    padding: 2px;\n    overflow-x: auto;\n    margin-bottom: 1rem;\n\n    && > code {\n        display: block;\n        background: inherit;\n        color: inherit;\n    }\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.border.divider;
});
export var StyledInlinePre = styled(StyledPre)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: inline;\n\n    > code {\n        display: inline-block;\n        padding: 0.2rem;\n    }\n"])));
export var StyledCode = attachThemeAttrs(styled.code.attrs({
  className: 'hljs'
}))(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["    \n    font-size: ", ";\n    border-radius: 4px;\n    padding: 1px;\n    overflow-x: auto;\n    \n    &.hljs {\n        background: ", ";\n        color: ", ";\n    }\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return getContrastText(props.palette.background.highlight);
});
export var StyledInlineCode = styled(StyledCode)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding: 0;\n    margin: 0;\n    display: inline;\n"])));
export var StyledHR = attachThemeAttrs(styled.hr)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin: 1rem auto;\n    background: ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
export var StyledBlockquote = attachThemeAttrs(styled.blockquote)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    position: relative;    \n    display: block;\n    margin: 0;\n    padding: 1em 1rem 1rem 1.5rem;\n    background-color: ", ";\n    border-radius: 6px;\n    margin-bottom: 1rem;\n\n    b, strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n\n    > p {\n        margin-bottom: 0;\n        color: ", ";\n    }\n    \n    :before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: ", ";\n        content: '';\n        width: 4px;\n        height: 100%;\n        border-radius: 4px 0 0 4px;\n    }\n"])), function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.border.disabled;
});
export var StyledInlineBlockquote = styled(StyledBlockquote)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding: 0.2rem 0.2rem 0.2rem 1rem;\n    margin-bottom: 0;\n    display: inline-block;\n"])));
export var StyledTable = attachThemeAttrs(styled.table)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    table-layout: fixed;\n    border-collapse: separate;\n    background-color: ", ";\n    border-spacing: 0;\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    margin-bottom: 1rem;\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
});
export var StyledTableRow = attachThemeAttrs(styled.tr)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    box-shadow: 0 1px 0 0 ", ";\n    transition: all 250ms cubic-bezier(0.4,0,0.2,1) 0ms;\n    box-sizing: border-box;\n    counter-increment: rowCounter;\n"])), function (props) {
  return props.palette.border.divider;
});
export var StyledTableHeadindCell = attachThemeAttrs(styled.td)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    text-align: ", ";\n    border: 1px solid transparent;\n    box-sizing: border-box;\n    white-space: nowrap;\n    padding: 0 18px;\n    font-weight: 900;\n    color: ", ";\n    line-height: normal;\n    position: static;\n    border-top: 0;\n    outline: none;\n    height: 44px;\n"])), FONT_SIZE_TEXT_LARGE, function (props) {
  return props.align;
}, function (props) {
  return props.palette.text.title;
});
export var StyledTableCell = attachThemeAttrs(styled.td)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    text-align: ", ";\n    border: 1px solid transparent;\n    box-sizing: border-box;\n    white-space: nowrap;\n    padding: 0 18px;\n    color: ", ";\n    min-height: 42px;\n    line-height: 40px;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 400;\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.align;
}, function (props) {
  return props.palette.text.label;
});
export var StyledList = styled.ul(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    list-style: disc;\n    margin-left: 8px;\n    margin-bottom: 1rem;\n\n    b,\n    strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n\n    ul {\n        list-style: circle;\n        margin-left: 8px;\n    }\n"])));
export var StyledOrderedList = styled.ol(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    list-style: decimal;\n    margin-left: 8px;\n    margin-bottom: 1rem;\n\n    b,\n    strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n"])));
export var StyledListItem = attachThemeAttrs(styled.li)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    margin-left: 2rem;\n    margin-bottom: 4px;\n    font-size: ", ";\n\n    code {\n        display: inline-block;\n        margin-bottom: -4px;\n        padding: 0 0.3rem;\n        line-height: 1.3;\n        font-size: 1rem;\n    }\n\n    input[type='checkbox'] {\n        width: 18px;\n        height: 18px;\n        display: inline-block;\n        position: relative;\n        vertical-align: middle;\n        border: 1px solid ", ";\n        border-radius: ", ";\n        background-color: ", ";\n        margin-right: 6px;\n        transition: border 0.1s linear, background-color 0.1s linear;\n        box-sizing: border-box;\n        appearance: none;\n\n        :checked {\n            border: 2px solid ", ";\n\n            &::after {\n                display: block;\n                content: '';\n                height: 0.3rem;\n                width: 0.6rem;\n                position: absolute;\n                top: 46%;\n                left: 50%;\n                transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n                border-bottom: 2px solid;\n                border-left: 2px solid;\n                box-sizing: border-box;\n                padding: 0;\n                border-color: ", ";\n            }\n        }\n\n        :focus {\n            border: 2px solid ", ";\n            box-shadow: ", ";\n        }\n    }\n"])), FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.border.divider;
}, BORDER_RADIUS_3, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
});