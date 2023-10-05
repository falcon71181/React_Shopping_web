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

var StyledMapContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    align-self: center;\n    border: solid 1px ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    height: 99%;\n    width: 99%;\n"])), function (props) {
  return props.palette.border.divider;
}, _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.shadows.shadow_4;
});
var _default = StyledMapContainer;
exports["default"] = _default;