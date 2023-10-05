"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFocusIndex;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useFocusIndex() {
  for (var _len = arguments.length, refsMap = new Array(_len), _key = 0; _key < _len; _key++) {
    refsMap[_key] = arguments[_key];
  }

  var _useState = (0, _react.useState)(-1),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      focusIndex = _useState2[0],
      setFocusIndex = _useState2[1];

  (0, _react.useEffect)(function () {
    if (focusIndex > -1) {
      refsMap[focusIndex].current.focus();
    }
  }, [focusIndex, refsMap]);
  return [focusIndex, setFocusIndex];
}