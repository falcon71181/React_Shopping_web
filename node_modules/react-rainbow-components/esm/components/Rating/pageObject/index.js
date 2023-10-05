import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var PageRatingStar = require('./star');

var PageRating = function () {
  function PageRating(rootElement) {
    _classCallCheck(this, PageRating);

    this.rootElement = rootElement;
  }

  _createClass(PageRating, [{
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