"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getRows = _interopRequireDefault(require("../getRows"));

jest.mock('../getRowSelectionInputType', function () {
  return jest.fn(function () {
    return 'checkbox';
  });
});
jest.mock('../computeUniqueRowKey', function () {
  return jest.fn(function () {
    return 'row-1';
  });
});
jest.mock('../../selector/isSelectedRow', function () {
  return jest.fn(function () {
    return true;
  });
});
jest.mock('../../selector/isDisabledRow', function () {
  return jest.fn(function () {
    return false;
  });
});
describe('getRows', function () {
  it('should return an empty array when any params are passed', function () {
    expect((0, _getRows["default"])()).toEqual([]);
  });
  it('should return the right rows', function () {
    var data = [{
      name: 'John'
    }, {
      name: 'Pepe'
    }];
    expect((0, _getRows["default"])({
      rows: data,
      maxRowSelection: 5,
      keyField: 'id',
      selectedRowsKeys: {}
    })).toEqual([{
      key: 'row-1',
      inputType: 'checkbox',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-1',
      inputType: 'checkbox',
      isSelected: true,
      isDisabled: false
    }]);
  });
});