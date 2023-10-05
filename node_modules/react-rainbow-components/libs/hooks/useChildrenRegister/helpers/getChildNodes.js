"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var getChildNodes = function getChildNodes() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ref = _ref.ref,
      selector = _ref.selector;

  if (ref) {
    var _ref$querySelectorAll = ref.querySelectorAll(selector),
        _ref$querySelectorAll2 = (0, _toArray2["default"])(_ref$querySelectorAll),
        node = _ref$querySelectorAll2.slice(0);

    return node;
  }

  return [];
};

var _default = getChildNodes;
exports["default"] = _default;