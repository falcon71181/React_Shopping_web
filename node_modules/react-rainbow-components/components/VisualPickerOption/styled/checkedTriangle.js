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

var StyledCheckedTriangle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    border: 1.5rem solid transparent;\n    border-radius: 0 20px 0 0;\n    border-right-color: ", ";\n    border-top-color: ", ";\n    margin: 0;\n    padding: 0;\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
});
var _default = StyledCheckedTriangle;
exports["default"] = _default;