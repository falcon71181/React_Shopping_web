import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
var privateHandleScroll = Symbol('handleScroll');

var WindowScrolling = function () {
  function WindowScrolling() {
    _classCallCheck(this, WindowScrolling);

    this.callback = null;
    this.listening = false;
    this.isTicking = false;
    this[privateHandleScroll] = this[privateHandleScroll].bind(this);
  }

  _createClass(WindowScrolling, [{
    key: privateHandleScroll,
    value: function value(event) {
      var _this = this;

      if (!this.isTicking) {
        window.requestAnimationFrame(function () {
          _this.callback(event);

          _this.isTicking = false;
        });
        this.isTicking = true;
      }
    }
  }, {
    key: "startListening",
    value: function startListening(callback) {
      this.callback = callback;
      window.addEventListener('scroll', this[privateHandleScroll]);
      window.addEventListener('wheel', this[privateHandleScroll]);
      this.listening = true;
    }
  }, {
    key: "stopListening",
    value: function stopListening() {
      if (this.listening) {
        this.listening = false;
        window.removeEventListener('scroll', this[privateHandleScroll]);
        window.removeEventListener('wheel', this[privateHandleScroll]);
        this.callback = null;
      }
    }
  }]);

  return WindowScrolling;
}();

export default WindowScrolling;