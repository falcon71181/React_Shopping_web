"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _menuContent = _interopRequireDefault(require("../menuContent"));

describe('<MenuContent/>', function () {
  it('should render the Spinner when isLoading is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_menuContent["default"], {
      isLoading: true
    }, _react["default"].createElement("span", null)));
    expect(component.find('Spinner').exists()).toBe(true);
  });
  it('should pass the right props to Spinner when isLoading is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_menuContent["default"], {
      isLoading: true
    }, _react["default"].createElement("span", null)));
    expect(component.find('Spinner').props()).toEqual(expect.objectContaining({
      assistiveText: 'loading menu',
      isVisible: true,
      size: 'small'
    }));
  });
  it('should render the children passed when isLoading is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_menuContent["default"], {
      isLoading: false
    }, _react["default"].createElement("span", null, "content")));
    expect(component.find('Spinner').exists()).toBe(false);
    expect(component.find('span').text()).toBe('content');
  });
});