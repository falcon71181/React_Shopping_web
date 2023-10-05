"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _paddings = require("../../../styles/paddings");

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledFooter = (0, _attachThemeAttrs["default"])(_styledComponents["default"].footer)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    font-weight: normal;\n    color: inherit;\n    text-align: center;\n    border-top: 0.0625rem solid ", ";\n    padding: ", " ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.border.divider;
}, _paddings.PADDING_SMALL, _paddings.PADDING_MEDIUM);
var _default = StyledFooter;
exports["default"] = _default;