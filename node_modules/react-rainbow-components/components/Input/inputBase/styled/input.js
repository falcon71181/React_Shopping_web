"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _input = _interopRequireDefault(require("../../styled/input"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../../styles/borderRadius");

var _templateObject;

var hasLeftIcon = function hasLeftIcon(props) {
  return props.icon && props.iconPosition === 'left';
};

var hasRightIcon = function hasRightIcon(props) {
  return props.icon && props.iconPosition === 'right';
};

var StyledInput = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_input["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n    ", "\n    ", ";\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return !props.disabled && "\n        &[readonly] {\n            padding-left: 0;\n            padding-right: 0;\n            background-color: transparent;\n            border: 2px transparent solid;\n            color: ".concat(props.palette.text.main, ";\n            font-weight: 400;\n            cursor: text;\n            box-sizing: border-box;\n    \n            &:focus,\n            &:active {\n                box-shadow: none;\n                background-color: transparent;\n                border: 2px transparent solid;\n            }\n        }\n    ");
}, function (props) {
  return props.error && "\n        &[readonly] {\n            &:focus,\n            &:active {\n                padding: 0;\n\n                ".concat(hasLeftIcon(props) && "\n                    padding-left: 1.75rem;\n                    padding-right: 0;\n                ", "\n                ").concat(hasRightIcon(props) && "\n                    padding-left: 0;\n                    padding-right: 1.75rem;\n                ", "\n            }\n        }\n    ");
}, function (props) {
  return hasLeftIcon(props) && "\n        &[readonly] {\n            padding-left: 1.75rem;\n            padding-right: 0;\n        }\n    ";
}, function (props) {
  return hasRightIcon(props) && "\n        &[readonly] {\n            padding-left: 0;\n            padding-right: 1.75rem;\n        }\n    ";
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
var _default = StyledInput;
exports["default"] = _default;