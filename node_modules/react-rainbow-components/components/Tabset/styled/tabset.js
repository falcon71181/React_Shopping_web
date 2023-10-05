"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledTabset = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: flex-start;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 ", ";\n\n    @media (max-width: 600px) {\n        padding: 0;\n    }\n\n    ", ";\n"])), _paddings.PADDING_SMALL, function (props) {
  return props.variant === 'line' && "\n            padding: 0;\n        ";
});

var _default = StyledTabset;
exports["default"] = _default;