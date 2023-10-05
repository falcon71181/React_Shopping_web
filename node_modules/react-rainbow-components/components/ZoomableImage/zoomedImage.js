"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _getTransform = _interopRequireDefault(require("./helpers/getTransform"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ZoomedImage = function ZoomedImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      close = _ref.close,
      originalRect = _ref.originalRect;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isCentered = _useState2[0],
      setIsCentered = _useState2[1];

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setIsCentered(false);
      setTimeout(close, 300);
    }
  };

  (0, _react.useEffect)(function () {
    setIsCentered(true);
  }, []);
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  var handleClick = function handleClick() {
    setIsCentered(false);
    setTimeout(close, 300);
  };

  return _reactDom["default"].createPortal(_react["default"].createElement(_styled.StyledImageContainer, {
    onClick: handleClick
  }, _react["default"].createElement(_styled.StyledBackdrop, {
    isCentered: isCentered
  }), _react["default"].createElement(_styled.StyledCenteredImage, {
    src: src,
    alt: alt,
    top: originalRect.top,
    left: originalRect.left,
    width: originalRect.width,
    height: originalRect.height,
    isCentered: isCentered,
    transform: (0, _getTransform["default"])(originalRect)
  })), document.body);
};

ZoomedImage.propTypes = {
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  close: _propTypes["default"].func,
  originalRect: _propTypes["default"].object
};
ZoomedImage.defaultProps = {
  src: '',
  alt: '',
  close: function close() {},
  originalRect: {}
};
var _default = ZoomedImage;
exports["default"] = _default;