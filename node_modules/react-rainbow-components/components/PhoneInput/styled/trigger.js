"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _borderRadius = require("../../../styles/borderRadius");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledTrigger = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 0 auto;\n    padding-left: 4px;\n    padding-right: 0;\n    border: none;\n    background: transparent;\n    line-height: 1.5rem;\n    color: ", ";\n    font-weight: 300;\n    font-size: ", ";\n    border-radius: ", " 0 0 ", ";\n\n    :hover,\n    :focus,\n    :active{\n        text-decoration: none;\n        outline: 0;\n        background-color: ", ";\n    }\n\n    &[disabled] {\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n        &:active {\n            background-color: transparent;\n        }\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.text.header;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, _borderRadius.BORDER_RADIUS_2, _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.disabled && "\n        color: ".concat(props.palette.text.disabled, ";\n    ");
});
var _default = StyledTrigger;
exports["default"] = _default;