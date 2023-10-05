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

var StyledTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-family: 'Lato Light', Arial, sans-serif;\n    padding: 0;\n    text-align: center;\n    font-size: 1.5rem;\n    color: ", ";\n    margin: 0;\n    font-weight: inherit;\n"])), function (props) {
  return props.palette.text.title;
});
var _default = StyledTitle;
exports["default"] = _default;