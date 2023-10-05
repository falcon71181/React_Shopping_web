"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledInnerContainer = _styledComponents["default"].ul(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: flex-start;\n    width: 100%;\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    ", ";\n"])), function (props) {
  return props.fullWidth && "\n            justify-content: space-between;\n        ";
});

var _default = StyledInnerContainer;
exports["default"] = _default;