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

var StyledInnerContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-block;\n\n    [type='checkbox'] {\n        width: 1px;\n        height: 1px;\n        border: 0;\n        clip: rect(0 0 0 0);\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n    }\n\n    [type='checkbox']:checked + .rainbow-table-input-checkbox_faux::after,\n    [type='checkbox']:checked ~ .rainbow-table-input-checkbox_faux::after,\n    [type='checkbox']:checked + label .rainbow-table-input-checkbox_faux::after {\n        display: block;\n        content: '';\n        height: 0.4rem;\n        width: 0.65rem;\n        position: absolute;\n        top: 46%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n        border-bottom: 2px solid ", ";\n        border-left: 2px solid ", ";\n    }\n\n    [type='checkbox']:checked + .rainbow-table-input-checkbox_faux,\n    [type='checkbox']:checked ~ .rainbow-table-input-checkbox_faux,\n    [type='checkbox']:checked + label .rainbow-table-input-checkbox_faux {\n        border: 2px solid ", ";\n    }\n\n    [type='checkbox']:focus + .rainbow-table-input-checkbox_faux,\n    [type='checkbox']:focus ~ .rainbow-table-input-checkbox_faux,\n    [type='checkbox']:focus + label .rainbow-table-input-checkbox_faux {\n        content: '';\n        border: 2px solid ", ";\n        box-shadow: ", ";\n    }\n\n    [type='checkbox']:focus:checked > .rainbow-table-input-checkbox_faux,\n    [type='checkbox']:focus:checked ~ .rainbow-table-input-checkbox_faux,\n    [type='checkbox']:focus:checked + label .rainbow-table-input-checkbox_faux {\n        border-color: ", ";\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n\n    [type='checkbox'][disabled] + .rainbow-table-input-checkbox_faux,\n    [type='checkbox'][disabled] ~ .rainbow-table-input-checkbox_faux,\n    [type='checkbox'][disabled] + label .rainbow-table-input-checkbox_faux {\n        background-color: ", ";\n        border-color: ", ";\n    }\n\n    [type='checkbox']:indeterminate + .rainbow-table-input-checkbox_faux::after,\n    [type='checkbox']:indeterminate ~ .rainbow-table-input-checkbox_faux::after,\n    [type='checkbox']:indeterminate + label .rainbow-table-input-checkbox_faux::after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 0.5rem;\n        height: 2px;\n        background-color: ", ";\n        border: 0;\n        transform: translate3d(-50%, -50%, 0);\n    }\n\n    [type='checkbox'][disabled] + .rainbow-table-input-checkbox_faux::after,\n    [type='checkbox'][disabled] ~ .rainbow-table-input-checkbox_faux::after,\n    [type='checkbox'][disabled] + label .rainbow-table-input-checkbox_faux::after {\n        border-color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.border.disabled;
});
var _default = StyledInnerContainer;
exports["default"] = _default;