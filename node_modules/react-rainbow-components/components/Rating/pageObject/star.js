"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageRatingStar = function () {
  function PageRatingStar(rootElement) {
    (0, _classCallCheck2["default"])(this, PageRatingStar);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageRatingStar, [{
    key: "click",
    value: function click() {
      $(this.rootElement).$('input[type="radio"]').click();
    }
  }, {
    key: "hover",
    value: function hover() {
      return $(this.rootElement).$('input[type="radio"]').hover();
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      return !!$(this.rootElement).$('input[type="radio"]').getAttribute('checked');
    }
  }]);
  return PageRatingStar;
}();

module.exports = PageRatingStar;