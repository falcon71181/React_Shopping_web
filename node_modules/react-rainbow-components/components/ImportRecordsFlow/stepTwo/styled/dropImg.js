"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _drop = _interopRequireDefault(require("../../icons/drop"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledDropImg = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_drop["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    pointer-events: none;\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
var _default = StyledDropImg;
exports["default"] = _default;