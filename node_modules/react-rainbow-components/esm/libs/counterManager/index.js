import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var CounterManager = function () {
  function CounterManager() {
    _classCallCheck(this, CounterManager);

    this.counter = 0;
  }

  _createClass(CounterManager, [{
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

export default new CounterManager();