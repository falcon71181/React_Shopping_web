"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _paddings = require("../../../styles/paddings");

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledHeaderContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: space-between;\n    padding: ", " ", " 0 ", ";\n    margin-bottom: ", ";\n"])), _paddings.PADDING_SMALL, _paddings.PADDING_MEDIUM, _paddings.PADDING_MEDIUM, _margins.MARGIN_SMALL);

var _default = StyledHeaderContainer;
exports["default"] = _default;