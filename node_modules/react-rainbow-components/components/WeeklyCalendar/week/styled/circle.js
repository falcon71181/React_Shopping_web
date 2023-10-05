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

var StyledCircle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-block;\n    position: absolute;\n    top: -4px;\n    background-color: ", ";\n    border-radius: 50%;\n    content: \"\";\n    height: 10px;\n    width: 10px;\n"])), function (props) {
  return props.palette.error.main;
});
var _default = StyledCircle;
exports["default"] = _default;