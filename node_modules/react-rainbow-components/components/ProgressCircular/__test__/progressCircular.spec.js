"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _container = _interopRequireDefault(require("../styled/container"));

var _percentValue = _interopRequireDefault(require("../styled/percentValue"));

describe('<ProgressCircular/>', function () {
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
  it('should has set the value passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      value: 25
    }));
    expect(component.find('ProgressRing').prop('percent')).toBe(25);
    expect(component.find(_percentValue["default"]).text()).toBe('25%');
  });
});