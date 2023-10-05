"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hue;

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("./styled"));

var _color = require("../../../../styles/helpers/color");

var _context = require("../../context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Hue() {
  var _useContext = (0, _react.useContext)(_context.ColorPickerContext),
      hsv = _useContext.hsv,
      rgba = _useContext.rgba,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var handleChange = function handleChange(event) {
    var value = parseInt(event.target.value, 10);
    hsv[0] = isNaN(value) ? 0 : Math.max(0, Math.min(value, 360));
    var rgbColor = (0, _color.hsvToRgb)((0, _color.recomposeColor)({
      type: 'hsv',
      values: hsv
    }));
    var rgbaColor = (0, _color.rgbToRgba)(rgbColor, rgba[3]);
    onChange({
      hex: "#".concat((0, _color.rgbaToHex)(rgbaColor)),
      rgba: (0, _color.decomposeColor)(rgbaColor).values,
      hsv: hsv
    });
  };

  return _react["default"].createElement(_styled["default"], {
    value: hsv[0],
    min: 0,
    max: 360,
    onChange: handleChange,
    tabIndex: tabIndex
  });
}