"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getNormalizeValue = _interopRequireDefault(require("../getNormalizeValue"));

describe('getNormalizeValue', function () {
  it('should return right value', function () {
    var values = [null, undefined, '', 'abc', 1, [], [1, 2], {}, {
      label: 'ok'
    }];
    var expectedResults = [{}, {}, {}, {}, {}, {}, {}, {}, {
      label: 'ok'
    }];
    values.forEach(function (value, index) {
      expect((0, _getNormalizeValue["default"])(value)).toEqual(expectedResults[index]);
    });
  });
});