"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTimer;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useTimer() {
  var _useState = (0, _react.useState)(new Date()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      clock = _useState2[0],
      setClock = _useState2[1];

  (0, _react.useEffect)(function () {
    var timerRef = setTimeout(function next() {
      setClock(new Date());
      timerRef = setTimeout(next, 60000);
    }, (60 - new Date().getSeconds()) * 1000);
    return function () {
      return clearTimeout(timerRef);
    };
  }, []);
  return clock;
}