"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _getSizeValue = _interopRequireDefault(require("../helpers/getSizeValue"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dashXLarge = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    0% {\n        stroke-dasharray: 1, 248;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 177, 248;\n        stroke-dashoffset: -75;\n    }\n\n    100% {\n        stroke-dasharray: 177, 248;\n        stroke-dashoffset: -246;\n    }\n"])));
var dashLarge = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    0% {\n        stroke-dasharray: 1, 141;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 100, 141;\n        stroke-dashoffset: -43;\n    }\n\n    100% {\n        stroke-dasharray: 100, 141;\n        stroke-dashoffset: -139;\n    }\n"])));
var dashMedium = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    0% {\n        stroke-dasharray: 1, 91;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 65, 91;\n        stroke-dashoffset: -28;\n    }\n\n    100% {\n        stroke-dasharray: 65, 91;\n        stroke-dashoffset: -89;\n    }\n"])));
var dashSmall = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    0% {\n        stroke-dasharray: 1, 72;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 51, 72;\n        stroke-dashoffset: -22;\n    }\n\n    100% {\n        stroke-dasharray: 51, 72;\n        stroke-dashoffset: -70;\n    }\n"])));
var dashXSmall = (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    0% {\n        stroke-dasharray: 1, 53;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 38, 53;\n        stroke-dashoffset: -16;\n    }\n\n    100% {\n        stroke-dasharray: 38, 53;\n        stroke-dashoffset: -51;\n    }\n"])));
var dashXXSmall = (0, _styledComponents.keyframes)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    0% {\n        stroke-dasharray: 1, 41;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 29, 41;\n        stroke-dashoffset: -12;\n    }\n\n    100% {\n        stroke-dasharray: 29, 41;\n        stroke-dashoffset: -39;\n    }\n"])));
var dashMap = {
  'x-large': dashXLarge,
  large: dashLarge,
  medium: dashMedium,
  small: dashSmall,
  'x-small': dashXSmall,
  'xx-small': dashXXSmall
};
var StyledArcSpinner = (0, _attachThemeAttrs["default"])(_styledComponents["default"].svg)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    animation: rotate 1s linear infinite;\n    display: block;\n    transform-origin: 50% 50%;\n    width: ", "px;\n    height: ", "px;\n\n    & .path {\n        stroke: ", ";\n        stroke-linecap: round;\n        animation: ", " 1.5s ease-in-out infinite;\n    }\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return (0, _getSizeValue["default"])(props.size);
}, function (props) {
  return (0, _getSizeValue["default"])(props.size);
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return dashMap[props.size] || dashMap.medium;
}, function (props) {
  return props.variant === 'brand' && "\n            & .path {\n                stroke: ".concat(props.palette.brand.main, ";\n            }\n        ");
}, function (props) {
  return props.variant === 'inverse' && "\n            & .path {\n                stroke: ".concat(props.palette.getContrastText(props.palette.text.main), ";\n            }\n        ");
}, function (props) {
  return props.variant === 'neutral' && "\n            & .path {\n                stroke: ".concat(props.palette.background.highlight, ";\n            }\n        ");
});
var _default = StyledArcSpinner;
exports["default"] = _default;