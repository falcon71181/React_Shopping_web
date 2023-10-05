"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useItemsRef;

var _react = require("react");

function useItemsRef(length) {
  var itemsRef = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    itemsRef.current = itemsRef.current.slice(0, length);
  }, [length]);
  return itemsRef;
}