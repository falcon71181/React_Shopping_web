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

var StyledLi = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    box-sizing: border-box;\n    ", ";\n"])), function (props) {
  return props.isSelected && "\n            ::before {\n                content: \"\";\n                width: 0.25rem;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                position: absolute;\n                background-color: ".concat(props.palette.brand.main, ";\n            }\n        ");
});
var _default = StyledLi;
exports["default"] = _default;