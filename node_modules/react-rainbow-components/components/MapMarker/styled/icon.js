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

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-shrink: 0;\n    background-color: ", ";\n    border-radius: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: ", ";\n    height: 2.125rem;\n    width: 2.125rem;\n"])), function (props) {
  return props.palette.background.highlight;
}, _borderRadius.BORDER_RADIUS_2, _margins.MARGIN_SMALL);
var _default = StyledIcon;
exports["default"] = _default;