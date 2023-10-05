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

var StyledPreviewText = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-size: 14px;\n    margin: 16px 0 8px 0;\n    padding: 0;\n\n    b {\n        font-family: 'Lato Black', sans-serif;\n        font-weight: bold;\n        font-weight: 700;\n    }\n"])), function (props) {
  return props.palette.text.title;
});
var _default = StyledPreviewText;
exports["default"] = _default;