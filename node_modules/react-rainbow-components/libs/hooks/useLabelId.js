"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useLabelId;

var _react = require("react");

var _useUniqueIdentifier = _interopRequireDefault(require("./useUniqueIdentifier"));

function useLabelId(label) {
  var labelId = (0, _useUniqueIdentifier["default"])('label');
  return (0, _react.useMemo)(function () {
    if (label) {
      return labelId;
    }

    return undefined;
  }, [labelId, label]);
}