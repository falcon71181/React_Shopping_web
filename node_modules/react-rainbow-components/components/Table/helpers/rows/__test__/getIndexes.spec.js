"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getIndexes = _interopRequireDefault(require("../getIndexes"));

var rows = [{
  key: 'row-1'
}, {
  key: 'row-2'
}, {
  key: 'row-3'
}];
describe('getIndexes', function () {
  it('should return an empty object when rows passed is not an array or an empty array', function () {
    var values = [[], {}, null, undefined, '', 'abcd', 1234, function () {}];
    values.forEach(function (value) {
      expect((0, _getIndexes["default"])(value)).toEqual({});
    });
  });
  it('should return the right indexes object when rows are passed', function () {
    expect((0, _getIndexes["default"])(rows)).toEqual({
      'row-1': {
        rowIndex: 0
      },
      'row-2': {
        rowIndex: 1
      },
      'row-3': {
        rowIndex: 2
      }
    });
  });
});