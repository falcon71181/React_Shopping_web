"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageRatingStar = require('./star');

var PageRating = function () {
  function PageRating(rootElement) {
    (0, _classCallCheck2["default"])(this, PageRating);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageRating, [{
    key: "getItem",
    value: function getItem(itemPosition) {
      var items = $(this.rootElement).$$('.rainbow-rating_star');

      if (items[itemPosition]) {
        return new PageRatingStar("".concat(this.rootElement, " .rainbow-rating_star:nth-child(").concat(itemPosition + 1, ")"));
      }

      return null;
    }
  }]);
  return PageRating;
}();

module.exports = PageRating;