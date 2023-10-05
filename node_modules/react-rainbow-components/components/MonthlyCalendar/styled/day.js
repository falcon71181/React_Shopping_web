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

var StyledDay = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n"])), function (props) {
  return !props.disabled && "\n        :hover {\n            background: ".concat(props.palette.action.hover, ";\n        }\n    ");
}, function (props) {
  return props.isSelected && "\n        background: ".concat(props.palette.background.secondary, ";\n    ");
});
var _default = StyledDay;
exports["default"] = _default;