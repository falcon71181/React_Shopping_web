"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Alpha;

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("./styled"));

var _context = require("../../context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Alpha() {
  var _useContext = (0, _react.useContext)(_context.ColorPickerContext),
      hex = _useContext.hex,
      rgba = _useContext.rgba,
      hsv = _useContext.hsv,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var handleChange = function handleChange(event) {
    var value = parseInt(event.target.value, 10);
    rgba[3] = isNaN(value) ? 1 : Math.max(0, Math.min(value, 100)) / 100;
    onChange({
      hex: hex,
      rgba: rgba,
      hsv: hsv
    });
  };

  var alpha = Math.round(rgba[3] * 100);
  return _react["default"].createElement(_styled["default"], {
    value: alpha,
    min: 0,
    max: 100,
    onChange: handleChange,
    tabIndex: tabIndex
  });
}