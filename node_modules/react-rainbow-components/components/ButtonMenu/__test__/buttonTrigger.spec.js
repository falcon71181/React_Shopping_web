"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _buttonTrigger = _interopRequireDefault(require("../buttonTrigger"));

describe('<ButtonTrigger/>', function () {
  it('should render a Button with label only when no icon is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_buttonTrigger["default"], {
      label: "Menu"
    }));
    expect(component.render().html()).toBe('Menu');
  });
  it('should render a Button with label and left icon when iconPosition value is different from "right"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_buttonTrigger["default"], {
      icon: _react["default"].createElement("svg", null),
      label: "Menu"
    }));
    expect(component.render().html()).toMatch(/<span class="[A-Za-z\- ]*"><svg><\/svg><\/span>Menu/);
  });
  it('should render a Button with label and right icon when iconPosition value is "right"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_buttonTrigger["default"], {
      icon: _react["default"].createElement("svg", null),
      iconPosition: "right",
      label: "Menu"
    }));
    expect(component.render().html()).toMatch(/Menu<span class="[A-Za-z\- ]*"><svg><\/svg><\/span>/);
  });
});