"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject;

var StyledWeekDay = _styledComponents["default"].p(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    font-weight: 900;\n"])), _fontSizes.FONT_SIZE_TEXT_SMALL);

var _default = StyledWeekDay;
exports["default"] = _default;