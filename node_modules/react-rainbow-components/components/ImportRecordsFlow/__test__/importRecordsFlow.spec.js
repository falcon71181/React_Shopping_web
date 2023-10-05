"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _footer = _interopRequireDefault(require("../footer"));

describe('<ImportRecordsFlow />', function () {
  it('should set isBackButtonDisabled to true initially in Footer component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }));
    expect(component.find(_footer["default"]).prop('isBackButtonDisabled')).toBe(true);
  });
  it('should set isNextButtonDisabled to true initially in Footer component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }));
    expect(component.find(_footer["default"]).prop('isNextButtonDisabled')).toBe(true);
  });
  it('should set the right modal title initially', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }));
    expect(component.find('Modal').prop('title')).toBe('Whats do you want to do?');
  });
});