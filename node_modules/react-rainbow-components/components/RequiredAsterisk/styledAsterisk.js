"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledAsterisk = (0, _attachThemeAttrs["default"])(_styledComponents["default"].abbr)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-decoration: none;\n    cursor: help;\n    border: 0;\n    color: ", ";\n    margin: 0 0.125rem;\n    box-sizing: border-box;\n\n    &[title] {\n        border: 0;\n        text-decoration: none;\n        cursor: help;\n    }\n"])), function (props) {
  return props.palette.error.main;
});
var _default = StyledAsterisk;
exports["default"] = _default;