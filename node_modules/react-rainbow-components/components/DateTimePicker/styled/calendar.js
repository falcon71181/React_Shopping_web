"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Calendar = _interopRequireDefault(require("../../Calendar"));

var _templateObject;

var StyledCalendar = (0, _styledComponents["default"])(_Calendar["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 340px;\n    height: 370px;\n\n    @media (max-width: 800px) {\n        height: 335px;\n    }\n"])));
var _default = StyledCalendar;
exports["default"] = _default;