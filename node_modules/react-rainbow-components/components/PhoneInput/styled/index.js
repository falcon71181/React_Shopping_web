"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCountryCode = void 0;
Object.defineProperty(exports, "StyledFlagContainer", {
  enumerable: true,
  get: function get() {
    return _flagContainer["default"];
  }
});
exports.StyledFlagIcon = void 0;
Object.defineProperty(exports, "StyledIconContainer", {
  enumerable: true,
  get: function get() {
    return _iconContainer["default"];
  }
});
Object.defineProperty(exports, "StyledIndicator", {
  enumerable: true,
  get: function get() {
    return _indicator["default"];
  }
});
Object.defineProperty(exports, "StyledInput", {
  enumerable: true,
  get: function get() {
    return _input["default"];
  }
});
Object.defineProperty(exports, "StyledInputContainer", {
  enumerable: true,
  get: function get() {
    return _inputContainer["default"];
  }
});
Object.defineProperty(exports, "StyledTrigger", {
  enumerable: true,
  get: function get() {
    return _trigger["default"];
  }
});

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _indicator = _interopRequireDefault(require("./indicator"));

var _inputContainer = _interopRequireDefault(require("./inputContainer"));

var _input = _interopRequireDefault(require("./input"));

var _trigger = _interopRequireDefault(require("./trigger"));

var _iconContainer = _interopRequireDefault(require("./iconContainer"));

var _flagContainer = _interopRequireDefault(require("./flagContainer"));

var _templateObject, _templateObject2;

var StyledCountryCode = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 0 auto;\n    padding: 0 8px 0 8px;\n    line-height: 2.2rem;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.size === 'large' && "\n            line-height: 3.125rem;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            line-height: 1.6rem;\n    ";
});

exports.StyledCountryCode = StyledCountryCode;

var StyledFlagIcon = _styledComponents["default"].svg(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 28px !important;\n    height: 28px !important;\n    vertical-align: middle;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.size === 'small' && "\n            width: 20px !important;\n            height: 20px !important;\n        ";
}, function (props) {
  return props.size === 'large' && "\n            width: 40px !important;\n            height: 40px !important;\n        ";
});

exports.StyledFlagIcon = StyledFlagIcon;