"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _bar = _interopRequireDefault(require("../styled/bar"));

var _container = _interopRequireDefault(require("../styled/container"));

describe('<ProgressBar/>', function () {
  it('should has set the value passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      value: 25
    }));
    expect(component.find(_bar["default"]).prop('style').width).toBe('25%');
  });
  it('should be accessible', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      value: 25
    }));
    expect(component.find(_container["default"]).props()).toEqual(expect.objectContaining({
      role: 'progressbar',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
      'aria-valuenow': 25
    }));
  });
});