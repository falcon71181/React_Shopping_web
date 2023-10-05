"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _label = _interopRequireDefault(require("../../Input/label"));

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledLabel = (0, _styledComponents["default"])(_label["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: ", ";\n"])), _paddings.PADDING_XX_SMALL);
var _default = StyledLabel;
exports["default"] = _default;