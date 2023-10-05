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

var StyledFileCardDescription = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h2)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 14px;\n    line-height: 1.2;\n    color: ", ";\n    margin: 8px 0 0 0;\n    padding: 0;\n    font-weight: inherit;\n"])), function (props) {
  return props.palette.text.label;
});
var _default = StyledFileCardDescription;
exports["default"] = _default;