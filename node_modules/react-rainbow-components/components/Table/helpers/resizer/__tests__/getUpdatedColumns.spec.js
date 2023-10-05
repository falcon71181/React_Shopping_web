"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getUpdatedColumns = _interopRequireDefault(require("../getUpdatedColumns"));

describe('resizer helper', function () {
  describe('getUpdatedColumns', function () {
    it('should return an empty array', function () {
      var params = {
        columns: [],
        columnsMetaData: [],
        domTableWidth: 600,
        minColumnWidth: 50,
        maxColumnWidth: 150
      };
      expect((0, _getUpdatedColumns["default"])(params)).toEqual([]);
    });
    it('should return the right columns', function () {
      var params = {
        columns: [{
          label: 'Name',
          field: 'name'
        }, {
          label: 'Email',
          field: 'email'
        }],
        columnsMetaData: [],
        domTableWidth: 600,
        minColumnWidth: 50,
        maxColumnWidth: 1000
      };
      expect((0, _getUpdatedColumns["default"])(params)).toEqual([{
        label: 'Name',
        field: 'name',
        computedWidth: 300
      }, {
        label: 'Email',
        field: 'email',
        computedWidth: 300
      }]);
    });
    it('should return the right columns when already have metadata', function () {
      var params = {
        columns: [{
          label: 'Name',
          field: 'name',
          computedWidth: 35,
          isResized: true
        }, {
          label: 'Email',
          field: 'email',
          computedWidth: 123,
          isResized: false
        }],
        domTableWidth: 600,
        minColumnWidth: 50,
        maxColumnWidth: 1000
      };
      expect((0, _getUpdatedColumns["default"])(params)).toEqual([{
        label: 'Name',
        field: 'name',
        computedWidth: 35,
        isResized: true
      }, {
        label: 'Email',
        field: 'email',
        computedWidth: 565,
        isResized: false
      }]);
    });
    it('should return the right columns when have width or defaultWidth', function () {
      var params = {
        columns: [{
          label: 'Name',
          field: 'name',
          width: 60,
          computedWidth: 35,
          isResized: false
        }, {
          label: 'Email',
          field: 'email',
          defaultWidth: 120,
          computedWidth: 123,
          isResized: false
        }],
        domTableWidth: 600,
        minColumnWidth: 50,
        maxColumnWidth: 1000
      };
      expect((0, _getUpdatedColumns["default"])(params)).toEqual([{
        label: 'Name',
        field: 'name',
        width: 60,
        computedWidth: 60,
        isResized: false
      }, {
        label: 'Email',
        field: 'email',
        defaultWidth: 120,
        computedWidth: 120,
        isResized: false
      }]);
    });
    it('should return the right columns when have width or defaultWidth but are resized', function () {
      var params = {
        columns: [{
          label: 'Name',
          field: 'name',
          width: 60,
          computedWidth: 35,
          isResized: true
        }, {
          label: 'Email',
          field: 'email',
          defaultWidth: 120,
          computedWidth: 123,
          isResized: true
        }],
        domTableWidth: 600,
        minColumnWidth: 50,
        maxColumnWidth: 1000
      };
      expect((0, _getUpdatedColumns["default"])(params)).toEqual([{
        label: 'Name',
        field: 'name',
        width: 60,
        computedWidth: 60,
        isResized: true
      }, {
        label: 'Email',
        field: 'email',
        defaultWidth: 120,
        computedWidth: 123,
        isResized: true
      }]);
    });
  });
});