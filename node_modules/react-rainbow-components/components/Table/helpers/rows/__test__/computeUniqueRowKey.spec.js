"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _computeUniqueRowKey = _interopRequireDefault(require("../computeUniqueRowKey"));

var row = {
  name: 'Pepe',
  id: 'qwerty1234',
  numericId: 10
};
describe('computeUniqueRowKey', function () {
  it('should return the right key when keyField is not passed', function () {
    expect((0, _computeUniqueRowKey["default"])(row)).toBe('row-1');
  });
  it('should return the right key when a wrong keyField is passed', function () {
    var keyField = 'email';
    expect((0, _computeUniqueRowKey["default"])(row, keyField)).toBe('row-2');
  });
  it('should return the right key when a valid keyField is passed', function () {
    var keyFields = ['name', 'id'];
    keyFields.forEach(function (keyField) {
      expect((0, _computeUniqueRowKey["default"])(row, keyField)).toBe(row[keyField]);
    });
  });
  it('should return the right key when keyField use dot notation', function () {
    var rowData = {
      type: 'regular',
      data: {
        name: 'Pepe',
        id: 'qwerty1234'
      }
    };
    var keyField = 'data.id';
    expect((0, _computeUniqueRowKey["default"])(rowData, keyField)).toBe('qwerty1234');
  });
  it('should return the right key when data is nested and keyField does not use dot notation', function () {
    var rowData = {
      type: 'regular',
      data: {
        name: 'Pepe',
        id: 'qwerty1234'
      }
    };
    var keyField = 'data';
    expect((0, _computeUniqueRowKey["default"])(rowData, keyField)).toBe('row-3');
  });
  it('should return the right key when the keyField value is numeric', function () {
    var keyField = 'numericId';
    expect((0, _computeUniqueRowKey["default"])(row, keyField)).toBe('row-10');
  });
});