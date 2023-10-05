"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useErrorMessageId;

var _react = require("react");

var _useUniqueIdentifier = _interopRequireDefault(require("./useUniqueIdentifier"));

function useErrorMessageId(error) {
  var errorMessageId = (0, _useUniqueIdentifier["default"])('error-message');
  return (0, _react.useMemo)(function () {
    if (error) {
      return errorMessageId;
    }

    return undefined;
  }, [errorMessageId, error]);
}