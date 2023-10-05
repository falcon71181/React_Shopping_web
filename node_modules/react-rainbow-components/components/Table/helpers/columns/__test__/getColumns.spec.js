"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Column = _interopRequireDefault(require("../../../../Column"));

var _getColumns = _interopRequireDefault(require("../getColumns"));

jest.mock('../../../helpers/columns/getEnumerableWidth', function () {
  return jest.fn(function () {
    return 50;
  });
});
describe('getColumns', function () {
  it('should return null when children is null, showCheckboxColumn is false and showRowNumberColumn is false', function () {
    var children = null;
    var showCheckboxColumn = false;
    var showRowNumberColumn = false;
    expect((0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      showRowNumberColumn: showRowNumberColumn
    })).toBeNull();
  });
  it('should return an empty array when children is not passed, showCheckboxColumn is false and showRowNumberColumn is false', function () {
    var children = undefined;
    var showCheckboxColumn = false;
    var showRowNumberColumn = false;
    expect((0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      showRowNumberColumn: showRowNumberColumn
    })).toEqual([]);
  });
  it('should return an empty array when children is an array with falsy values, showCheckboxColumn is false and showRowNumberColumn is false', function () {
    var children = [null, undefined];
    var showCheckboxColumn = false;
    var showRowNumberColumn = false;
    expect((0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      showRowNumberColumn: showRowNumberColumn
    })).toEqual([]);
  });
  it('should return an array with the columns props when showCheckboxColumn is false and showRowNumberColumn is false', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header",
      component: _react["default"].createElement("span", null)
    })];
    var showCheckboxColumn = false;
    var showRowNumberColumn = false;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      showRowNumberColumn: showRowNumberColumn
    });
    expect(columnsProps).toEqual([{
      component: _react["default"].createElement("span", null),
      field: 'a',
      header: 'header',
      headerAlignment: undefined,
      isFirstDataColumn: true,
      type: 'text',
      sortable: false,
      width: undefined,
      isEditable: false,
      onChange: expect.any(Function)
    }]);
  });
  it('should return an array with the columns props, plus the selectable column when showCheckboxColumn is true', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header",
      component: _react["default"].createElement("span", null)
    })];
    var showCheckboxColumn = true;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn
    });
    expect(columnsProps).toEqual([{
      type: 'SELECTABLE_CHECKBOX',
      width: 52
    }, {
      field: 'a',
      header: 'header',
      headerAlignment: undefined,
      component: _react["default"].createElement("span", null),
      sortable: false,
      type: 'text',
      isFirstDataColumn: true,
      width: undefined,
      isEditable: false,
      onChange: expect.any(Function)
    }]);
  });
  it('should return an array with the columns props, plus the enumerable column data including enumerable offset value when showRowNumberColumn is true and rowNumberOffset is set', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header",
      component: _react["default"].createElement("span", null)
    })];
    var showRowNumberColumn = true;
    var rowNumberOffset = 333;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showRowNumberColumn: showRowNumberColumn,
      rowNumberOffset: rowNumberOffset
    });
    expect(columnsProps).toEqual([{
      type: 'WITH_ENUMERABLE',
      rowNumberOffset: 333,
      width: 50
    }, {
      field: 'a',
      header: 'header',
      headerAlignment: undefined,
      component: _react["default"].createElement("span", null),
      sortable: false,
      type: 'text',
      isFirstDataColumn: true,
      width: undefined,
      isEditable: false,
      onChange: expect.any(Function)
    }]);
  });
  it('should return an array with the columns props, plus the enumerable and the selectable columns when showCheckboxColumn and showRowNumberColumn are true', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header",
      component: _react["default"].createElement("span", null)
    })];
    var showCheckboxColumn = true;
    var showRowNumberColumn = true;
    var rowNumberOffset = 0;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      showRowNumberColumn: showRowNumberColumn,
      rowNumberOffset: rowNumberOffset
    });
    expect(columnsProps).toEqual([{
      type: 'WITH_ENUMERABLE',
      rowNumberOffset: 0,
      width: 50
    }, {
      type: 'SELECTABLE_CHECKBOX',
      width: 52
    }, {
      field: 'a',
      header: 'header',
      headerAlignment: undefined,
      component: _react["default"].createElement("span", null),
      sortable: false,
      type: 'text',
      isFirstDataColumn: true,
      width: undefined,
      isEditable: false,
      onChange: expect.any(Function)
    }]);
  });
  it('should return an array with the right columns props when one column is type "action"', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header",
      component: _react["default"].createElement("span", null)
    }), _react["default"].createElement(_Column["default"], {
      type: "action"
    })];
    var showCheckboxColumn = false;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn
    });
    expect(columnsProps).toEqual([{
      field: 'a',
      header: 'header',
      headerAlignment: undefined,
      component: _react["default"].createElement("span", null),
      sortable: false,
      type: 'text',
      isFirstDataColumn: true,
      width: undefined,
      isEditable: false,
      onChange: expect.any(Function)
    }, {
      sortable: false,
      type: 'action',
      width: 75,
      isEditable: false,
      onChange: expect.any(Function),
      headerAlignment: undefined
    }]);
  });
  it('should return an array with the right columns props when defaultWidth and width are passed', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header a",
      defaultWidth: 160,
      width: 30,
      component: _react["default"].createElement("span", null)
    }), _react["default"].createElement(_Column["default"], {
      field: "b",
      header: "header b",
      defaultWidth: 30
    })];
    var showCheckboxColumn = false;
    var minColumnWidth = 150;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      minColumnWidth: minColumnWidth
    });
    expect(columnsProps).toEqual([{
      field: 'a',
      header: 'header a',
      headerAlignment: undefined,
      component: _react["default"].createElement("span", null),
      sortable: false,
      type: 'text',
      isFirstDataColumn: true,
      defaultWidth: 160,
      width: 30,
      isEditable: false,
      onChange: expect.any(Function)
    }, {
      field: 'b',
      header: 'header b',
      headerAlignment: undefined,
      sortable: false,
      type: 'text',
      isFirstDataColumn: false,
      defaultWidth: 150,
      isEditable: false,
      onChange: expect.any(Function)
    }]);
  });
  it('should return an array with the right columns props when defaultWidth is passed and is out of range', function () {
    var children = [_react["default"].createElement(_Column["default"], {
      field: "a",
      header: "header a",
      defaultWidth: 160,
      component: _react["default"].createElement("span", null)
    }), _react["default"].createElement(_Column["default"], {
      field: "b",
      header: "header b",
      defaultWidth: 30
    })];
    var showCheckboxColumn = false;
    var minColumnWidth = 50;
    var maxColumnWidth = 150;
    var columnsProps = (0, _getColumns["default"])({
      children: children,
      showCheckboxColumn: showCheckboxColumn,
      minColumnWidth: minColumnWidth,
      maxColumnWidth: maxColumnWidth
    });
    expect(columnsProps).toEqual([{
      field: 'a',
      header: 'header a',
      headerAlignment: undefined,
      component: _react["default"].createElement("span", null),
      sortable: false,
      type: 'text',
      isFirstDataColumn: true,
      defaultWidth: 150,
      isEditable: false,
      onChange: expect.any(Function)
    }, {
      field: 'b',
      header: 'header b',
      headerAlignment: undefined,
      sortable: false,
      type: 'text',
      isFirstDataColumn: false,
      defaultWidth: 50,
      isEditable: false,
      onChange: expect.any(Function)
    }]);
  });
});