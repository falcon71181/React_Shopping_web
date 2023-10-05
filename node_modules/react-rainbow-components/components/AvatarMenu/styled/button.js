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

var StyledButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    outline: none;\n    border-radius: ", ";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    cursor: pointer;\n    color: inherit;\n    font: inherit;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    width: 100%;\n    height: 100%;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    :active {\n        transform: scale(0.97);\n        transition: all 0.2s ease;\n    }\n\n    :hover {\n        box-shadow: ", ";\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        cursor: pointer;\n    }\n\n    :hover span,\n    :hover abbr {\n        cursor: pointer;\n    }\n\n    &[disabled] {\n        cursor: default;\n    }\n"])), _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.shadows.shadow_7;
}, function (props) {
  return props.shadows.shadow_7;
});
var _default = StyledButton;
exports["default"] = _default;