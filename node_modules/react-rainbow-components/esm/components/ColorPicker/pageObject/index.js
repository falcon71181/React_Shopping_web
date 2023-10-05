import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var PageColorPicker = function () {
  function PageColorPicker(rootElement) {
    _classCallCheck(this, PageColorPicker);

    this.rootElement = rootElement;
  }

  _createClass(PageColorPicker, [{
    key: "getSaturationPointer",
    value: function () {
      var _getSaturationPointer = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", $(this.rootElement).$('button'));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSaturationPointer() {
        return _getSaturationPointer.apply(this, arguments);
      }

      return getSaturationPointer;
    }()
  }, {
    key: "clickSaturation",
    value: function () {
      var _clickSaturation = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getSaturationPointer();

              case 2:
                _context2.next = 4;
                return _context2.sent.click();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clickSaturation() {
        return _clickSaturation.apply(this, arguments);
      }

      return clickSaturation;
    }()
  }, {
    key: "getHueInput",
    value: function () {
      var _getHueInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", $(this.rootElement).$('input[type=range]'));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getHueInput() {
        return _getHueInput.apply(this, arguments);
      }

      return getHueInput;
    }()
  }, {
    key: "clickHue",
    value: function () {
      var _clickHue = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getHueInput();

              case 2:
                _context4.next = 4;
                return _context4.sent.click();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function clickHue() {
        return _clickHue.apply(this, arguments);
      }

      return clickHue;
    }()
  }, {
    key: "getHexInput",
    value: function () {
      var _getHexInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", $(this.rootElement).$('input[type=text]'));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getHexInput() {
        return _getHexInput.apply(this, arguments);
      }

      return getHexInput;
    }()
  }, {
    key: "getRgbaInput",
    value: function () {
      var _getRgbaInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6(index) {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return $(this.rootElement).$$('input[type=number]');

              case 2:
                _context6.t0 = index;
                return _context6.abrupt("return", _context6.sent[_context6.t0]);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getRgbaInput(_x) {
        return _getRgbaInput.apply(this, arguments);
      }

      return getRgbaInput;
    }()
  }, {
    key: "getDefaultColorsInput",
    value: function () {
      var _getDefaultColorsInput = _asyncToGenerator(_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", $(this.rootElement).$('input[type=radio]'));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getDefaultColorsInput() {
        return _getDefaultColorsInput.apply(this, arguments);
      }

      return getDefaultColorsInput;
    }()
  }, {
    key: "getDefaultColorsLabel",
    value: function () {
      var _getDefaultColorsLabel = _asyncToGenerator(_regeneratorRuntime.mark(function _callee8() {
        var id;
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getDefaultColorsInput();

              case 2:
                _context8.next = 4;
                return _context8.sent.getAttribute('id');

              case 4:
                id = _context8.sent;
                return _context8.abrupt("return", $(this.rootElement).$("label[for=\"".concat(id, "\"]")));

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getDefaultColorsLabel() {
        return _getDefaultColorsLabel.apply(this, arguments);
      }

      return getDefaultColorsLabel;
    }()
  }, {
    key: "clickDefaultColors",
    value: function () {
      var _clickDefaultColors = _asyncToGenerator(_regeneratorRuntime.mark(function _callee9() {
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getDefaultColorsLabel();

              case 2:
                _context9.next = 4;
                return _context9.sent.click();

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function clickDefaultColors() {
        return _clickDefaultColors.apply(this, arguments);
      }

      return clickDefaultColors;
    }()
  }, {
    key: "getColor",
    value: function () {
      var _getColor = _asyncToGenerator(_regeneratorRuntime.mark(function _callee10() {
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getHexInput();

              case 2:
                return _context10.abrupt("return", _context10.sent.getValue());

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getColor() {
        return _getColor.apply(this, arguments);
      }

      return getColor;
    }()
  }, {
    key: "getAlpha",
    value: function () {
      var _getAlpha = _asyncToGenerator(_regeneratorRuntime.mark(function _callee11() {
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getRgbaInput(3);

              case 2:
                return _context11.abrupt("return", _context11.sent.getValue());

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getAlpha() {
        return _getAlpha.apply(this, arguments);
      }

      return getAlpha;
    }()
  }, {
    key: "isSaturationFocused",
    value: function () {
      var _isSaturationFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee12() {
        var buttonEl;
        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getSaturationPointer();

              case 2:
                buttonEl = _context12.sent;
                _context12.next = 5;
                return buttonEl.isExisting();

              case 5:
                _context12.t0 = _context12.sent;

                if (!_context12.t0) {
                  _context12.next = 10;
                  break;
                }

                _context12.next = 9;
                return buttonEl.isFocused();

              case 9:
                _context12.t0 = _context12.sent;

              case 10:
                return _context12.abrupt("return", _context12.t0);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function isSaturationFocused() {
        return _isSaturationFocused.apply(this, arguments);
      }

      return isSaturationFocused;
    }()
  }, {
    key: "isHueFocused",
    value: function () {
      var _isHueFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee13() {
        var rangeEl;
        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getHueInput();

              case 2:
                rangeEl = _context13.sent;
                _context13.next = 5;
                return rangeEl.isExisting();

              case 5:
                _context13.t0 = _context13.sent;

                if (!_context13.t0) {
                  _context13.next = 10;
                  break;
                }

                _context13.next = 9;
                return rangeEl.isFocused();

              case 9:
                _context13.t0 = _context13.sent;

              case 10:
                return _context13.abrupt("return", _context13.t0);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function isHueFocused() {
        return _isHueFocused.apply(this, arguments);
      }

      return isHueFocused;
    }()
  }, {
    key: "isAlphaFocused",
    value: function () {
      var _isAlphaFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee14() {
        var rangeEl;
        return _regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return $(this.rootElement).$$('input[type=range]');

              case 2:
                rangeEl = _context14.sent[1];
                _context14.next = 5;
                return rangeEl.isExisting();

              case 5:
                _context14.t0 = _context14.sent;

                if (!_context14.t0) {
                  _context14.next = 10;
                  break;
                }

                _context14.next = 9;
                return rangeEl.isFocused();

              case 9:
                _context14.t0 = _context14.sent;

              case 10:
                return _context14.abrupt("return", _context14.t0);

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function isAlphaFocused() {
        return _isAlphaFocused.apply(this, arguments);
      }

      return isAlphaFocused;
    }()
  }, {
    key: "isHexFocused",
    value: function () {
      var _isHexFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee15() {
        var inputEl;
        return _regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getHexInput();

              case 2:
                inputEl = _context15.sent;
                _context15.next = 5;
                return inputEl.isExisting();

              case 5:
                _context15.t0 = _context15.sent;

                if (!_context15.t0) {
                  _context15.next = 10;
                  break;
                }

                _context15.next = 9;
                return inputEl.isFocused();

              case 9:
                _context15.t0 = _context15.sent;

              case 10:
                return _context15.abrupt("return", _context15.t0);

              case 11:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function isHexFocused() {
        return _isHexFocused.apply(this, arguments);
      }

      return isHexFocused;
    }()
  }, {
    key: "isRgbaFocused",
    value: function () {
      var _isRgbaFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee16() {
        var index,
            inputEl,
            _args16 = arguments;
        return _regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                index = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : 0;
                _context16.next = 3;
                return this.getRgbaInput(index);

              case 3:
                inputEl = _context16.sent;
                _context16.next = 6;
                return inputEl.isExisting();

              case 6:
                _context16.t0 = _context16.sent;

                if (!_context16.t0) {
                  _context16.next = 11;
                  break;
                }

                _context16.next = 10;
                return inputEl.isFocused();

              case 10:
                _context16.t0 = _context16.sent;

              case 11:
                return _context16.abrupt("return", _context16.t0);

              case 12:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function isRgbaFocused() {
        return _isRgbaFocused.apply(this, arguments);
      }

      return isRgbaFocused;
    }()
  }, {
    key: "isDefaultColorsFocused",
    value: function () {
      var _isDefaultColorsFocused = _asyncToGenerator(_regeneratorRuntime.mark(function _callee17() {
        var inputEl;
        return _regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getDefaultColorsInput();

              case 2:
                inputEl = _context17.sent;
                _context17.next = 5;
                return inputEl.isExisting();

              case 5:
                _context17.t0 = _context17.sent;

                if (!_context17.t0) {
                  _context17.next = 10;
                  break;
                }

                _context17.next = 9;
                return inputEl.isFocused();

              case 9:
                _context17.t0 = _context17.sent;

              case 10:
                return _context17.abrupt("return", _context17.t0);

              case 11:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function isDefaultColorsFocused() {
        return _isDefaultColorsFocused.apply(this, arguments);
      }

      return isDefaultColorsFocused;
    }()
  }]);

  return PageColorPicker;
}();

module.exports = PageColorPicker;