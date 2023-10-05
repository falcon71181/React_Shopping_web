"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var privateHandleClick = Symbol('hanldeClick');

var OutsideClick = function () {
  function OutsideClick() {
    (0, _classCallCheck2["default"])(this, OutsideClick);
    this.containerRef = null;
    this.callback = null;
    this.listening = false;
    this[privateHandleClick] = this[privateHandleClick].bind(this);
  }

  (0, _createClass2["default"])(OutsideClick, [{
    key: privateHandleClick,
    value: function value(event) {
      if (!this.containerRef.contains(event.target)) this.callback(this, event);
    }
  }, {
    key: "startListening",
    value: function startListening(containerRef, callback) {
      if (!containerRef || !callback) return;
      this.containerRef = containerRef;
      this.callback = callback;
      document.addEventListener('click', this[privateHandleClick], {
        capture: true
      });
      this.listening = true;
    }
  }, {
    key: "stopListening",
    value: function stopListening() {
      if (!this.listening) return;
      this.listening = false;
      document.removeEventListener('click', this[privateHandleClick], {
        capture: true
      });
      this.containerRef = null;
      this.callback = null;
    }
  }]);
  return OutsideClick;
}();

var _default = OutsideClick;
exports["default"] = _default;