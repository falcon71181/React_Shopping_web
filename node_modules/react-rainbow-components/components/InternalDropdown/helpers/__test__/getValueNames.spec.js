"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getValueNames = _interopRequireDefault(require("../getValueNames"));

describe('getValueNames', function () {
  it('should return right value', function () {
    var values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, {
      name: 'ok'
    }, [{
      name: 'ok1'
    }, {
      name: 'ok2'
    }]];
    var expectedResults = [[], [], [], [], [], [], [], [], ['ok'], ['ok1', 'ok2']];
    values.forEach(function (value, index) {
      expect((0, _getValueNames["default"])(value)).toEqual(expectedResults[index]);
    });
  });
});