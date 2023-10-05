"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var WindowResize = function () {
  function WindowResize() {
    (0, _classCallCheck2["default"])(this, WindowResize);
    this.callback = null;
    this.listening = false;
  }

  (0, _createClass2["default"])(WindowResize, [{
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

exports["default"] = WindowResize;