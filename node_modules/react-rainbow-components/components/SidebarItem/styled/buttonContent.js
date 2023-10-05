"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledButtonContent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: none;\n    border-radius: 12px;\n    outline: 0;\n    padding: 0.5rem 0;\n    background-color: transparent;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    flex-direction: column;\n    box-sizing: border-box;\n    color: inherit;\n    font: inherit;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :hover,\n    :active,\n    :focus {\n        background-color: ", ";\n        outline: 0;\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.isSelected && "\n            background-color: ".concat(props.palette.action.active, ";\n            outline: 0;\n        ");
});
var _default = StyledButtonContent;
exports["default"] = _default;