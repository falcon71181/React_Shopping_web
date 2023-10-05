"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getUrl = _interopRequireDefault(require("../getUrl"));

describe('getUrl function', function () {
  it('should return the recaptcha url without the lang param', function () {
    var url = (0, _getUrl["default"])();
    expect(url).toBe('https://www.google.com/recaptcha/api.js?render=explicit');
  });
  it('should return the recaptcha url with the lang param', function () {
    var url = (0, _getUrl["default"])('es');
    expect(url).toBe('https://www.google.com/recaptcha/api.js?render=explicit&hl=es');
  });
});