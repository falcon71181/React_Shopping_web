"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<Chip/>', function () {
  it('should set the label passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "testing Chip"
    }));
    expect(component.text()).toBe('testing Chip');
  });
  it('should fire an event when the close button is clicked', function () {
    var onDeleteMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onDelete: onDeleteMockFn
    }));
    component.find('button').simulate('click');
    expect(onDeleteMockFn).toHaveBeenCalledWith(expect.any(Object));
  });
  it('should set isTrue in RenderIf to true when onDelete is passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
      onDelete: function onDelete() {}
    }));
    expect(component.find('RenderIf').prop('isTrue')).toBeTruthy();
  });
  it(' should set isTrue in RenderIf to false when onDelete is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "testing Chip"
    }));
    expect(component.find('RenderIf').prop('isTrue')).toBe(false);
  });
});