"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../../Button"));

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledBackButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: ", ";\n"])), _margins.MARGIN_XX_LARGE);
var _default = StyledBackButton;
exports["default"] = _default;