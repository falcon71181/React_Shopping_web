import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var WindowResize = function () {
  function WindowResize() {
    _classCallCheck(this, WindowResize);

    this.callback = null;
    this.listening = false;
  }

  _createClass(WindowResize, [{
    key: "startListening",
    value: function startListening(callback) {
      this.callback = callback;
      window.addEventListener('resize', this.callback);
      this.listening = true;
    }
  }, {
    key: "stopListening",
    value: function stopListening() {
      if (this.listening) {
        this.listening = false;
        window.removeEventListener('resize', this.callback);
        this.callback = null;
      }
    }
  }]);

  return WindowResize;
}();

export { WindowResize as default };