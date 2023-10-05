"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabel = exports.StyledInput = exports.StyledContainer = exports.StyledColors = exports.StyledColor = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _hiddenElement = _interopRequireDefault(require("../../../Structural/hiddenElement"));

var _styled = require("../styled");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 0 auto;\n    padding: 0.5rem 0 0.25rem;\n"])));

exports.StyledContainer = StyledContainer;

var StyledColors = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n"])));

exports.StyledColors = StyledColors;

var StyledColor = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: inherit;\n    height: inherit;\n"])));

exports.StyledColor = StyledColor;
var StyledInput = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_hiddenElement["default"]))(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    &:focus + label {\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
});
exports.StyledInput = StyledInput;
var StyledLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].label)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-block;\n    margin: 0 0.45rem;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    ", "\n\n    &:hover {\n        cursor: pointer;\n    }\n"])), _styled.CssCircleColor);
exports.StyledLabel = StyledLabel;