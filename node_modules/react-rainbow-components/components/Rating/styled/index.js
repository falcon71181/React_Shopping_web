"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStarInput = exports.StyledStarContainer = exports.StyledLabel = exports.StyledItemsContainer = exports.StyledFieldset = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _labelText = require("../../Input/label/labelText");

var _label = _interopRequireDefault(require("../../Input/label"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var StyledFieldset = _styledComponents["default"].fieldset(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: 1.5rem;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n"])));

exports.StyledFieldset = StyledFieldset;

var StyledItemsContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    align-self: ", ";\n"])), function (props) {
  return _labelText.labelAlignmentMap[props.labelAlignment] || _labelText.labelAlignmentMap.center;
});

exports.StyledItemsContainer = StyledItemsContainer;
var StyledLabel = (0, _styledComponents["default"])(_label["default"])(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n    padding-right: 0;\n"])));
exports.StyledLabel = StyledLabel;
var StyledStarContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: inherit;\n    height: inherit;\n    color: ", ";\n\n    :not(:last-child) {\n        margin-right: 0.25rem;\n    }\n\n    display: ", ";\n    transition: transform 300ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.5);\n    }\n"])), function (props) {
  return props.palette.warning.main;
}, function (props) {
  return props.readOnly ? '' : 'inline-block';
});
exports.StyledStarContainer = StyledStarContainer;
var StyledStarInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    position: absolute;\n    opacity: 0;\n    width: 22px;\n    height: 22px;\n    cursor: pointer;\n    color: inherit;\n    font: inherit;\n    margin: 2px 0;\n    line-height: normal;\n    padding: 0;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :-ms-input-placeholder {\n        color: ", ";\n        font-weight: 400;\n        font-size: 0.8125rem;\n    }\n"])), function (props) {
  return props.palette.text.label;
});
exports.StyledStarInput = StyledStarInput;