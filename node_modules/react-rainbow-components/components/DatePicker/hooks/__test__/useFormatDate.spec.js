"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _useFormatDate = _interopRequireDefault(require("../useFormatDate"));

describe('useFormatDate', function () {
  it('should return empty string when value is empty', function () {
    var params = [{
      value: null,
      selecttionType: 'single'
    }, {
      value: undefined,
      selecttionType: 'single'
    }, {
      value: null,
      selecttionType: 'range'
    }, {
      value: undefined,
      selecttionType: 'range'
    }, {
      value: [],
      selecttionType: 'range'
    }];
    params.forEach(function (param) {
      var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _useFormatDate["default"])({
          value: param.value,
          format: 'large',
          locale: 'en-US',
          selectionType: param.selectionType
        });
      }),
          result = _renderHook.result;

      expect(result.current).toBe('');
    });
  });
  it('should return single formatted date when selectionType is single', function () {
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useFormatDate["default"])({
        value: value,
        format: 'large',
        locale: 'en-US',
        selectionType: 'single'
      });
    }, {
      initialProps: new Date(2018, 1, 1)
    });
    expect(hook.result.current).toBe('Thursday, 02/01/2018');
  });
  it('should return formatted range when selectionType is range', function () {
    var date1 = new Date(2018, 1, 1);
    var date2 = new Date(2018, 5, 4);
    var hook = (0, _reactHooks.renderHook)(function (value) {
      return (0, _useFormatDate["default"])({
        value: value,
        format: 'large',
        locale: 'en-US',
        selectionType: 'range'
      });
    }, {
      initialProps: [date1]
    });
    hook.rerender([date1, date2]);
    expect(hook.result.current).toBe('Thursday, 02/01/2018 - Monday, 06/04/2018');
  });
});