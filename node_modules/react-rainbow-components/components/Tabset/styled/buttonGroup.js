"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonGroup = _interopRequireDefault(require("../../ButtonGroup"));

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledButtonGroup = (0, _styledComponents["default"])(_ButtonGroup["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    z-index: 4;\n    padding-left: 1rem;\n\n    @media (max-width: 600px) {\n        margin-left: ", ";\n        padding-left: 0;\n    }\n"])), _margins.MARGIN_MEDIUM);
var _default = StyledButtonGroup;
exports["default"] = _default;