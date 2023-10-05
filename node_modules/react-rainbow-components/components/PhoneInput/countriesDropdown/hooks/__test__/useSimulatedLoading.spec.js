"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactHooks = require("@testing-library/react-hooks");

var _ = require("..");

var list = Array(90);
describe('useSimulatedLoading', function () {
  it('should return array with all elements ', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var delta, _renderHook, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            delta = 20;
            _renderHook = (0, _reactHooks.renderHook)(function () {
              return (0, _.useSimulatedLoading)(list, delta);
            }), result = _renderHook.result;
            expect(result.current).toEqual(list);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should return array with delta elements', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
    var delta, _renderHook2, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            jest.spyOn(_react["default"], 'useReducer').mockImplementation(function () {
              return ['', function () {}];
            });
            delta = 20;
            _renderHook2 = (0, _reactHooks.renderHook)(function () {
              return (0, _.useSimulatedLoading)(list, delta);
            }), result = _renderHook2.result;
            expect(result.current).toEqual(Array(delta));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});