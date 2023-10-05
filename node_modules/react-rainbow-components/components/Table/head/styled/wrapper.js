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

var StyledWrapper = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    outline: none;\n    position: absolute;\n    top: 0;\n    height: 44px;\n    background-color: ", ";\n    box-sizing: border-box;\n\n    ", ";\n"])), function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n        ";
});
var _default = StyledWrapper;
exports["default"] = _default;