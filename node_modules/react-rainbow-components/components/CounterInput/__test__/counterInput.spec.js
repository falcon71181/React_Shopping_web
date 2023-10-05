"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<CounterInput />', function () {
  it('should mount a input type number with a value of 5', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: 5
    }));
    var input = component.find('input');
    expect(input.prop('type')).toBe('number');
    expect(input.prop('value')).toBe(5);
  });
  it('should fire onChange with -1 as argument when click in minusButton', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeMockFn,
      value: 0
    }));
    var button = component.find('button');
    var minusButton = button.at(0);
    minusButton.simulate('mouseDown');
    expect(onChangeMockFn).toHaveBeenCalledWith(-1);
  });
  it('should fire onChange with 1 as argument when click in plusButton', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeMockFn,
      value: 0
    }));
    var button = component.find('button');
    var plusButton = button.at(1);
    plusButton.simulate('mouseDown');
    expect(onChangeMockFn).toHaveBeenCalledWith(1);
  });
  it('should fire onChange `min` as argument when click in plusButton', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeMockFn,
      value: 5,
      min: 10
    }));
    var button = component.find('button');
    var plusButton = button.at(1);
    plusButton.simulate('mouseDown');
    expect(onChangeMockFn).toHaveBeenCalledWith(10);
  });
  it('should fire onChange `max` as argument when click in minusButton', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeMockFn,
      value: 101,
      max: 100
    }));
    var button = component.find('button');
    var plusButton = button.at(0);
    plusButton.simulate('mouseDown');
    expect(onChangeMockFn).toHaveBeenCalledWith(100);
  });
  it('should fire onChange with -2 as argument when click in minusButton and step = 2', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeMockFn,
      step: 2
    }));
    var button = component.find('button');
    var minusButton = button.at(0);
    minusButton.simulate('mouseDown');
    expect(onChangeMockFn).toHaveBeenCalledWith(-2);
  });
  it('should fire onChange with 2 as argument when click in plusButton and step = 2', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeMockFn,
      step: 2
    }));
    var button = component.find('button');
    var plusButton = button.at(1);
    plusButton.simulate('mouseDown');
    expect(onChangeMockFn).toHaveBeenCalledWith(2);
  });
  it('should have plusButton disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: 5,
      max: 5
    }));
    var button = component.find('button');
    var plusButton = button.at(1);
    expect(plusButton.prop('disabled')).toBe(true);
  });
  it('should have minusButton disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: -5,
      min: -5
    }));
    var button = component.find('button');
    var minusButton = button.at(0);
    expect(minusButton.prop('disabled')).toBe(true);
  });
  it('should have an input, minusButton and plusButton disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true
    }));
    var button = component.find('button');
    var input = component.find('input');
    var minusButton = button.at(0);
    var plusButton = button.at(1);
    expect(input.prop('disabled')).toBe(true);
    expect(minusButton.prop('disabled')).toBe(true);
    expect(plusButton.prop('disabled')).toBe(true);
  });
  it('should have an input active and minusButton and plusButton disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      readOnly: true
    }));
    var button = component.find('button');
    var input = component.find('input');
    var minusButton = button.at(0);
    var plusButton = button.at(1);
    expect(input.prop('disabled')).toBe(false);
    expect(minusButton.prop('disabled')).toBe(true);
    expect(plusButton.prop('disabled')).toBe(true);
  });
});