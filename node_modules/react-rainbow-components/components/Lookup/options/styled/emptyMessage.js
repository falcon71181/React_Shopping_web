"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledEmptyMessage = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: 12px;\n    width: 90%;\n    font-size: 15px;\n    color: ", ";\n    line-height: 1.7;\n\n    > span {\n        color: ", ";\n        font-family: 'Lato Black', Arial, sans-serif;\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"])), function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.text.main;
});
var _default = StyledEmptyMessage;
exports["default"] = _default;