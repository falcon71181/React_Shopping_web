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

var ChildrenContainerUl = (0, _attachThemeAttrs["default"])(_styledComponents["default"].ul)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 26px;\n    border-left: 1px solid ", ";\n    padding-left: 10px;\n\n    ", "\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.ariaLevelValue > 1 && "margin-left: 10px;";
});
var _default = ChildrenContainerUl;
exports["default"] = _default;