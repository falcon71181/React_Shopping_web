"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../renderers/fontSizes");

var _templateObject;

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n\n    .task-list-item {\n        list-style: none;\n        margin-left: 0;\n    }\n\n    ", "\n\n    > div > *:first-child {\n        margin-top: 0;\n    }\n"])), _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.variant === 'inline' && "\n        display: inline;\n\n        > div {\n            display: inline;\n        }\n    ";
});
var _default = StyledContainer;
exports["default"] = _default;