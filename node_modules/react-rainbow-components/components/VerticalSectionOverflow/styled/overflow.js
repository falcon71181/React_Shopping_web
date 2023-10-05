"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledOverflow = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    max-height: 0;\n    overflow: hidden;\n    opacity: 0;\n    transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),\n        max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    ", ";\n"])), function (props) {
  return props.isExpanded && "\n            opacity: 1;\n            transition:\n                opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),\n                max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n        ";
});

var _default = StyledOverflow;
exports["default"] = _default;