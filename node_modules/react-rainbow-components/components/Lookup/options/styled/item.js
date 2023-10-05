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

var StyledItem = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    align-items: center;\n    display: flex;\n    height: 48px;\n    padding: 0 1.15rem 0 1.15rem;\n    position: relative;\n    white-space: nowrap;\n    cursor: pointer;\n    ", "\n"])), function (props) {
  return props.isActive && "\n            background-color: ".concat(props.palette.action.active, ";\n    ");
});
var _default = StyledItem;
exports["default"] = _default;