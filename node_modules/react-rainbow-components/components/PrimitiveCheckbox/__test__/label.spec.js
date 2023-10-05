"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _label = _interopRequireDefault(require("../label"));

describe('<InputCheckboxLabel/>', function () {
  it('should set the inputId passed as the htmlFor prop in the label element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_label["default"], {
      label: "Input Label",
      inputId: "input-213"
    }));
    expect(component.find('label').prop('htmlFor')).toBe('input-213');
  });
});