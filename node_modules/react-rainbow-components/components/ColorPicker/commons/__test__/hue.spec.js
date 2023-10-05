"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _context = require("../../context");

var _ = require("..");

describe('<Hue />', function () {
  it('should fire onChange with object containing the new hue.', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      hsv: [0, 0, 0],
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Hue, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 100
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      hsv: [100, 0, 0]
    }));
  });
  it('should fire onChange with object containing the default hue.', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      hsv: [360, 0, 0],
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Hue, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 'foo'
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      hsv: [0, 0, 0]
    }));
  });
});