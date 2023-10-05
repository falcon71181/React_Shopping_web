"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _color = _interopRequireDefault(require("../defaultColors/color"));

describe('<Color />', function () {
  it('should fire onChange with object containing the new color', function () {
    var onChangeMockFn = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_color["default"], {
      color: "#000000",
      onChange: onChangeMockFn
    }));
    expect(wrapper.find('label').first().prop('style')).toStrictEqual({
      backgroundColor: '#000000'
    });
    wrapper.find('input[type="radio"]').first().simulate('change', {
      target: {
        checked: true
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith({
      hex: '#000000',
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0]
    });
  });
  it('should return null when the color is not valid', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_color["default"], {
      color: "foo"
    }));
    expect(wrapper.children().length).toBe(0);
  });
});