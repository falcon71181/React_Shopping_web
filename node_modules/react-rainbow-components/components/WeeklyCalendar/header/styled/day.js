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

var StyledDay = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1 0 auto;\n    border-right: 1px solid ", ";\n    position: relative;\n    width: 90px;\n    min-width: 90px;\n    height: 100%;\n    color: ", ";\n    padding: 3px 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.brand.main;
});
var _default = StyledDay;
exports["default"] = _default;