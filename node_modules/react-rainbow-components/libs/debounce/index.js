"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

function debounce(callback) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timer;
  return function debounced() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.call.apply(callback, [_this].concat(args));
    }, time);
  };
}