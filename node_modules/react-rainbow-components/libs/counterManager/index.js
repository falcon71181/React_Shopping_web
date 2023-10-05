"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CounterManager = function () {
  function CounterManager() {
    (0, _classCallCheck2["default"])(this, CounterManager);
    this.counter = 0;
  }

  (0, _createClass2["default"])(CounterManager, [{
    key: "increment",
    value: function increment() {
      this.counter += 1;
    }
  }, {
    key: "decrement",
    value: function decrement() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    }
  }, {
    key: "hasModalsOpen",
    value: function hasModalsOpen() {
      return this.counter > 0;
    }
  }]);
  return CounterManager;
}();

var _default = new CounterManager();

exports["default"] = _default;