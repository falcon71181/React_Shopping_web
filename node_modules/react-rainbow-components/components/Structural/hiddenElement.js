"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var HiddenElement = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute !important;\n    margin: -1px !important;\n    border: 0 !important;\n    padding: 0 !important;\n    width: 1px !important;\n    height: 1px !important;\n    overflow: hidden !important;\n    clip: rect(0 0 0 0) !important;\n    text-transform: none !important;\n    white-space: nowrap !important;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.as === 'input' && "\n            box-sizing: border-box;\n        ";
}, function (props) {
  return props.as === 'label' && "\n            box-sizing: border-box;\n        ";
});

var _default = HiddenElement;
exports["default"] = _default;