"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledOl = (0, _attachThemeAttrs["default"])(_styledComponents["default"].ol)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n\n    li > a {\n        text-decoration: none;\n    }\n\n    > li:last-child > a {\n        font-weight: 900;\n        color: ", ";\n        text-decoration: none;\n        pointer-events: none;\n    }\n\n    > li:last-child > button {\n        font-weight: 900;\n        color: ", ";\n        pointer-events: none;\n    }\n\n    > li:not(:first-child)::before {\n        margin: 0 10px;\n        content: '>';\n        color: ", ";\n    }\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.label;
});
var _default = StyledOl;
exports["default"] = _default;