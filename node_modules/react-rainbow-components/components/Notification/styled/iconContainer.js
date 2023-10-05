"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _margins = require("../../../styles/margins");

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledIconContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: ", ";\n    flex-shrink: 0;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), _margins.MARGIN_SMALL, function (props) {
  return props.icon === 'info' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_2, ";\n            margin-right: ").concat(_margins.MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.icon === 'success' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_2, ";\n            margin-right: ").concat(_margins.MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.icon === 'error' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_2, ";\n            margin-right: ").concat(_margins.MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.error.main, ";\n        ");
}, function (props) {
  return props.icon === 'warning' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_2, ";\n            margin-right: ").concat(_margins.MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.warning.main, ";\n        ");
});
var _default = StyledIconContainer;
exports["default"] = _default;