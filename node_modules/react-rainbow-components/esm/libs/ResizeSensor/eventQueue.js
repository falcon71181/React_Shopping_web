import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var EventQueue = function () {
  function EventQueue() {
    _classCallCheck(this, EventQueue);

    this.q = [];
  }

  _createClass(EventQueue, [{
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

export { EventQueue as default };