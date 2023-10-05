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

var StyledFileCardTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 18px;\n    font-weight: 800;\n    line-height: 1.2;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0;\n    padding: 0;\n"])), function (props) {
  return props.palette.text.main;
});
var _default = StyledFileCardTitle;
exports["default"] = _default;