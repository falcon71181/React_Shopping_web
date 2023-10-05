"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hex;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var _color = require("../../../../styles/helpers/color");

var _context = require("../../context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Hex() {
  var _useContext = (0, _react.useContext)(_context.ColorPickerContext),
      hex = _useContext.hex,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var _useState = (0, _react.useState)(hex.substr(1)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!isFocused) {
      setColor(hex.substr(1));
    }
  }, [hex, isFocused]);

  var handleChange = function handleChange(event) {
    var newHex = "#".concat(event.target.value);
    setColor(event.target.value);
    var rgba = (0, _color.hexToRgba)(newHex);

    if ((0, _color.isValidColor)(rgba)) {
      onChange({
        hex: newHex,
        rgba: (0, _color.decomposeColor)(rgba).values,
        hsv: (0, _color.decomposeColor)((0, _color.rgbToHsv)(rgba)).values
      });
    }
  };

  var handleBlur = function handleBlur() {
    setIsFocused(false);
    setColor(hex.substr(1));
  };

  return _react["default"].createElement(_styled.StyledHexInput, {
    value: color,
    bottomHelpText: "HEX",
    onChange: handleChange,
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: handleBlur,
    icon: _react["default"].createElement(_styled.StyledHexColorIcon, null, "#"),
    tabIndex: tabIndex
  });
}