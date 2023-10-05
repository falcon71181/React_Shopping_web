"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useValueState;

var _react = require("react");

var _getValueArray = _interopRequireDefault(require("../helpers/getValueArray"));

function useValueState(value, length) {
  return (0, _react.useMemo)(function () {
    return (0, _getValueArray["default"])(value, length);
  }, [value, length]);
}