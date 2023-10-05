"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getRowIndexByKey = _interopRequireDefault(require("../getRowIndexByKey"));

describe('getRowIndexByKey', function () {
  it('should return undefined when any argument is passed', function () {
    expect((0, _getRowIndexByKey["default"])()).toBeUndefined();
  });
  it('should return undefined when the key passed does not exists in indexes', function () {
    var keys = ['', 'abcd', 123, undefined, null, [], {}, function () {}];
    var indexes = {};
    keys.forEach(function (key) {
      expect((0, _getRowIndexByKey["default"])(indexes, key)).toBeUndefined();
    });
  });
  it('should return the right index', function () {
    var indexes = {
      name: {
        rowIndex: 1
      }
    };
    var key = 'name';
    expect((0, _getRowIndexByKey["default"])(indexes, key)).toBe(1);
  });
});