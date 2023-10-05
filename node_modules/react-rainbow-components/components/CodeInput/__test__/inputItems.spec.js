"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _inputItems = _interopRequireDefault(require("../inputItems"));

var _inputItem = _interopRequireDefault(require("../inputItem"));

describe('<InputItems />', function () {
  it('should have 4 InputItem elements rendered when value array has a length of 4', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItems["default"], {
      value: ['', '', '', '']
    }));
    expect(component.find(_inputItem["default"]).length).toBe(4);
  });
  it('should have isActive only on the focusedIndex input', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItems["default"], {
      value: ['1', '', '', ''],
      focusedIndex: 1
    }));
    expect(component.find(_inputItem["default"]).at(1).prop('isActive')).toBe(true);
  });
  it('should have tabIndex passed only to the focusedIndex input', function () {
    var tabIndex = 3;
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItems["default"], {
      value: ['1', '', '', ''],
      focusedIndex: 1,
      tabIndex: tabIndex
    }));
    expect(component.find(_inputItem["default"]).at(1).prop('tabIndex')).toBe(3);
  });
  it('should have the initial values properly assigned to each input', function () {
    var values = ['1', '2', '3', '4'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItems["default"], {
      value: values
    }));
    values.forEach(function (value, index) {
      expect(component.find(_inputItem["default"]).at(index).prop('value')).toBe(value);
    });
  });
  it('should have ref passed only to the focusedIndex input', function () {
    var ref = _react["default"].createRef();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItems["default"], {
      value: ['1', '', '', ''],
      focusedIndex: 1,
      ref: ref
    }));
    expect(component.find(_inputItem["default"]).at(0).getDOMNode()).not.toEqual(ref.current);
    expect(component.find(_inputItem["default"]).at(1).getDOMNode()).toEqual(ref.current);
  });
});