"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledOptionsContainer = _styledComponents["default"].ul(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    overflow-y: auto;\n    box-sizing: border-box;\n    ", "\n    ", "\n"])), function (props) {
  return props.as === 'div' && "\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            padding: 24px 16px;\n            letter-spacing: normal;\n            text-align: center;\n    ";
}, function (props) {
  return props.as !== 'div' && "\n            margin: 0;\n            list-style: none;\n    ";
});

var _default = StyledOptionsContainer;
exports["default"] = _default;