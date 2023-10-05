"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageAccordionSection = function () {
  function PageAccordionSection(rootElement) {
    (0, _classCallCheck2["default"])(this, PageAccordionSection);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageAccordionSection, [{
    key: "root",
    get: function get() {
      return $(this.rootElement);
    }
  }, {
    key: "summary",
    get: function get() {
      return this.root.then(function (root) {
        return root.$('[data-id="accordion-section-summary"]');
      });
    }
  }, {
    key: "content",
    get: function get() {
      return this.root.then(function (root) {
        return root.$('[data-id="accordion-section-content"]');
      });
    }
  }, {
    key: "label",
    get: function get() {
      return this.root.then(function (root) {
        return root.$('[data-id="accordion-section-label"]');
      });
    }
  }, {
    key: "clickButton",
    value: function () {
      var _clickButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var elem;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.summary;

              case 2:
                elem = _context.sent;
                return _context.abrupt("return", elem.click());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickButton() {
        return _clickButton.apply(this, arguments);
      }

      return clickButton;
    }()
  }, {
    key: "hasFocusButton",
    value: function () {
      var _hasFocusButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var elem;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.summary;

              case 2:
                elem = _context2.sent;
                return _context2.abrupt("return", elem.isFocused());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hasFocusButton() {
        return _hasFocusButton.apply(this, arguments);
      }

      return hasFocusButton;
    }()
  }, {
    key: "isExpanded",
    value: function () {
      var _isExpanded = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        var elem;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.content;

              case 2:
                elem = _context3.sent;
                return _context3.abrupt("return", elem.isDisplayed());

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isExpanded() {
        return _isExpanded.apply(this, arguments);
      }

      return isExpanded;
    }()
  }, {
    key: "getLabel",
    value: function () {
      var _getLabel = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        var elem;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.label;

              case 2:
                elem = _context4.sent;
                return _context4.abrupt("return", elem.getText());

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getLabel() {
        return _getLabel.apply(this, arguments);
      }

      return getLabel;
    }()
  }]);
  return PageAccordionSection;
}();

module.exports = PageAccordionSection;