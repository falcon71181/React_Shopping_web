"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _context = require("../../context");

var _ = require("..");

describe('<Alpha />', function () {
  it('should fire onChange with object containing the new alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Alpha, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 1
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      rgba: [0, 0, 0, 0.01]
    }));
  });
  it('should fire onChange with object containing the default alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 0.5],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Alpha, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 'foo'
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      rgba: [0, 0, 0, 1]
    }));
  });
});