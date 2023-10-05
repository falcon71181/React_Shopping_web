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

var _styled = _interopRequireDefault(require("./styled"));

var _getElementDimensions = _interopRequireDefault(require("./helpers/getElementDimensions"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ShowIf = function ShowIf(_ref) {
  var id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      isTrue = _ref.isTrue,
      inAnimation = _ref.inAnimation,
      outAnimation = _ref.outAnimation,
      children = _ref.children;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      animation = _useState2[0],
      setAnimation = _useState2[1];

  var _useState3 = (0, _react.useState)(isTrue),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      dimensions = _useState6[0],
      setDimensions = _useState6[1];

  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (isTrue) {
      var rect = (0, _getElementDimensions["default"])(ref.current);
      setDimensions(rect);
      setIsVisible(true);
      setAnimation("".concat(inAnimation, "In"));
    } else {
      setAnimation("".concat(outAnimation, "Out"));
    }
  }, [isTrue, inAnimation, outAnimation]);

  var handleAnimationEnd = function handleAnimationEnd(event) {
    if (event.animationName.includes('Out')) {
      setIsVisible(false);
    }
  };

  return _react["default"].createElement(_styled["default"], {
    id: id,
    className: className,
    style: style,
    animation: animation,
    isVisible: isVisible,
    dimensions: dimensions,
    onAnimationEnd: handleAnimationEnd,
    ref: ref
  }, children);
};

ShowIf.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  isTrue: _propTypes["default"].any,
  inAnimation: _propTypes["default"].oneOf(['fade', 'slideVertical', 'slideHorizontal']),
  outAnimation: _propTypes["default"].oneOf(['fade', 'slideVertical', 'slideHorizontal']),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object, _propTypes["default"].node])
};
ShowIf.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  isTrue: false,
  inAnimation: 'fade',
  outAnimation: 'fade',
  children: []
};
var _default = ShowIf;
exports["default"] = _default;