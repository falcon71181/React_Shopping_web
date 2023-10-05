"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledEnumerable = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    text-align: center;\n    color: ", ";\n\n    ", "\n\n    &::after {\n        content: counter(rowCounter);\n    }\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.theme.variant === 'listview' && "\n        color: ".concat(props.palette.text.main, ";\n    ");
});
var _default = StyledEnumerable;
exports["default"] = _default;