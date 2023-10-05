"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePasswordState;

var _react = require("react");

var mapStatuses = {
  weak: 'error',
  average: 'warning',
  strong: 'success'
};

function usePasswordState(passwordState) {
  return (0, _react.useMemo)(function () {
    return mapStatuses[passwordState];
  }, [passwordState]);
}