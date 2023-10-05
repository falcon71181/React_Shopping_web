"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStepItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var getBackgroundgColor = function getBackgroundgColor(props) {
  if (props.hasError) return props.palette.error.main;
  return props.palette.brand.main;
};

var StyledStepItem = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-block;\n    flex: 1;\n    min-width: 12px;\n    max-width: max-content;\n    align-items: center;\n    position: relative;\n    margin-left: -2.5rem;\n    box-sizing: border-box;\n    height: 2.5rem;\n    padding-left: 3.5rem;\n    padding-right: 2.5rem;\n    border: none;\n    background: ", ";\n    color: ", ";\n    border-radius: 20px;\n    border-right: 2px solid ", ";\n    z-index: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    font-weight: 400;\n    transition: all 0.3s linear;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden\n\n    ::-moz-focus-inner,\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:hover {\n        background: ", ";\n        color: ", ";\n        border-right: 2px solid ", ";\n        box-shadow: ", ";\n    }\n\n    &:focus,\n    &:active {\n        outline: 0;\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n    \n    ", ";\n\n    & > svg {\n        position: absolute;\n        top: 0.6rem;\n        right: 0.5rem;\n        width: 1.25rem;\n        height: 1.25rem;\n        box-sizing: border-box;\n    }\n\n    &:first-child {\n        margin-left: 0;\n        padding-left: 1.5rem;\n    }\n\n    &:last-child {\n        border-right: none;\n    }\n"])), function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.zIndex;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return getBackgroundgColor(props);
}, function (props) {
  return props.palette.getContrastText(getBackgroundgColor(props));
}, function (props) {
  return getBackgroundgColor(props);
}, function (props) {
  return props.shadows.shadow_10;
}, function (props) {
  return props.hasError && "\n        border-right: 2px solid ".concat(props.palette.background.main, ";\n        color: ").concat(props.palette.error.main, ";\n        ");
}, function (props) {
  return props.isSelected && "\n        background: ".concat(getBackgroundgColor(props), ";\n        color: ").concat(props.palette.getContrastText(getBackgroundgColor(props)), ";\n        border-right: 2px solid ").concat(getBackgroundgColor(props), ";\n        box-shadow: ").concat(props.shadows.shadow_10, ";\n        ");
}, function (props) {
  return props.isChecked && "\n        background: ".concat(props.palette.background.main, ";\n        border-right: 2px solid ").concat(props.palette.background.main, ";\n        color: ").concat(props.palette.brand.main, ";\n        box-shadow: ").concat(props.shadows.shadow_11, ";\n        ");
}, function (props) {
  return props.isChecked && props.hasError && "\n        background: ".concat(props.palette.background.main, ";\n        border-right: 2px solid ").concat(props.palette.background.main, ";\n        color: ").concat(props.palette.error.main, ";\n        box-shadow: ").concat(props.shadows.shadow_11, ";\n        ");
});
exports.StyledStepItem = StyledStepItem;