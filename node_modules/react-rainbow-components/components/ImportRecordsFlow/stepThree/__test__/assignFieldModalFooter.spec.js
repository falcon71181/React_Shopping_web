"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _assignFieldModalFooter = _interopRequireDefault(require("../assignFieldModalFooter"));

var _cancelButton = _interopRequireDefault(require("../styled/cancelButton"));

describe('<AssignFieldModalFooter />', function () {
  it('should run cancel method when cancel button is clicked', function () {
    var onCancelFn = jest.fn();
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_assignFieldModalFooter["default"], {
      onCancel: onCancelFn
    }));
    component.find(_cancelButton["default"]).simulate('click');
    expect(onCancelFn).toHaveBeenCalled();
  });
  it('should run assign method when assign button is clicked', function () {
    var onAssignFn = jest.fn();
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_assignFieldModalFooter["default"], {
      onAssign: onAssignFn
    }));
    component.find('Button').simulate('click');
    expect(onAssignFn).toHaveBeenCalled();
  });
  it('should disable the button when disable param is set to true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_assignFieldModalFooter["default"], {
      isAssignButtonDisabled: true
    }));
    expect(component.find('Button').prop('disabled')).toBe(true);
  });
});