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

var StyledDescription = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 10px;\n    font-weight: normal;\n    color: ", ";\n    letter-spacing: 0.5px;\n"])), function (props) {
  return props.palette.text.label;
});
var _default = StyledDescription;
exports["default"] = _default;