"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "StyledDivider", {
  enumerable: true,
  get: function get() {
    return _divider["default"];
  }
});
exports.StyledLabel = void 0;
Object.defineProperty(exports, "StyledText", {
  enumerable: true,
  get: function get() {
    return _text["default"];
  }
});

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _text = _interopRequireDefault(require("./text"));

var _divider = _interopRequireDefault(require("./divider"));

var _templateObject;

var StyledLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].label)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    input:focus + span {\n        outline: 0;\n        box-shadow: ", ";\n        z-index: 1;\n    }\n    \n    input:hover + span,\n    input:focus + span,\n    input:active + span {\n        color: ", ";\n    }\n\n    input[disabled] + span {\n        color: ", ";\n        cursor: default;\n        background-color: transparent;\n    }  \n\n    input[disabled] + span {\n        cursor: default;\n        pointer-events: none;\n\n        svg {\n            fill: ", ";\n        }\n    }\n\n    ", "\n\n    ", "\n\n"])), function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.checked && "\n        z-index: 10;\n        ";
}, function (props) {
  return props.variant === 'shaded' && "\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    ";
});
exports.StyledLabel = StyledLabel;