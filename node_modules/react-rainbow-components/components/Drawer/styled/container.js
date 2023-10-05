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

var percents = {
  small: 25,
  medium: 50,
  large: 75,
  full: 100
};
var positions = {
  left: {
    left: 0,
    top: 0,
    bottom: 0
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0
  }
};

var getSize = function getSize(size, slideFrom) {
  if (['left', 'right'].includes(slideFrom)) {
    return {
      width: percents[size],
      height: 100
    };
  }

  return {};
};

var getPosition = function getPosition(slideFrom) {
  return positions[slideFrom];
};

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].section).attrs(function (props) {
  var size = getSize(props.size, props.slideFrom);
  var position = getPosition(props.slideFrom);
  return {
    size: size,
    position: position
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: normal;\n    position: fixed;\n    padding: 0;\n    background: ", ";\n    box-shadow: ", ";\n\n    &:focus {\n        outline: 0;\n    }\n\n    // size\n    width: ", "%;\n    min-width: ", "%;\n    height: ", "%;\n    min-height: ", "%;\n    ", "\n\n    @media (max-width: 800px) {\n        width: 100%;\n        min-width: 100%;\n    }\n\n    // position\n    left: ", ";\n    top: ", ";\n    right: ", ";\n    bottom: ", ";\n\n    // animations\n    transition: opacity 0.2s ease-in-out;\n    ", ";\n    ", ";\n\n    // slide from left animation\n    @keyframes drawer-slide-left-in {\n        0% {\n            transform:  translateX(-100%);\n        }\n        100% {\n            transform: none;\n        }\n    }\n    @keyframes drawer-slide-left-out {\n        0% {\n            transform: none;\n        }\n        100% {\n            transform:  translateX(-100%);\n        }\n    }\n\n    // slide from right animation\n    @keyframes drawer-slide-right-in {\n        0% {\n            transform:  translateX(100%);\n        }\n        100% {\n            transform: none;\n        }\n    }\n    @keyframes drawer-slide-right-out {\n        0% {\n            transform: none;\n        }\n        100% {\n            transform:  translateX(100%);\n        }\n    }\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.size.width;
}, function (props) {
  return props.size.width;
}, function (props) {
  return props.size.height;
}, function (props) {
  return props.size.height;
}, function (props) {
  return ['left', 'right'].includes(props.slideFrom) && "\n        max-height: ".concat(props.size.height, "%;\n        ");
}, function (props) {
  return props.position.left;
}, function (props) {
  return props.position.top;
}, function (props) {
  return props.position.right;
}, function (props) {
  return props.position.bottom;
}, function (props) {
  return props.isOpen && "\n            animation: drawer-slide-".concat(props.slideFrom, "-in 0.2s linear;\n            transform: none;\n            opacity: 1;\n        ");
}, function (props) {
  return !props.isOpen && "\n            animation: drawer-slide-".concat(props.slideFrom, "-out 0.2s linear;\n            transform:  ").concat(props.slideFrom === 'left' ? 'translateX(-100%)' : 'translateX(100%)', ";\n            opacity: 0;\n        ");
});
var _default = StyledContainer;
exports["default"] = _default;