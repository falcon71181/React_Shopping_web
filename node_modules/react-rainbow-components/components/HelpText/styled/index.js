"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltip = exports.StyledTitle = exports.StyledText = exports.StyledIconContainer = exports.StyledButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _getIconSize = _interopRequireDefault(require("../helpers/getIconSize"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var StyledButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: none;\n    background: transparent;\n    height: ", "px;\n    width: ", "px;\n    line-height: 0;\n    padding: 0;\n    border-radius: 1rem;\n\n    &:focus,\n    &:active {\n        outline: 0;\n\n        ", ";\n\n        ", ";\n\n        ", ";\n    }\n"])), function (props) {
  return (0, _getIconSize["default"])(props.iconSize);
}, function (props) {
  return (0, _getIconSize["default"])(props.iconSize);
}, function (props) {
  return props.variant === 'info' && "\n                box-shadow: ".concat(props.shadows.brand, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n                box-shadow: ".concat(props.shadows.error, ";\n        ");
}, function (props) {
  return props.variant === 'question' && "\n                box-shadow: ".concat(props.shadows.shadow_10, ";\n        ");
});
exports.StyledButton = StyledButton;
var StyledTooltip = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 10px;\n    border-radius: 0.875rem;\n    box-shadow: ", ";\n    border: solid 1px ", ";\n    background-color: ", ";\n    min-width: 60px;\n    max-width: 400px;\n"])), function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
});
exports.StyledTooltip = StyledTooltip;
var StyledTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div).attrs(function (props) {
  var palette = props.palette,
      variant = props.variant;
  var variantColorMap = {
    info: palette.text.header,
    error: palette.error.main,
    warning: palette.warning.main,
    question: palette.text.header
  };
  var variantColor = variantColorMap[variant] || variantColorMap.info;
  return {
    variantColor: variantColor
  };
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    font-size: 1rem;\n    line-height: 1.3rem;\n    margin-bottom: 5px;\n    color: ", ";\n    align-items: center;\n"])), function (props) {
  return props.variantColor;
});
exports.StyledTitle = StyledTitle;

var StyledIconContainer = _styledComponents["default"].span(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: 8px;\n"])));

exports.StyledIconContainer = StyledIconContainer;
var StyledText = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 0.8125rem;\n    line-height: 1.42;\n    color: ", "\n"])), function (props) {
  return props.palette.text.main;
});
exports.StyledText = StyledText;