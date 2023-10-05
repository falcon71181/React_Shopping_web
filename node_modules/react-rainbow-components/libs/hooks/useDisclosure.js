"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDisclosure;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useDisclosure(defaultIsOpen) {
  var _useState = (0, _react.useState)(Boolean(defaultIsOpen)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var close = (0, _react.useCallback)(function () {
    return setIsOpen(false);
  }, []);
  var open = (0, _react.useCallback)(function () {
    return setIsOpen(true);
  }, []);
  var toggle = (0, _react.useCallback)(function () {
    return setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  }, []);
  return {
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
}