"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSpan = exports.StyledInput = exports.StyledEditIcon = exports.StyledButtonIcon = exports.SpanContainer = exports.RelativeInputContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _ButtonIcon = _interopRequireDefault(require("../../../ButtonIcon"));

var _edit = _interopRequireDefault(require("../icons/edit"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var StyledEditIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_edit["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    flex-shrink: 0;\n    display: none;\n"])), function (props) {
  return props.palette.brand.main;
});
exports.StyledEditIcon = StyledEditIcon;
var StyledSpan = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: ", ";\n    padding: 0 10px 0 0;\n"])), function (props) {
  return props.palette.text.title;
});
exports.StyledSpan = StyledSpan;
var SpanContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between\n    align-items: center;\n    color: ", ";\n    min-height: 30px;\n    line-height: 18px;\n    max-width: 100%;\n    padding: 5px;\n    margin: auto;\n    border-radius: 0.2rem;\n    width: 100%;\n    :hover {\n        padding: 5px 5px 5px 4px;\n        border: 1px dotted ", ";\n        cursor: pointer;\n        > svg { \n            display: inline;\n        }\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.border.main;
});
exports.SpanContainer = SpanContainer;
var StyledButtonIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_ButtonIcon["default"]))(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100%;\n    top: 0;\n    position: absolute;\n    line-height: 1;\n    border: 0;\n    z-index: 2;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    right: -0.4rem;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
exports.StyledButtonIcon = StyledButtonIcon;

var RelativeInputContainer = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    width: 100%;\n"])));

exports.RelativeInputContainer = RelativeInputContainer;
var StyledInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-radius: 0.2rem;\n    background-color: ", ";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 0;\n    color: ", ";\n    border: 1px dotted ", ";\n    padding: 5px 25px 5px 4px;;\n\n    :focus{\n        outline: none;\n        caret-color: ", ";\n    }\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.title;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
});
exports.StyledInput = StyledInput;