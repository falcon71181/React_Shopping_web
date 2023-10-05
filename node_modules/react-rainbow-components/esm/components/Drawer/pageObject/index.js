import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function getPointOutsideDrawer(drawerPosition, drawerSize) {
  var x = drawerPosition.x > 0 ? drawerPosition.x - 2 : drawerSize.width + 2;
  var y = Math.round(drawerSize.height / 2);
  return {
    x: x,
    y: y
  };
}

var PageDrawer = function () {
  function PageDrawer(rootElement) {
    _classCallCheck(this, PageDrawer);

    this.rootElement = rootElement;
  }

  _createClass(PageDrawer, [{
    key: "clickCloseButton",
    value: function () {
      var _clickCloseButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $(this.rootElement).$('[id="drawer-close-button"]').click();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickCloseButton() {
        return _clickCloseButton.apply(this, arguments);
      }

      return clickCloseButton;
    }()
  }, {
    key: "clickBackDrop",
    value: function () {
      var _clickBackDrop = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        var section, _getPointOutsideDrawe, x, y;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return $(this.rootElement).$('[id="drawer-close-button"]').waitForDisplayed();

              case 2:
                _context2.next = 4;
                return $(this.rootElement).$('section[role="dialog"]');

              case 4:
                section = _context2.sent;
                _context2.t0 = getPointOutsideDrawer;
                _context2.next = 8;
                return section.getLocation();

              case 8:
                _context2.t1 = _context2.sent;
                _context2.next = 11;
                return section.getSize();

              case 11:
                _context2.t2 = _context2.sent;
                _getPointOutsideDrawe = (0, _context2.t0)(_context2.t1, _context2.t2);
                x = _getPointOutsideDrawe.x;
                y = _getPointOutsideDrawe.y;
                _context2.next = 17;
                return $(this.rootElement).$('[id="drawer-close-button"]').click({
                  x: x,
                  y: y
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickBackDrop() {
        return _clickBackDrop.apply(this, arguments);
      }

      return clickBackDrop;
    }()
  }, {
    key: "isOpen",
    value: function () {
      var _isOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $(this.rootElement).isExisting();

              case 2:
                _context3.t1 = _context3.sent;

                if (!_context3.t1) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return $(this.rootElement).$('section[role="dialog"]').isDisplayed();

              case 6:
                _context3.t1 = _context3.sent;

              case 7:
                _context3.t0 = _context3.t1;

                if (!_context3.t0) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 11;
                return $(this.rootElement).$('[id="drawer-close-button"]').isDisplayed();

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                return _context3.abrupt("return", _context3.t0);

              case 13:
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
      var _hasFocusCloseButton = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", $(this.rootElement).$('[id="drawer-close-button"]').isFocused());

              case 1:
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
      var _waitUntilOpen = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6() {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return browser.pause(1000);

              case 2:
                _context6.next = 4;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
                  return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this.isOpen();

                        case 2:
                          return _context5.abrupt("return", _context5.sent);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 4:
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
      var _waitUntilClose = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8() {
        var _this2 = this;

        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return browser.pause(1000);

              case 2:
                _context8.next = 4;
                return browser.waitUntil(_asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
                  return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return $(_this2.rootElement).isExisting();

                        case 2:
                          return _context7.abrupt("return", !_context7.sent);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));

              case 4:
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

  return PageDrawer;
}();

module.exports = PageDrawer;