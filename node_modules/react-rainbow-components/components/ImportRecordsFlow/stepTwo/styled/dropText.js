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

var StyledDropText = (0, _attachThemeAttrs["default"])(_styledComponents["default"].p)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 14px;\n    font-weight: 300;\n    text-align: center;\n    color: ", ";\n    bottom: 8px;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    pointer-events: none;\n"])), function (props) {
  return props.palette.brand.main;
});
var _default = StyledDropText;
exports["default"] = _default;