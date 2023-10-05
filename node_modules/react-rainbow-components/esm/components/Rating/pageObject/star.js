import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var PageRatingStar = function () {
  function PageRatingStar(rootElement) {
    _classCallCheck(this, PageRatingStar);

    this.rootElement = rootElement;
  }

  _createClass(PageRatingStar, [{
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