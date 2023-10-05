"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var privateHandleScroll = Symbol('handleScroll');

var WindowScrolling = function () {
  function WindowScrolling() {
    (0, _classCallCheck2["default"])(this, WindowScrolling);
    this.callback = null;
    this.listening = false;
    this.isTicking = false;
    this[privateHandleScroll] = this[privateHandleScroll].bind(this);
  }

  (0, _createClass2["default"])(WindowScrolling, [{
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

var _default = WindowScrolling;
exports["default"] = _default;