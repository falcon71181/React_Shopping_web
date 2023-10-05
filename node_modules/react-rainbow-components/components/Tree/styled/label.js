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

var Label = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    padding: 0;\n    font-weight: inherit;\n    font-size: 1.1em;\n    color: ", ";\n    text-align: start;\n    line-height: 2;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.isSelected && "\n        color: ".concat(props.palette.getContrastText(props.palette.brand.light), ";\n        font-weight: 900;\n    ");
});
var _default = Label;
exports["default"] = _default;