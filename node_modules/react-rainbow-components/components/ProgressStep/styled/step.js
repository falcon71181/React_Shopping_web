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

var StyledStep = (0, _attachThemeAttrs["default"])(_styledComponents["default"].li)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    align-self: center;\n    justify-content: center;\n    box-sizing: border-box;\n    flex-grow: 1;\n    position: relative;\n\n    :not(:first-child),\n    :not(:last-child) {\n        &:before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            display: block;\n            width: 100%;\n            height: 1px;\n            border: solid 0.5px ", ";\n            margin: -0.5px 0 0;\n        }\n    }\n\n    :first-child {\n        &:before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            display: block;\n            width: 50%;\n            height: 1px;\n            border: solid 0.5px ", ";\n            margin: -0.5px 0 0;\n        }\n    }\n\n    :last-child {\n        &:before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            right: 50%;\n            display: block;\n            width: 50%;\n            height: 1px;\n            border: solid 0.5px ", ";\n            margin: -0.5px 0 0;\n        }\n    }\n    \n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
});
var _default = StyledStep;
exports["default"] = _default;