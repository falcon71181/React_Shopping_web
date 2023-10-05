import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useSimulatedLoading } from '..';
var list = Array(90);
describe('useSimulatedLoading', function () {
  it('should return array with all elements ', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var delta, _renderHook, result;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            delta = 20;
            _renderHook = renderHook(function () {
              return useSimulatedLoading(list, delta);
            }), result = _renderHook.result;
            expect(result.current).toEqual(list);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should return array with delta elements', _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
    var delta, _renderHook2, result;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            jest.spyOn(React, 'useReducer').mockImplementation(function () {
              return ['', function () {}];
            });
            delta = 20;
            _renderHook2 = renderHook(function () {
              return useSimulatedLoading(list, delta);
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