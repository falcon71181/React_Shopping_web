"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSimulatedLoading;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useSimulatedLoading(list, delta) {
  var loading = (0, _react.useRef)(true);

  var _useReducer = (0, _react.useReducer)(function (value) {
    return value + 1;
  }, 0),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      forceUpdate = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (loading.current) {
      loading.current = false;
      forceUpdate();
    } else {
      loading.current = true;
    }
  });

  if (loading.current) {
    return list.slice(0, delta);
  }

  return list;
}