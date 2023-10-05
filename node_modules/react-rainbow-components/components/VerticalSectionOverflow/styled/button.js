"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var StyledButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: 0;\n    display: flex;\n    padding: 1rem 1rem 1rem 1.25rem;\n    border-radius: 0;\n    color: ", ";\n    font-size: ", ";\n    background-clip: border-box;\n    background-color: transparent;\n    text-decoration: none;\n    width: 100%;\n    cursor: pointer;\n    white-space: normal;\n    user-select: none;\n    appearance: none;\n    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    box-sizing: border-box;\n\n    :focus {\n        outline: 0;\n        background-color: ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.text.label;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.isExpanded && props.description && "\n            padding-bottom: 0;\n        ";
});
var _default = StyledButton;
exports["default"] = _default;