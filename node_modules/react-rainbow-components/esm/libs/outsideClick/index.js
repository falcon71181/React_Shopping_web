import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
var privateHandleClick = Symbol('hanldeClick');

var OutsideClick = function () {
  function OutsideClick() {
    _classCallCheck(this, OutsideClick);

    this.containerRef = null;
    this.callback = null;
    this.listening = false;
    this[privateHandleClick] = this[privateHandleClick].bind(this);
  }

  _createClass(OutsideClick, [{
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

export default OutsideClick;