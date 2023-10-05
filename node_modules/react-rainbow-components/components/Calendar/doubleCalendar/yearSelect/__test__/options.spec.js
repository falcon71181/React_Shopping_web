"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _options = _interopRequireDefault(require("../options"));

var options = [{
  value: 'option 1',
  label: 'option 1'
}, {
  value: 'option 2',
  label: 'option 2'
}, {
  value: 'option 3',
  label: 'option 3'
}];
describe('YearSelect:Options', function () {
  it('should return the right amount of option items', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_options["default"], {
      options: options
    }));
    expect(component.children().length).toBe(3);
  });
  it('should pass the right props to option element', function () {
    var singleOption = [{
      value: 'option-1',
      label: 'option 1',
      disabled: false
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_options["default"], {
      options: singleOption
    }));
    expect(component.find('option').props()).toEqual({
      children: 'option 1',
      disabled: false,
      value: 'option-1'
    });
  });
});