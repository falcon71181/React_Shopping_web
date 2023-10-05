"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useWindowResize;

var _react = require("react");

function useWindowResize(handler) {
  var isListening = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var listener = (0, _react.useCallback)(function (event) {
    handler(event);
  }, [handler]);
  (0, _react.useEffect)(function () {
    if (isListening) {
      window.addEventListener('resize', listener);
    }

    return function () {
      window.removeEventListener('resize', listener);
    };
  }, [isListening, listener]);
}