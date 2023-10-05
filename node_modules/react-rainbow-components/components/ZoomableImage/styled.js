"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledImageContainer = exports.StyledImage = exports.StyledCenteredImage = exports.StyledBackdrop = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _zIndex = require("../../styles/zIndex");

var _attachThemeAttrs = _interopRequireDefault(require("../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledImage = _styledComponents["default"].img(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    cursor: zoom-in;\n    visibility: ", ";\n"])), function (props) {
  return props.isOpen ? 'hidden' : 'visible';
});

exports.StyledImage = StyledImage;

var StyledImageContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ", ";\n"])), _zIndex.ZINDEX_OVERLAY);

exports.StyledImageContainer = StyledImageContainer;
var StyledBackdrop = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    opacity: 0;\n    transition: opacity 300ms ease 0s;\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.isCentered && "\n        opacity: 1;\n        ";
});
exports.StyledBackdrop = StyledBackdrop;

var StyledCenteredImage = _styledComponents["default"].img(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: ", "px;\n    left: ", "px;\n    transition: transform 300ms ease 0s;\n    transform: translate3d(0, 0, 0) scale(1);\n    will-change: transform;\n    transform-origin: center center;\n    cursor: zoom-out;\n    ", "\n"])), function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.isCentered && props.transform && "\n        transform: translate3d(".concat(props.transform.translateX, "px, ").concat(props.transform.translateY, "px, 0px) scale(").concat(props.transform.scale, ");\n        ");
});

exports.StyledCenteredImage = StyledCenteredImage;