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

var StyledHours = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: none;\n    color: ", ";\n    height: auto;\n    padding: 0;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    min-width: 65px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n"])), function (props) {
  return props.palette.text.main;
});
var _default = StyledHours;
exports["default"] = _default;