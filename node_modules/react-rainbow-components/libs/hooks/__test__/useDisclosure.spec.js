"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _useDisclosure = _interopRequireDefault(require("../useDisclosure"));

describe('useDisclosure', function () {
  it('should set isOpen to true when open function is called', function () {
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useDisclosure["default"])(value);
    }, {
      initialProps: false
    });
    expect(hook.result.current.isOpen).toBe(false);
    (0, _reactHooks.act)(function () {
      hook.result.current.open();
    });
    expect(hook.result.current.isOpen).toBe(true);
  });
  it('should set isOpen to false when close function is called', function () {
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useDisclosure["default"])(value);
    }, {
      initialProps: true
    });
    expect(hook.result.current.isOpen).toBe(true);
    (0, _reactHooks.act)(function () {
      hook.result.current.close();
    });
    expect(hook.result.current.isOpen).toBe(false);
  });
  it('should toggle  value of isOpen when toggle function is called', function () {
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useDisclosure["default"])(value);
    }, {
      initialProps: false
    });
    (0, _reactHooks.act)(function () {
      hook.result.current.toggle();
    });
    expect(hook.result.current.isOpen).toBe(true);
    (0, _reactHooks.act)(function () {
      hook.result.current.toggle();
    });
    expect(hook.result.current.isOpen).toBe(false);
  });
});