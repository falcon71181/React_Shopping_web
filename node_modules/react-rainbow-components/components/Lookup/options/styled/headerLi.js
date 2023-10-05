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

var StyledHeaderLi = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    font-size: 14px;\n    font-weight: normal;\n    height: 48px;\n    padding: 0 1rem 0 1rem;\n    text-transform: uppercase;\n"])), function (props) {
  return props.palette.text.header;
});
var _default = StyledHeaderLi;
exports["default"] = _default;