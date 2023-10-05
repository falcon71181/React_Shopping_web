"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _context = require("../../context");

var _ = require("..");

describe('<Rgba />', function () {
  it('should fire onChange with object containing the new alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Rgba, null)));
    var result = [0, 0, 0, 1];
    var values = [255, 255, 255, 0.5];
    values.forEach(function (value, index) {
      result[index] = value;
      var normalizeValue = index === 3 ? value * 100 : value;
      wrapper.find('input[type="number"]').at(index).simulate('change', {
        target: {
          value: normalizeValue
        }
      });
      wrapper.update();
      expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
        rgba: result
      }));
    });
  });
  it('should fire onChange with object containing the default alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 0.5],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Rgba, null)));
    wrapper.find('input[type="number"]').at(3).simulate('change', {
      target: {
        value: 'foo'
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      rgba: [0, 0, 0, 0]
    }));
  });
  it('should fire onChange with object containing the default component color', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [255, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_.Rgba, null)));
    wrapper.find('input[type="number"]').first().simulate('change', {
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