"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getTheme = _interopRequireDefault(require("../../../../styles/helpers/getTheme"));

var _templateObject;

var StyledAssignButton = _styledComponents["default"].button.attrs(function (props) {
  var brandMainColor = (0, _getTheme["default"])(props).palette.brand.main;
  return {
    brandMainColor: brandMainColor
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    background: transparent;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    font-size: 14px;\n    outline: none;\n    text-align: center;\n    text-decoration: underline;\n    vertical-align: middle;\n    white-space: normal;\n    user-select: none;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    box-sizing: border-box;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n"])), function (props) {
  return props.brandMainColor;
});

var _default = StyledAssignButton;
exports["default"] = _default;