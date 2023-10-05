"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _index = _interopRequireDefault(require("../index"));

describe('<Notification/>', function () {
  it('should fire an event when the close button is clicked', function () {
    var onClickFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: "Notification test",
      onRequestClose: onClickFn
    }));
    component.find('button').simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
  it('should set the prop size as "small" in ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: "Notification test"
    }));
    expect(component.find(_ButtonIcon["default"]).prop('size')).toBe('small');
  });
  it('should not display the close button when hideCloseButton props is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: "Notification test",
      hideCloseButton: true
    }));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(false);
  });
});