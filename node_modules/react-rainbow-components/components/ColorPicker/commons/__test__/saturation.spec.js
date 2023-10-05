"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _context = require("../../context");

var _saturation = _interopRequireDefault(require("../saturation"));

var _styled = require("../saturation/styled");

var _constants = require("../../../../libs/constants");

jest.mock('../saturation/helpers/calculateBright', function () {
  return function () {
    return 100;
  };
});
jest.mock('../saturation/helpers/calculateSaturation', function () {
  return function () {
    return 100;
  };
});
describe('<Saturation />', function () {
  it('should fire onChange with object containing the new color', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0],
      onChange: onChangeMockFn
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_saturation["default"], null)));
    wrapper.find(_styled.StyledColor).first().simulate('mousedown');
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith({
      hex: '#ff0000',
      hsv: [0, 100, 100],
      rgba: [255, 0, 0, 1]
    });
  });
  it('should render the pointer in the right position', function () {
    var context = {
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0]
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_saturation["default"], null)));
    expect(wrapper.find(_styled.StyledCircle).first().prop('style')).toEqual({
      top: '100%',
      left: '0%'
    });
  });
  it('should fire onChange with object containing the new color when using keyboard', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0],
      onChange: onChangeMockFn
    };
    var values = [{
      key: _constants.RIGHT_KEY,
      result: [0, 1, 0]
    }, {
      key: _constants.UP_KEY,
      result: [0, 1, 1]
    }, {
      key: _constants.LEFT_KEY,
      result: [0, 0, 1]
    }, {
      key: _constants.DOWN_KEY,
      result: [0, 0, 0]
    }];
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: context
    }, _react["default"].createElement(_saturation["default"], null)));
    wrapper.find(_styled.StyledCircle).first().simulate('focus');
    wrapper.update();
    values.forEach(function (_ref) {
      var key = _ref.key,
          result = _ref.result;
      wrapper.find(_styled.StyledColor).first().simulate('keydown', {
        keyCode: key
      });
      wrapper.update();
      expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
        hsv: result
      }));
    });
  });
});