"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableRow = exports.StyledTableHeadindCell = exports.StyledTableCell = exports.StyledTable = exports.StyledPre = exports.StyledParagraph = exports.StyledOrderedList = exports.StyledListItem = exports.StyledList = exports.StyledLink = exports.StyledInlinePre = exports.StyledInlineParagraph = exports.StyledInlineHeading = exports.StyledInlineCode = exports.StyledInlineBlockquote = exports.StyledHeading = exports.StyledHR = exports.StyledCode = exports.StyledBlockquote = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("./fontSizes");

var _borderRadius = require("../../../styles/borderRadius");

var _color = require("../../../styles/helpers/color");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

var fontSizesMap = {
  1: _fontSizes.FONT_SIZE_HEADING_X_LARGE,
  2: _fontSizes.FONT_SIZE_HEADING_LARGE,
  3: _fontSizes.FONT_SIZE_HEADING_MEDIUM,
  4: _fontSizes.FONT_SIZE_HEADING_SMALL,
  5: _fontSizes.FONT_SIZE_HEADING_X_SMALL,
  6: _fontSizes.FONT_SIZE_HEADING_XX_SMALL
};
var StyledHeading = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    margin-top: 1.25rem;\n    margin-bottom: 0.75rem;\n\n    b, strong {\n        font-family: 'Lato Bold', Arial, Helvetica, sans-serif;\n    }\n"])), function (props) {
  return fontSizesMap[props.level] || _fontSizes.FONT_SIZE_HEADING_XX_SMALL;
});
exports.StyledHeading = StyledHeading;
var StyledInlineHeading = (0, _styledComponents["default"])(StyledHeading)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    display: inline;\n"])));
exports.StyledInlineHeading = StyledInlineHeading;
var StyledParagraph = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 1rem;\n\n    b, strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n\n    code {\n        display: inline-block;\n        margin-bottom: -4px;\n        padding: 0 0.3rem;\n        line-height: 1.3;\n        font-size: 1rem;\n    }\n"])));
exports.StyledParagraph = StyledParagraph;
var StyledInlineParagraph = (0, _styledComponents["default"])(StyledParagraph)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    display: inline;\n\n    code {\n        display: inline;\n        margin: 0;\n    }\n"])));
exports.StyledInlineParagraph = StyledInlineParagraph;
var StyledLink = (0, _attachThemeAttrs["default"])(_styledComponents["default"].a)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    text-decoration: underline;\n\n    :hover {\n        color: ", ";\n    }\n\n    > p {\n        margin-bottom: 0;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.main;
});
exports.StyledLink = StyledLink;
var StyledPre = (0, _attachThemeAttrs["default"])(_styledComponents["default"].pre.attrs({
  className: 'hljs'
}))(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    font-size: ", ";\n    border-radius: 4px;\n    border: 1px solid ", ";\n    padding: 2px;\n    overflow-x: auto;\n    margin-bottom: 1rem;\n\n    && > code {\n        display: block;\n        background: inherit;\n        color: inherit;\n    }\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.border.divider;
});
exports.StyledPre = StyledPre;
var StyledInlinePre = (0, _styledComponents["default"])(StyledPre)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline;\n\n    > code {\n        display: inline-block;\n        padding: 0.2rem;\n    }\n"])));
exports.StyledInlinePre = StyledInlinePre;
var StyledCode = (0, _attachThemeAttrs["default"])(_styledComponents["default"].code.attrs({
  className: 'hljs'
}))(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["    \n    font-size: ", ";\n    border-radius: 4px;\n    padding: 1px;\n    overflow-x: auto;\n    \n    &.hljs {\n        background: ", ";\n        color: ", ";\n    }\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return (0, _color.getContrastText)(props.palette.background.highlight);
});
exports.StyledCode = StyledCode;
var StyledInlineCode = (0, _styledComponents["default"])(StyledCode)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0;\n    display: inline;\n"])));
exports.StyledInlineCode = StyledInlineCode;
var StyledHR = (0, _attachThemeAttrs["default"])(_styledComponents["default"].hr)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 1rem auto;\n    background: ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
exports.StyledHR = StyledHR;
var StyledBlockquote = (0, _attachThemeAttrs["default"])(_styledComponents["default"].blockquote)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;    \n    display: block;\n    margin: 0;\n    padding: 1em 1rem 1rem 1.5rem;\n    background-color: ", ";\n    border-radius: 6px;\n    margin-bottom: 1rem;\n\n    b, strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n\n    > p {\n        margin-bottom: 0;\n        color: ", ";\n    }\n    \n    :before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: ", ";\n        content: '';\n        width: 4px;\n        height: 100%;\n        border-radius: 4px 0 0 4px;\n    }\n"])), function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.border.disabled;
});
exports.StyledBlockquote = StyledBlockquote;
var StyledInlineBlockquote = (0, _styledComponents["default"])(StyledBlockquote)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0.2rem 0.2rem 0.2rem 1rem;\n    margin-bottom: 0;\n    display: inline-block;\n"])));
exports.StyledInlineBlockquote = StyledInlineBlockquote;
var StyledTable = (0, _attachThemeAttrs["default"])(_styledComponents["default"].table)(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n    table-layout: fixed;\n    border-collapse: separate;\n    background-color: ", ";\n    border-spacing: 0;\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    margin-bottom: 1rem;\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
});
exports.StyledTable = StyledTable;
var StyledTableRow = (0, _attachThemeAttrs["default"])(_styledComponents["default"].tr)(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n    box-shadow: 0 1px 0 0 ", ";\n    transition: all 250ms cubic-bezier(0.4,0,0.2,1) 0ms;\n    box-sizing: border-box;\n    counter-increment: rowCounter;\n"])), function (props) {
  return props.palette.border.divider;
});
exports.StyledTableRow = StyledTableRow;
var StyledTableHeadindCell = (0, _attachThemeAttrs["default"])(_styledComponents["default"].td)(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    text-align: ", ";\n    border: 1px solid transparent;\n    box-sizing: border-box;\n    white-space: nowrap;\n    padding: 0 18px;\n    font-weight: 900;\n    color: ", ";\n    line-height: normal;\n    position: static;\n    border-top: 0;\n    outline: none;\n    height: 44px;\n"])), _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.align;
}, function (props) {
  return props.palette.text.title;
});
exports.StyledTableHeadindCell = StyledTableHeadindCell;
var StyledTableCell = (0, _attachThemeAttrs["default"])(_styledComponents["default"].td)(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    text-align: ", ";\n    border: 1px solid transparent;\n    box-sizing: border-box;\n    white-space: nowrap;\n    padding: 0 18px;\n    color: ", ";\n    min-height: 42px;\n    line-height: 40px;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 400;\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.align;
}, function (props) {
  return props.palette.text.label;
});
exports.StyledTableCell = StyledTableCell;

var StyledList = _styledComponents["default"].ul(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2["default"])(["\n    list-style: disc;\n    margin-left: 8px;\n    margin-bottom: 1rem;\n\n    b,\n    strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n\n    ul {\n        list-style: circle;\n        margin-left: 8px;\n    }\n"])));

exports.StyledList = StyledList;

var StyledOrderedList = _styledComponents["default"].ol(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2["default"])(["\n    list-style: decimal;\n    margin-left: 8px;\n    margin-bottom: 1rem;\n\n    b,\n    strong {\n        font-family: 'Lato Black', Arial, Helvetica, sans-serif;\n    }\n"])));

exports.StyledOrderedList = StyledOrderedList;
var StyledListItem = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject19 || (_templateObject19 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 2rem;\n    margin-bottom: 4px;\n    font-size: ", ";\n\n    code {\n        display: inline-block;\n        margin-bottom: -4px;\n        padding: 0 0.3rem;\n        line-height: 1.3;\n        font-size: 1rem;\n    }\n\n    input[type='checkbox'] {\n        width: 18px;\n        height: 18px;\n        display: inline-block;\n        position: relative;\n        vertical-align: middle;\n        border: 1px solid ", ";\n        border-radius: ", ";\n        background-color: ", ";\n        margin-right: 6px;\n        transition: border 0.1s linear, background-color 0.1s linear;\n        box-sizing: border-box;\n        appearance: none;\n\n        :checked {\n            border: 2px solid ", ";\n\n            &::after {\n                display: block;\n                content: '';\n                height: 0.3rem;\n                width: 0.6rem;\n                position: absolute;\n                top: 46%;\n                left: 50%;\n                transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n                border-bottom: 2px solid;\n                border-left: 2px solid;\n                box-sizing: border-box;\n                padding: 0;\n                border-color: ", ";\n            }\n        }\n\n        :focus {\n            border: 2px solid ", ";\n            box-shadow: ", ";\n        }\n    }\n"])), _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.border.divider;
}, _borderRadius.BORDER_RADIUS_3, function (props) {
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
exports.StyledListItem = StyledListItem;