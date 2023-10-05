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

var StyledImagesUl = (0, _attachThemeAttrs["default"])(_styledComponents["default"].ul)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    border-radius: ", ";\n    border: 1px solid ", ";\n    box-shadow: ", ";\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n\n    :active,\n    :focus {\n        color: inherit;\n        text-decoration: inherit;\n        box-shadow: 0 0 1px ", ";\n        outline: none;\n    }\n"])), _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.palette.brand.main;
});
var _default = StyledImagesUl;
exports["default"] = _default;