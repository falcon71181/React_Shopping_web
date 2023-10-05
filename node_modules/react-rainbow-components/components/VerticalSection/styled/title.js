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

var StyledTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h2)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    padding: 0.5rem 0.5rem 0.5rem 1.25rem;\n    line-height: 1.5rem;\n    font-size: 0.9375rem;\n    font-weight: inherit;\n    color: ", ";\n    text-transform: uppercase;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.brand.main;
});
var _default = StyledTitle;
exports["default"] = _default;