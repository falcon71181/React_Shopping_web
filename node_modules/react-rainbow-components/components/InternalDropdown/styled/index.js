"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UlContainer = exports.Ul = exports.StyledTopHeader = exports.StyledSearchIcon = exports.StyledPrimitiveCheckbox = exports.SpinnerContainer = exports.SearchContainer = exports.MessageHighLight = exports.MessageDescription = exports.MessageContainer = exports.InputSearch = exports.Icon = exports.Dropdown = exports.Arrow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _searchIcon = _interopRequireDefault(require("../icons/searchIcon"));

var _PrimitiveCheckbox = _interopRequireDefault(require("../../PrimitiveCheckbox"));

var _header = _interopRequireDefault(require("../../Option/styled/header"));

var _borderRadiusElement = _interopRequireDefault(require("../../Structural/borderRadiusElement"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

var Dropdown = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_borderRadiusElement["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    font-size: 0.75rem;\n    background: ", ";\n    box-shadow: ", ";\n    transition: opacity 0.1s linear, visibility 0.1s linear;\n\n    &:focus,\n    &:active {\n        outline: none;\n    }\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_12;
});
exports.Dropdown = Dropdown;

var Ul = _styledComponents["default"].ul(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    overflow-y: auto;\n    ", "\n"])), function (props) {
  return props.showEmptyMessage && "\n        display: none;\n    ";
});

exports.Ul = Ul;
var Arrow = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 1rem;\n    position: absolute;\n    width: 100%;\n    z-index: 10;\n    background: ", ";\n    cursor: pointer;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        left: 50%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-color: ", ";\n        transform: rotate(135deg);\n    }\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.direction === 'up' && "\n            top: 0;\n            margin-top: 0.2rem;\n\n            &::after {\n                border-width: 0 0 0.15em 0.15em;\n                top: 40%;\n            }\n    ";
}, function (props) {
  return props.direction === 'down' && "\n            bottom: 0;\n            margin-bottom: 0.2rem;\n\n            &::after {\n                border-width: 0.15em 0.15em 0 0;\n            }\n    ";
});
exports.Arrow = Arrow;

var UlContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    padding: 1rem 0;\n"])));

exports.UlContainer = UlContainer;
var SearchContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
exports.SearchContainer = SearchContainer;
var Icon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_searchIcon["default"]))(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 14px;\n    height: 14px;\n    margin-left: 12px;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
exports.Icon = Icon;
var StyledSearchIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_searchIcon["default"]))(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 32px;\n    height: 32px;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
exports.StyledSearchIcon = StyledSearchIcon;
var InputSearch = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    background-color: transparent;\n    border: 0;\n    color: ", ";\n    caret-color: ", " ;\n    font-size: ", ";\n    margin: 0;\n    line-height: 42px;\n    height: 42px;\n    width: 85%;\n    padding: 0 0.5rem;\n\n    :focus,\n    :active {\n        outline: 0;\n        background-color: transparent;\n        border: 0;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.brand.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE);
exports.InputSearch = InputSearch;
var SpinnerContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 3.125rem 0;\n"])));
exports.SpinnerContainer = SpinnerContainer;
var MessageContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 16px;\n    "])));
exports.MessageContainer = MessageContainer;
var MessageDescription = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 14px;\n    line-height: 1.43;\n    text-align: center;\n    color: ", ";\n    margin-top: 12px;\n    word-wrap: break-word;\n"])), function (props) {
  return props.palette.text.header;
});
exports.MessageDescription = MessageDescription;
var MessageHighLight = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 14px;\n    font-weight: 900;\n    text-align: center;\n    color: ", ";\n    word-wrap: break-word;\n"])), function (props) {
  return props.palette.text.main;
});
exports.MessageHighLight = MessageHighLight;
var StyledPrimitiveCheckbox = (0, _styledComponents["default"])(_PrimitiveCheckbox["default"])(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline;\n    margin-left: 4px;\n    margin-right: 8px;\n"])));
exports.StyledPrimitiveCheckbox = StyledPrimitiveCheckbox;
var StyledTopHeader = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_header["default"]))(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n    position: sticky;\n    top: 0;\n    border-bottom: 1px solid ", ";\n    background: ", ";\n    z-index: 1;\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
});
exports.StyledTopHeader = StyledTopHeader;