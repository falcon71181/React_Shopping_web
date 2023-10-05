import React from 'react';
import { mount } from 'enzyme';
import ReCaptchaComponent from '../component';
window.grecaptcha = {
  ready: jest.fn()
};
describe('<ReCaptchaComponent />', function () {
  it('it should call the ready function', function () {
    mount(React.createElement(ReCaptchaComponent, {
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
    var component = mount(React.createElement(ReCaptchaComponent, {
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