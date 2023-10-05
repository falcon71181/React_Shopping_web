"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getRowsWithInitalSelectedRows = _interopRequireDefault(require("../getRowsWithInitalSelectedRows"));

var rows = [{
  key: 'row-1'
}, {
  key: 'row-2'
}, {
  key: 'row-3'
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
describe('getRowsWithInitalSelectedRows', function () {
  it('should return an empty array when any params are passed', function () {
    expect((0, _getRowsWithInitalSelectedRows["default"])()).toEqual([]);
  });
  it('should return the same rows passed when selectedRows passed is not an array', function () {
    var selectedRowsKeys = {};
    var values = ['asd', 123, {}, undefined, null];
    values.forEach(function (value) {
      expect((0, _getRowsWithInitalSelectedRows["default"])({
        rows: rows,
        selectedRows: value,
        maxRowSelection: 3,
        indexes: indexes,
        selectedRowsKeys: selectedRowsKeys
      })).toEqual([{
        key: 'row-1'
      }, {
        key: 'row-2'
      }, {
        key: 'row-3'
      }]);
      expect(selectedRowsKeys).toEqual({});
    });
  });
  it('should return the same rows passed when maxRowSelection passed is 0', function () {
    var selectedRowsKeys = {};
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: [],
      maxRowSelection: 0,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1'
    }, {
      key: 'row-2'
    }, {
      key: 'row-3'
    }]);
    expect(selectedRowsKeys).toEqual({});
  });
  it('should return the right rows when there are not selectedRows', function () {
    var selectedRowsKeys = {};
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: [],
      maxRowSelection: 1,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: false
    }, {
      key: 'row-2',
      isSelected: false
    }, {
      key: 'row-3',
      isSelected: false
    }]);
    expect(selectedRowsKeys).toEqual({});
  });
  it('should return the right rows when maxRowSelection is 1 and there is only one row selected', function () {
    var selectedRowsKeys = {};
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: ['row-2'],
      maxRowSelection: 1,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: false
    }, {
      key: 'row-2',
      isSelected: true
    }, {
      key: 'row-3',
      isSelected: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-2': true
    });
  });
  it('should return the right rows when maxRowSelection is 1 and there is two rows selected', function () {
    var selectedRowsKeys = {};
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: ['row-3', 'row-2'],
      maxRowSelection: 1,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: false
    }, {
      key: 'row-2',
      isSelected: false
    }, {
      key: 'row-3',
      isSelected: true
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-3': true
    });
  });
  it('should return the right rows when maxRowSelection is greater than 1 and match with the length of rows selected', function () {
    var selectedRowsKeys = {};
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: ['row-2', 'row-1'],
      maxRowSelection: 2,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true
    }, {
      key: 'row-2',
      isSelected: true
    }, {
      key: 'row-3',
      isDisabled: true
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true
    });
  });
  it('should return the right rows when maxRowSelection is greater than 1 and less than the length of rows selected', function () {
    var selectedRowsKeys = {};
    console.warn = jest.fn();
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: ['row-2', 'row-1', 'row-3'],
      maxRowSelection: 2,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isSelected: true
    }, {
      key: 'row-2',
      isSelected: true
    }, {
      key: 'row-3',
      isDisabled: true
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true
    });
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
  it('should return the right rows when maxRowSelection is equal to previous selection lenght and greater than the length of rows selected', function () {
    var selectedRowsKeys = {
      'row-1': true,
      'row-2': true,
      'row-3': true
    };
    expect((0, _getRowsWithInitalSelectedRows["default"])({
      rows: rows,
      selectedRows: ['row-2', 'row-1'],
      maxRowSelection: 3,
      indexes: indexes,
      selectedRowsKeys: selectedRowsKeys
    })).toEqual([{
      key: 'row-1',
      isDisabled: false
    }, {
      key: 'row-2',
      isDisabled: false
    }, {
      key: 'row-3',
      isDisabled: false
    }]);
    expect(selectedRowsKeys).toEqual({
      'row-1': true,
      'row-2': true,
      'row-3': true
    });
  });
});