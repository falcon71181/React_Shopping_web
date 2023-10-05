"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledActiveIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 1.25rem;\n    height: 1.25rem;\n    border-radius: ", ";\n    border: 0.375rem solid ", ";\n    box-sizing: border-box;\n"])), _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.palette.brand.main;
});
var _default = StyledActiveIcon;
exports["default"] = _default;