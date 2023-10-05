"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var merge = function merge() {
  var target = {};

  var merger = function merger(obj) {
    var keys = Object.keys(obj);
    keys.forEach(function (prop) {
      if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
        target[prop] = merge(target[prop], obj[prop]);
      } else {
        target[prop] = obj[prop];
      }
    });
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (obj) {
    if (obj) {
      merger(obj);
    }
  });
  return target;
};

var _default = merge;
exports["default"] = _default;