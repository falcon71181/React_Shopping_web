"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useUniqueIdentifier;

var _react = require("react");

var _utils = require("../utils");

function useUniqueIdentifier(prefix) {
  return (0, _react.useMemo)(function () {
    return (0, _utils.uniqueId)(prefix);
  }, [prefix]);
}