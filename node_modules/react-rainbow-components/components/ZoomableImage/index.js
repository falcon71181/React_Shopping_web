"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _zoomedImage = _interopRequireDefault(require("./zoomedImage"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ZoomableImage = function ZoomableImage(_ref) {
  var className = _ref.className,
      style = _ref.style,
      src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height;
  var ref = (0, _react.useRef)();
  var imageRect = (0, _react.useRef)({});

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var open = function open() {
    imageRect.current = ref.current.getBoundingClientRect();
    setIsOpen(true);
  };

  var close = function close() {
    setIsOpen(false);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_styled.StyledImage, {
    className: className,
    style: style,
    src: src,
    alt: alt,
    width: width,
    height: height,
    ref: ref,
    isOpen: isOpen,
    onClick: open
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: isOpen
  }, _react["default"].createElement(_zoomedImage["default"], {
    src: src,
    alt: alt,
    close: close,
    originalRect: imageRect.current
  })));
};

ZoomableImage.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};
ZoomableImage.defaultProps = {
  className: undefined,
  style: undefined,
  src: '',
  alt: '',
  width: undefined,
  height: undefined
};
var _default = ZoomableImage;
exports["default"] = _default;