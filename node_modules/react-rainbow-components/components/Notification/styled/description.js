"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledDescription = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    font-size: ", ";\n    font-weight: 300;\n    color: ", ";\n    padding: ", " 0 0 0;\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.label;
}, _paddings.PADDING_XX_SMALL);
var _default = StyledDescription;
exports["default"] = _default;