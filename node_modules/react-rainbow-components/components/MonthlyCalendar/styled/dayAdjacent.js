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

var StyledDayAdjacent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    color: ", ";\n    text-align: right;\n    font-size: ", ";\n    font-weight: 400;\n    padding: 7px 7px 0 0;\n    cursor: not-allowed;\n    user-select: none;\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n"])), function (props) {
  return props.palette.text.disabled;
}, _fontSizes.FONT_SIZE_TEXT_LARGE);
var _default = StyledDayAdjacent;
exports["default"] = _default;