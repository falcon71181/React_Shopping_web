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

var StyledDayContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].td)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    min-width: 120px;\n    height: 100px;\n    padding: 0;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
var _default = StyledDayContainer;
exports["default"] = _default;