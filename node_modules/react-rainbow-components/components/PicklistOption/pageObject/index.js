"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function isPointWithinRect(point, rect) {
  var x = point.x,
      y = point.y;
  var left = rect.left,
      top = rect.top,
      right = rect.right,
      bottom = rect.bottom;
  return x >= left && y >= top && x <= right && y <= bottom;
}

var PagePicklistOption = function () {
  function PagePicklistOption(rootElement, containerRect) {
    (0, _classCallCheck2["default"])(this, PagePicklistOption);
    this.rootElement = rootElement;
    this.containerRect = containerRect;
  }

  (0, _createClass2["default"])(PagePicklistOption, [{
    key: "click",
    value: function click() {
      this.rootElement.click();
    }
  }, {
    key: "hover",
    value: function hover() {
      var itemElement = this.rootElement.$('div[role="option"]');
      itemElement.moveTo();
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.rootElement.$('div[role="option"]').getText();
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.rootElement.$('div[aria-selected="true"]').isExisting();
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      var _this$rootElement$$$g = this.rootElement.$('div[role="option"]').getLocation(),
          x = _this$rootElement$$$g.x,
          y = _this$rootElement$$$g.y;

      var _this$rootElement$$$g2 = this.rootElement.$('div[role="option"]').getSize(),
          width = _this$rootElement$$$g2.width,
          height = _this$rootElement$$$g2.height;

      return this.rootElement.isDisplayedInViewport() && isPointWithinRect({
        x: x,
        y: y
      }, this.containerRect) && isPointWithinRect({
        x: x + width,
        y: y + height
      }, this.containerRect);
    }
  }, {
    key: "waitUntilIsVisible",
    value: function waitUntilIsVisible() {
      var _this = this;

      browser.waitUntil(function () {
        return _this.isVisible();
      });
    }
  }]);
  return PagePicklistOption;
}();

module.exports = PagePicklistOption;