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

var StyledActionCell = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    margin: auto;\n    box-sizing: border-box;\n\n    ", ";\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: ".concat(props.palette.background.main, ";\n        ");
});
var _default = StyledActionCell;
exports["default"] = _default;