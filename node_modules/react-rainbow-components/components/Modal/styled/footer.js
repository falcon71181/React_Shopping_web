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

var StyledFooter = (0, _attachThemeAttrs["default"])(_styledComponents["default"].footer)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-top: 0.0625px solid ", ";\n    padding: 0.75rem 1rem;\n    flex-shrink: 0;\n    display: block;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.border.divider;
});
var _default = StyledFooter;
exports["default"] = _default;