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

var StyledInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: inherit;\n    font: inherit;\n    margin: 0;\n    line-height: normal;\n    box-sizing: border-box;\n    padding: 0;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :-ms-input-placeholder {\n        color: ", ";\n        font-weight: 400;\n    }\n\n    &[disabled] {\n        cursor: default;\n    }\n"])), function (props) {
  return props.palette.text.label;
});
var _default = StyledInput;
exports["default"] = _default;