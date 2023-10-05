"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../../libs/constants");

var _color = require("../../../../styles/helpers/color");

var _styled = require("./styled");

var _context = require("../../context");

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Saturation = _react["default"].forwardRef(function (_props, ref) {
  var _keyHandlerMap;

  var _useContext = (0, _react.useContext)(_context.ColorPickerContext),
      rgba = _useContext.rgba,
      hsv = _useContext.hsv,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var containerRef = (0, _react.useRef)();
  var isMouseDown = (0, _react.useRef)(false);

  var _hsv = (0, _slicedToArray2["default"])(hsv, 3),
      h = _hsv[0],
      s = _hsv[1],
      v = _hsv[2];

  var a = rgba[3];

  var change = function change(_ref) {
    var saturation = _ref.saturation,
        bright = _ref.bright;

    if (saturation >= 0) {
      hsv[1] = saturation;
    }

    if (bright >= 0) {
      hsv[2] = bright;
    }

    var rgbaColor = (0, _color.rgbToRgba)((0, _color.hsvToRgb)((0, _color.recomposeColor)({
      type: 'hsv',
      values: hsv
    })), a);
    onChange({
      hex: "#".concat((0, _color.rgbaToHex)(rgbaColor)),
      rgba: (0, _color.decomposeColor)(rgbaColor).values,
      hsv: hsv
    });
  };

  var handleChange = function handleChange(event) {
    var rect = containerRef.current.getBoundingClientRect();
    var saturation = (0, _helpers.calculateSaturation)(event, rect);
    var bright = (0, _helpers.calculateBright)(event, rect);
    change({
      saturation: saturation,
      bright: bright
    });
  };

  var handleMouseDown = function handleMouseDown(event) {
    handleChange(event);
    isMouseDown.current = true;
  };

  var handleMouseMove = function handleMouseMove(event) {
    if (isMouseDown.current) {
      handleChange(event);
    }
  };

  var handleMouseUp = function handleMouseUp() {
    isMouseDown.current = false;
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (isMouseDown.current) {
      handleChange(event);
      isMouseDown.current = false;
    }
  };

  var keyHandlerMap = (_keyHandlerMap = {}, (0, _defineProperty2["default"])(_keyHandlerMap, _constants.UP_KEY, function () {
    var bright = Math.min(100, v + 1);
    change({
      bright: bright
    });
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.DOWN_KEY, function () {
    var bright = Math.max(0, v - 1);
    change({
      bright: bright
    });
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.LEFT_KEY, function () {
    var saturation = Math.max(0, s - 1);
    change({
      saturation: saturation
    });
  }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.RIGHT_KEY, function () {
    var saturation = Math.min(100, s + 1);
    change({
      saturation: saturation
    });
  }), _keyHandlerMap);

  var handleKeyDown = function handleKeyDown(event) {
    var keyCode = event.keyCode;

    if (keyHandlerMap[keyCode]) {
      event.preventDefault();
      keyHandlerMap[keyCode]();
    }
  };

  var handleClick = function handleClick() {
    ref.current.focus();
  };

  var hsl = "hsl(".concat(h, ",100%, 50%)");
  var styleColor = {
    background: hsl
  };
  var stylePointer = {
    top: "".concat(100 - v, "%"),
    left: "".concat(s, "%")
  };
  return _react["default"].createElement(_styled.StyledColor, {
    ref: containerRef,
    style: styleColor,
    onTouchMove: handleChange,
    onTouchStart: handleChange,
    onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }, _react["default"].createElement(_styled.StyledCircle, {
    ref: ref,
    type: "button",
    tabIndex: tabIndex,
    style: stylePointer
  }));
});

var _default = Saturation;
exports["default"] = _default;