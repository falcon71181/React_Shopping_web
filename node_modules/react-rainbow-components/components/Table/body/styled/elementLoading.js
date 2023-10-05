"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../../styles/helpers/color");

var _templateObject;

var StyledElementLoading = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 10px;\n    object-fit: contain;\n    border-radius: 24px;\n    z-index: 1;\n    background: ", "\n        linear-gradient(\n            90deg,\n            ", " 0%,\n            ", " 50%,\n            ", " 100%\n        );\n    background-size: 400% 400%;\n    animation: gradient 2.5s ease-in-out infinite;\n    filter: invert(3%); \n    \n    @keyframes gradient {\n        0% {\n            background-position: 14% 0;\n        }\n\n        50% {\n            background-position: 87% 100%;\n        }\n\n        100% {\n            background-position: 14% 0;\n        }\n    }\n"])), function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.secondary, 0.5);
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.01);
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.7);
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.01);
});
var _default = StyledElementLoading;
exports["default"] = _default;