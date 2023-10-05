"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledCheckboxWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    align-items: center;\n    display: flex;\n    padding: 10px 15px;\n    border: 1px solid transparent;\n    ", "\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n        padding: 10px 10px;\n    ";
});

var _default = StyledCheckboxWrapper;
exports["default"] = _default;