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

var StyledThead = (0, _attachThemeAttrs["default"])(_styledComponents["default"].thead)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", ";\n"])), function (props) {
  return props.theme.hideTableHeader && "\n        visibility: hidden;\n    ";
});
var _default = StyledThead;
exports["default"] = _default;