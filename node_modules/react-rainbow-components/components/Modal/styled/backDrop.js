"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _zIndex = require("../../../styles/zIndex");

var _templateObject;

var StyledBackDrop = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    background: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    transition: opacity 0.3s linear, z-index 0.3s linear;\n\n    ", ";\n"])), function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.highlight, 0.64);
}, function (props) {
  return props.isOpen && "\n            visibility: visible;\n            z-index: ".concat(_zIndex.ZINDEX_MODAL, ";\n            opacity: 1;\n            backdrop-filter: blur(5px);\n        ");
});
var _default = StyledBackDrop;
exports["default"] = _default;