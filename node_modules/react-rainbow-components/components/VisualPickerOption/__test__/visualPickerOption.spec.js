"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

describe('<VisualPickerOption/>', function () {
  it('should set type radio to the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "option1"
    }));
    expect(component.find('input').prop('type')).toBe('radio');
  });
  it('should set type checkbox to the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "option1",
      multiple: true
    }));
    expect(component.find('input').prop('type')).toBe('checkbox');
  });
  it('should set correct name to the input element', function () {
    var groupName = 'group-1';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "option1",
      groupName: groupName
    }));
    expect(component.find('input').prop('name')).toBe(groupName);
  });
  it('should mark the input element as checked when is not multiple', function () {
    var value = 'option1';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "option1",
      value: value
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should mark the input element as checked when is multiple', function () {
    var value = ['option1'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "option1",
      multiple: true,
      value: value
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should not mark the input element as checked when is multiple and value passed is not an array', function () {
    var value = 'option1';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      name: "option1",
      multiple: true,
      value: value
    }));
    expect(component.find('input').prop('checked')).toBe(false);
  });
});