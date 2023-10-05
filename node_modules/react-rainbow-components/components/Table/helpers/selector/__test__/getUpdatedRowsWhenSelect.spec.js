"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getUpdatedRowsWhenSelect = _interopRequireDefault(require("../getUpdatedRowsWhenSelect"));

var rows = [{
  key: 'row-1',
  isSelected: true,
  isDisabled: false
}, {
  key: 'row-2',
  isSelected: false,
  isDisabled: false
}, {
  key: 'row-3',
  isSelected: false,
  isDisabled: false
}];
var indexes = {
  'row-1': {
    rowIndex: 0
  },
  'row-2': {
    rowIndex: 1
  },
  'row-3': {
    rowIndex: 2
  }
};
describe('getUpdatedRowsWhenSelect', function () {
  it('should return an empty array when any params are passed', function () {
    expect((0, _getUpdatedRowsWhenSelect["default"])()).toEqual([]);
  });
  it('should return the same rows passed when rows are the only param passed', function () {
    expect((0, _getUpdatedRowsWhenSelect["default"])({
      rows: rows
    })).toEqual([{
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
  it('should return the right rows when maxRowSelection is less than 1', function () {
    var values = [0, 1];
    values.forEach(function (value) {
      var selectedRowsKeys = {
        'row-1': true
      };
      expect((0, _getUpdatedRowsWhenSelect["default"])({
        maxRowSelection: value,
        rows: rows,
        indexes: indexes,
        isMultiple: false,
        rowKeyValue: 'row-2',
        lastSelectedRowKey: undefined,
        selectedRowsKeys: selectedRowsKeys
      })).toEqual([{
        key: 'row-1',
        isSelected: true,
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
      expect(selectedRowsKeys).toEqual({
        'row-1': true
      });
    });
  });
  it('should return the right rows when maxRowSelection is 2', function () {
    var selectedRowsKeys = {
      'row-1': true
    };
    expect((0, _getUpdatedRowsWhenSelect["default"])({
      maxRowSelection: 2,
      rows: rows,
      indexes: indexes,
      isMultiple: false,
      rowKeyValue: 'row-2',
      lastSelectedRowKey: undefined,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
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
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true
    });
  });
  it('should return the right rows when maxRowSelection is 3', function () {
    var selectedRowsKeys = {
      'row-1': true
    };
    expect((0, _getUpdatedRowsWhenSelect["default"])({
      maxRowSelection: 3,
      rows: rows,
      indexes: indexes,
      isMultiple: false,
      rowKeyValue: 'row-2',
      lastSelectedRowKey: undefined,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
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
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true
    });
  });
  it('should return the right rows when is multiple and the last row selected is "row-1"', function () {
    var selectedRowsKeys = {
      'row-1': false,
      'row-2': false,
      'row-3': false
    };
    expect((0, _getUpdatedRowsWhenSelect["default"])({
      maxRowSelection: 3,
      rows: [{
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
      }],
      indexes: indexes,
      isMultiple: true,
      rowKeyValue: 'row-3',
      lastSelectedRowKey: 'row-1',
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-2',
      isSelected: true,
      isDisabled: false
    }, {
      key: 'row-3',
      isSelected: true,
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true,
      'row-3': true
    });
  });
});