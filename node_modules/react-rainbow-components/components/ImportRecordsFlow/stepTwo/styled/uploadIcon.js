"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _upload = _interopRequireDefault(require("../../icons/upload"));

var _getTheme = _interopRequireDefault(require("../../../../styles/helpers/getTheme"));

var _templateObject;

var StyledUploadIcon = (0, _styledComponents["default"])(_upload["default"]).attrs(function (props) {
  var theme = (0, _getTheme["default"])(props);
  var _theme$palette = theme.palette,
      getContrastText = _theme$palette.getContrastText,
      brand = _theme$palette.brand;
  var brandMainColor = brand.main;
  var brandMainContrastText = getContrastText(brandMainColor);
  return {
    brandMainContrastText: brandMainContrastText
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    fill: ", ";\n    color: ", ";\n    margin-right: 12px;\n"])), function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.brandMainContrastText;
});
var _default = StyledUploadIcon;
exports["default"] = _default;