"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _checkmark = _interopRequireDefault(require("../checkmark"));

var _templateObject;

var StyledCheckmarkIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_checkmark["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    width: 16px;\n    height:10px;\n    color: ", ";\n"])), function (props) {
  return props.palette.getContrastText(props.palette.brand.main);
});
var _default = StyledCheckmarkIcon;
exports["default"] = _default;