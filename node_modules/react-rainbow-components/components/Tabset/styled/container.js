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

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    width: 100%;\n    box-sizing: border-box;\n\n    @media (max-width: 600px) {\n        background-color: ", ";\n\n        &::before {\n            content: \"\";\n            height: 1px;\n            width: 100%;\n            left: 0;\n            bottom: 0px;\n            position: absolute;\n            background-color: ", ";\n        }\n    }\n\n    ", ";\n"])), function (props) {
  return props.variant === 'card' ? props.palette.background.main : 'transparent';
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.variant === 'line' && "\n            &::before {\n                content: \"\";\n                height: 1px;\n                width: 100%;\n                left: 0;\n                bottom: 0px;\n                position: absolute;\n                background-color: ".concat(props.palette.border.divider, ";\n            }\n        ");
});
var _default = StyledContainer;
exports["default"] = _default;