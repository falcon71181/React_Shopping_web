"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    display: flex;\n    align-items: center;\n    padding: 0.5rem;\n    width: 100%;\n    font-size: inherit;\n    color: inherit;\n    line-height: inherit;\n    background: transparent;\n    border: 0;\n    text-align: inherit;\n    border-radius: ", ";\n    cursor: pointer;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:focus {\n        outline: none;\n        background-color: ", ";\n    }\n\n    &[aria-pressed='true'] {\n        background-color: ", ";\n    }\n\n    & * {\n        pointer-events: none;\n    }\n"])), _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.palette.action.active;
});
var _default = StyledButton;
exports["default"] = _default;