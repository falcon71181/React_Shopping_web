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

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var _tooltipPositionResolver = _interopRequireDefault(require("./helpers/tooltipPositionResolver"));

var _resolveElement = _interopRequireDefault(require("../InternalOverlay/helpers/resolveElement"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InternalTooltip = _react["default"].forwardRef(function (props, ref) {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      pos = _useState2[0],
      setPos = _useState2[1];

  var className = props.className,
      style = props.style,
      children = props.children,
      isVisible = props.isVisible,
      preferredPosition = props.preferredPosition,
      triggerElementRef = props.triggerElementRef;
  var tooltipRef = (0, _react.useRef)();

  var handleOpen = function handleOpen() {
    var triggerRect = (0, _resolveElement["default"])(triggerElementRef).getBoundingClientRect();
    var tooltipRect = tooltipRef.current.getBoundingClientRect();

    if (tooltipRect.bottom < triggerRect.top) {
      setPos('top');
    } else if (tooltipRect.top > triggerRect.bottom) {
      setPos('bottom');
    } else if (tooltipRect.right < triggerRect.left) {
      setPos('left');
    } else if (tooltipRect.left > triggerRect.right) {
      setPos('right');
    } else {
      setPos('floating');
    }
  };

  if (!isVisible && pos !== null) {
    setPos(null);
  }

  return _react["default"].createElement(_InternalOverlay["default"], {
    isVisible: isVisible,
    triggerElementRef: triggerElementRef,
    positionResolver: function positionResolver(opts) {
      return (0, _tooltipPositionResolver["default"])(opts, preferredPosition);
    },
    onOpened: handleOpen,
    keepScrollEnabled: true
  }, _react["default"].createElement("div", {
    ref: ref
  }, _react["default"].createElement(_styled["default"], {
    role: "tooltip",
    className: className,
    style: style,
    position: pos,
    isVisible: isVisible,
    ref: tooltipRef
  }, children)));
});

InternalTooltip.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  isVisible: _propTypes["default"].bool,
  preferredPosition: _propTypes["default"].oneOf(['top', 'bottom', 'left', 'right']),
  triggerElementRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]).isRequired,
  children: _propTypes["default"].node
};
InternalTooltip.defaultProps = {
  className: undefined,
  style: undefined,
  isVisible: false,
  preferredPosition: 'top',
  children: undefined
};
var _default = InternalTooltip;
exports["default"] = _default;