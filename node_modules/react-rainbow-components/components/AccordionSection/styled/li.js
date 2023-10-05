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

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledLi = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    list-style: none;\n    box-sizing: border-box;\n    border-radius: ", ";\n    margin-bottom: ", ";\n\n    ", ";\n\n    ", " \n"])), _borderRadius.BORDER_RADIUS_4, _margins.MARGIN_XX_SMALL, function (props) {
  return props.disabled && 'pointer-events: none;';
}, function (props) {
  return props.isExpanded && "\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.28);\n    ";
});
var _default = StyledLi;
exports["default"] = _default;