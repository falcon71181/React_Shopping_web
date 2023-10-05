"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageModal = function () {
  function PageModal(rootElement) {
    (0, _classCallCheck2["default"])(this, PageModal);
    this.rootElement = rootElement;
  }

  (0, _createClass2["default"])(PageModal, [{
    key: "clickCloseButton",
    value: function () {
      var _clickCloseButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", $(_this.rootElement).$('[id="modal-close-button"]').isDisplayed());

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 2:
                _context2.next = 4;
                return $(this.rootElement).$('[id="modal-close-button"]').click();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickCloseButton() {
        return _clickCloseButton.apply(this, arguments);
      }

      return clickCloseButton;
    }()
  }, {
    key: "isOpen",
    value: function () {
      var _isOpen = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).isDisplayed();

              case 2:
                if (!_context3.sent) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 5;
                return $(this.rootElement).$('section[role="dialog"]').isDisplayed();

              case 5:
                _context3.t0 = _context3.sent;

                if (!_context3.t0) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 9;
                return $(this.rootElement).$('[id="modal-close-button"]').isDisplayed();

              case 9:
                _context3.t0 = _context3.sent;

              case 10:
                return _context3.abrupt("return", _context3.t0);

              case 11:
                return _context3.abrupt("return", false);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isOpen() {
        return _isOpen.apply(this, arguments);
      }

      return isOpen;
    }()
  }, {
    key: "hasFocusCloseButton",
    value: function () {
      var _hasFocusCloseButton = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return $(this.rootElement).$('[id="modal-close-button"]');

              case 2:
                return _context4.abrupt("return", _context4.sent.isFocused());

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function hasFocusCloseButton() {
        return _hasFocusCloseButton.apply(this, arguments);
      }

      return hasFocusCloseButton;
    }()
  }, {
    key: "waitUntilOpen",
    value: function () {
      var _waitUntilOpen = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this2.isOpen();

                        case 2:
                          return _context5.abrupt("return", _context5.sent);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function waitUntilOpen() {
        return _waitUntilOpen.apply(this, arguments);
      }

      return waitUntilOpen;
    }()
  }, {
    key: "waitUntilClose",
    value: function () {
      var _waitUntilClose = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return browser.waitUntil((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
                  return _regenerator["default"].wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this3.isOpen();

                        case 2:
                          return _context7.abrupt("return", !_context7.sent);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function waitUntilClose() {
        return _waitUntilClose.apply(this, arguments);
      }

      return waitUntilClose;
    }()
  }]);
  return PageModal;
}();

module.exports = PageModal;