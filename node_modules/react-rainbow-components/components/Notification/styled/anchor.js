"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledAnchor = _styledComponents["default"].a(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: transparent;\n    text-decoration: none;\n    transition: color 0.1s linear;\n    cursor: pointer;\n    display: flex;\n\n    :hover,\n    :focus {\n        text-decoration: none;\n    }\n\n    :active,\n    :hover {\n        outline: 0;\n    }\n"])));

var _default = StyledAnchor;
exports["default"] = _default;