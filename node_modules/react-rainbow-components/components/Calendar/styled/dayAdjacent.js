"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledDayAdjacent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-block;\n    background-color: transparent;\n    color: ", ";\n    text-align: center;\n    font-size: ", ";\n    font-weight: 400;\n    line-height: 38px;\n    height: 38px;\n    width: 38px;\n    margin: 6px auto;\n    cursor: not-allowed;\n    user-select: none;\n    border-radius: 48px;\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n\n    &:focus,\n    &:active,\n    &:focus-visible {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n        line-height: 36px;\n        outline: none;\n    }\n"])), function (props) {
  return props.palette.text.disabled;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  return props.palette.border.disabled;
});
var _default = StyledDayAdjacent;
exports["default"] = _default;