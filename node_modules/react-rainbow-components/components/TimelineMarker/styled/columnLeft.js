"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _templateObject;

var StyledColumnLeft = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    position: relative;\n\n    ::before {\n        content: '';\n        background-color: ", ";\n        height: 100%;\n        width: 1px;\n        position: absolute;\n        right: 50%;\n        left: 50%;\n    }\n"])), function (props) {
  return (0, _color.replaceAlpha)((0, _color.getContrastText)(props.palette.background.main), 0.1);
});
var _default = StyledColumnLeft;
exports["default"] = _default;