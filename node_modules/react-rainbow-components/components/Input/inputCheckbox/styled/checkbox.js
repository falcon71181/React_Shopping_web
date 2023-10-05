"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _hiddenElement = _interopRequireDefault(require("../../../Structural/hiddenElement"));

var _borderRadius = require("../../../../styles/borderRadius");

var _margins = require("../../../../styles/margins");

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../../styles/helpers/color");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getInitialBorder(props) {
  if (props.error) {
    return "2px solid ".concat(props.palette.error.main);
  }

  return "1px solid ".concat(props.palette.border.divider);
}

function getColor(props) {
  if (props.error) {
    return props.palette.error.main;
  }

  return props.palette.brand.main;
}

function getShadow(props) {
  if (props.error) {
    return props.shadows.error;
  }

  return props.shadows.brand;
}

var flash = function flash(color) {
  return (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    100% {\n        box-shadow: 0 0 0 5px ", ";\n    }\n"])), color);
};

var Checkbox = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_hiddenElement["default"]))(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    & ~ label > .rainbow-input_faux {\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        position: relative;\n        vertical-align: middle;\n        border: ", ";\n        border-radius: ", ";\n        background: ", ";\n        margin-right: ", ";\n        transition: border 0.1s linear, background-color 0.1s linear;\n        box-sizing: border-box;\n    }\n\n    :checked ~ label > .rainbow-input_faux::after {\n        display: block;\n        content: '';\n        height: 0.4rem;\n        width: 0.65rem;\n        position: absolute;\n        top: 46%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n        border-bottom: 2px solid;\n        border-left: 2px solid;\n        border-color: ", ";\n        box-sizing: border-box;\n        padding: 0;\n    }\n\n    :checked ~ label > .rainbow-input_faux {\n        animation: ", " 0.2s linear;\n        border: 2px solid;\n        border-color: ", ";\n    }\n\n    :focus ~ label > .rainbow-input_faux {\n        content: '';\n        border: 2px solid;\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &[disabled] ~ label > .rainbow-input_faux {\n        background-color: ", ";\n        border-color: ", ";\n    }\n\n    &[disabled] ~ label > .rainbow-input_faux::after {\n        border-color: ", ";\n        box-sizing: border-box;\n    }\n\n    :focus:checked ~ label > .rainbow-input_faux {\n        border-color: ", ";\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n"])), getInitialBorder, _borderRadius.BORDER_RADIUS_3, function (props) {
  return props.palette.background.main;
}, _margins.MARGIN_SMALL, getColor, function (props) {
  return props.error ? flash((0, _color.replaceAlpha)(props.palette.error.main, 0.5)) : flash((0, _color.replaceAlpha)(props.palette.brand.main, 0.5));
}, getColor, getColor, getShadow, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.background.main;
}, getColor, function (props) {
  return props.palette.background.main;
}, getShadow);
var _default = Checkbox;
exports["default"] = _default;