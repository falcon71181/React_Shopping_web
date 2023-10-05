"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../styles/borderRadius");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledContent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].section)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1.57;\n    color: $color-gray-4;\n    padding-left: ", ";\n    padding-right: ", ";\n    padding-bottom: 0.875rem;\n    padding-top: 0.875rem;\n    ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-top: 0;\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n"])), _paddings.PADDING_XX_LARGE, _paddings.PADDING_MEDIUM, function (props) {
  return props.isCollapsed && 'display: none;';
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, _borderRadius.BORDER_RADIUS_4, _borderRadius.BORDER_RADIUS_4);
var _default = StyledContent;
exports["default"] = _default;