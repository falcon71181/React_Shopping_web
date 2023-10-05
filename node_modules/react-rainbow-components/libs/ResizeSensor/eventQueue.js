"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var EventQueue = function () {
  function EventQueue() {
    (0, _classCallCheck2["default"])(this, EventQueue);
    this.q = [];
  }

  (0, _createClass2["default"])(EventQueue, [{
    key: "add",
    value: function add(ev) {
      this.q.push(ev);
    }
  }, {
    key: "call",
    value: function call(sizeInfo) {
      for (var i = 0, j = this.q.length; i < j; i++) {
        this.q[i].call(this, sizeInfo);
      }
    }
  }, {
    key: "remove",
    value: function remove(ev) {
      var newQueue = [];

      for (var i = 0, j = this.q.length; i < j; i++) {
        if (this.q[i] !== ev) {
          newQueue.push(this.q[i]);
        }
      }

      this.q = newQueue;
    }
  }, {
    key: "length",
    value: function length() {
      return this.q.length;
    }
  }]);
  return EventQueue;
}();

exports["default"] = EventQueue;