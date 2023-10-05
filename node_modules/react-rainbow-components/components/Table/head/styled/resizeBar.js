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

var StyledResizeBar = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: transparent;\n    border-radius: 100px;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 3px;\n    z-index: 1000;\n    cursor: col-resize;\n\n    :hover {\n        background-color: ", " !important;\n\n        & span {\n            background-color: ", ";\n        }\n    }\n\n    :active {\n        background-color: ", " !important;\n\n        & span {\n            background-color: ", ";\n        }\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.brand.dark;
});
var _default = StyledResizeBar;
exports["default"] = _default;