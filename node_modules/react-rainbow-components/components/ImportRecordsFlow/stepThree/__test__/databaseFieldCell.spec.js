"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _databaseFieldCell = _interopRequireDefault(require("../databaseFieldCell"));

describe('<DatabaseFieldCell />', function () {
  it('should show a required ui element when field is required', function () {
    var props = {
      value: 'name',
      row: {
        required: true
      }
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_databaseFieldCell["default"], props));
    expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
  });
  it('should render text value properly', function () {
    var props = {
      value: 'name',
      row: {
        required: false
      }
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_databaseFieldCell["default"], props));
    expect(component.text()).toBe(props.value);
  });
});