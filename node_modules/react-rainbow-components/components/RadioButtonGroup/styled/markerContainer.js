"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var sizeMap = {
  large: '3rem',
  medium: '2.5rem',
  small: '1.8rem',
  'x-small': '1.3rem'
};

var StyledMarkerContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    line-height: ", ";\n    height: ", ";\n"])), function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
});

var _default = StyledMarkerContainer;
exports["default"] = _default;