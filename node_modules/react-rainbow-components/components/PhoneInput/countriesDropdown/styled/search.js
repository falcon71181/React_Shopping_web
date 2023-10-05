"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject;

var StyledSearch = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    background-color: transparent;\n    border: 0;\n    color: ", ";\n    font-size: ", ";\n    margin: 0;\n    width: 100%;\n    padding: 0;\n    line-height: 2rem;\n    height: 2rem;\n\n    :focus,\n    :active {\n        outline: 0;\n        background-color: transparent;\n        border: 0;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE);
var _default = StyledSearch;
exports["default"] = _default;