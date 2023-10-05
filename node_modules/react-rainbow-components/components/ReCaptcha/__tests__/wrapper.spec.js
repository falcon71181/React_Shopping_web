"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _wrapper = _interopRequireDefault(require("../wrapper"));

window.grecaptcha = {
  ready: jest.fn()
};
describe('<ReCaptchaWrapper />', function () {
  it('should not render when isScriptLoaded and isScriptLoadSucceed are false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_wrapper["default"], null));
    component.setProps({
      isScriptLoaded: false,
      isScriptLoadSucceed: false
    });
    expect(component.children().length).toEqual(0);
  });
  it('should not render when isScriptLoaded is true and isScriptLoadSucceed is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_wrapper["default"], null));
    component.setProps({
      isScriptLoaded: true,
      isScriptLoadSucceed: false
    });
    expect(component.children().length).toEqual(0);
  });
  it('should render the ReCaptcha loader with the right props', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_wrapper["default"], {
      onChange: function onChange() {},
      onCreateRecaptcha: function onCreateRecaptcha() {},
      value: "site-key",
      theme: "dark",
      size: "normal",
      error: "error",
      tabIndex: 0,
      isScriptLoaded: true,
      isScriptLoadSucceed: true
    }));
    var loader = component.find('ReCaptchaComponent');
    expect(loader.exists()).toBe(true);
    expect(loader.props()).toEqual({
      onChange: expect.any(Function),
      onCreateRecaptcha: expect.any(Function),
      value: 'site-key',
      theme: 'dark',
      size: 'normal',
      error: 'error',
      tabIndex: 0,
      className: undefined,
      style: undefined
    });
  });
});