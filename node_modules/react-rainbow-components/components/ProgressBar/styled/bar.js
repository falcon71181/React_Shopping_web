"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getTheme = _interopRequireDefault(require("../../../styles/helpers/getTheme"));

var _templateObject;

var StyledBar = _styledComponents["default"].span.attrs(function (props) {
  var theme = (0, _getTheme["default"])(props);
  var _theme$palette = theme.palette,
      brand = _theme$palette.brand,
      success = _theme$palette.success;
  var brandMainColor = brand.main;
  var successMainColor = success.main;
  return {
    brandMainColor: brandMainColor,
    successMainColor: successMainColor
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    background: ", ";\n    height: 100%;\n    border-radius: 1rem;\n    ", ";\n"])), function (props) {
  return props.brandMainColor;
}, function (props) {
  return props.variant === 'success' && "\n            background: ".concat(props.successMainColor, ";\n        ");
});

var _default = StyledBar;
exports["default"] = _default;