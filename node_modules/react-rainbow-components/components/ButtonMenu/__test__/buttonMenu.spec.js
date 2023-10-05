"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _buttonTrigger = _interopRequireDefault(require("../buttonTrigger"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

describe('<ButtonMenu/>', function () {
  it('should pass the icon passed to the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      icon: _react["default"].createElement("svg", null)
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('icon')).toEqual(_react["default"].createElement("svg", null));
  });
  it('should set the title passed in the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      title: "my title"
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('title')).toBe('my title');
  });
  it('should set the buttonVariant passed as variant in the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      buttonVariant: "brand"
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('variant')).toBe('brand');
  });
  it('should set the buttonSize passed in the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      buttonSize: "small"
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('size')).toBe('small');
  });
  it('should set the disabled passed in the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('disabled')).toBe(true);
  });
  it('should set the buttonShaded passed in the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      buttonShaded: true
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('shaded')).toBe(true);
  });
  it('should set the tabIndex passed in the ButtonIcon', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      tabIndex: 0
    }, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).prop('tabIndex')).toBe(0);
  });
  it('should render a ButtonIcon when no label is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement("span", null)));
    expect(component.find(_ButtonIcon["default"]).exists()).toBe(true);
  });
  it('should render a Button when label is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Menu",
      buttonVariant: "base"
    }, _react["default"].createElement("span", null)));
    expect(component.find('Button').exists()).toBe(true);
  });
  it('should pass the right icon, label and iconPosition to ButtonTrigger', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Menu",
      icon: _react["default"].createElement("svg", null),
      iconPosition: "right",
      buttonVariant: "base"
    }, _react["default"].createElement("span", null)));
    var trigger = component.find(_buttonTrigger["default"]);
    expect(trigger.prop('icon')).toEqual(_react["default"].createElement("svg", null));
    expect(trigger.prop('label')).toEqual('Menu');
    expect(trigger.prop('iconPosition')).toEqual('right');
  });
});