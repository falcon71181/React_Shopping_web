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

var StyledNav = (0, _attachThemeAttrs["default"])(_styledComponents["default"].nav)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    position: relative;\n    box-sizing: border-box;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.compact && "\n            li > a {\n                padding: 0.5rem 1rem 0.5rem 3rem;\n            }\n        ";
}, function (props) {
  return props.shaded && "\n            li {\n                background-color: ".concat(props.palette.background.secondary, ";\n\n                :hover,\n                :active {\n                    background-color: ").concat(props.palette.action.active, ";\n                }\n            }\n        ");
});
var _default = StyledNav;
exports["default"] = _default;