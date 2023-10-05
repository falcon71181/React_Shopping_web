"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _component = _interopRequireDefault(require("../component"));

window.grecaptcha = {
  ready: jest.fn()
};
describe('<ReCaptchaComponent />', function () {
  it('it should call the ready function', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      value: "site-Key",
      theme: "light",
      size: "normal",
      tabIndex: 0,
      onChange: function onChange() {}
    }));
    expect(window.grecaptcha.ready).toHaveBeenCalledTimes(1);
  });
  it('it should call the render function with the right params', function () {
    window.grecaptcha = {
      ready: function ready(callback) {
        return callback();
      },
      render: jest.fn()
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_component["default"], {
      siteKey: "site-key",
      theme: "light",
      size: "normal",
      tabIndex: 0,
      onChange: function onChange() {}
    }));

    var _component$instance = component.instance(),
        recaptchaID = _component$instance.recaptchaID;

    expect(component.find("div#".concat(recaptchaID)).exists()).toBe(true);
    expect(window.grecaptcha.render).toHaveBeenCalledWith(recaptchaID, {
      sitekey: 'site-key',
      theme: 'light',
      size: 'normal',
      tabIndex: 0,
      callback: expect.any(Function),
      'expired-callback': expect.any(Function),
      'error-callback': expect.any(Function)
    });
  });
});