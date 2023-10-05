"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledSortArrowIcon = _styledComponents["default"].svg(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-shrink: 0;\n    visibility: hidden;\n    margin-left: 12px;\n    ", ";\n    ", "\n"])), function (props) {
  return props.arrowAscendent && "\n            transform: rotate(-180deg);\n        ";
}, function (props) {
  return props.headerAlignment === 'right' && "\n        margin-left: 0;\n        margin-right: 12px;\n    ";
});

var _default = StyledSortArrowIcon;
exports["default"] = _default;