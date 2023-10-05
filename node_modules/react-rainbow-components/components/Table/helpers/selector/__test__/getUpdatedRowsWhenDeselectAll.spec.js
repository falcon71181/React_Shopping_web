"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getUpdatedRowsWhenDeselectAll = _interopRequireDefault(require("../getUpdatedRowsWhenDeselectAll"));

describe('getUpdatedRowsWhenDeselectAll', function () {
  it('should return an empty arra when rows is not passed', function () {
    expect((0, _getUpdatedRowsWhenDeselectAll["default"])()).toEqual([]);
  });
  it('should return the right rows', function () {
    var rows = [{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: true
    }];
    expect((0, _getUpdatedRowsWhenDeselectAll["default"])(rows)).toEqual([{
      key: 'row-1',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: false,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: false,
      isDisabled: false
    }]);
  });
});