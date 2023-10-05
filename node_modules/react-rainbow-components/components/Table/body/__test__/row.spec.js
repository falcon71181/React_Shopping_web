"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _row = _interopRequireDefault(require("../row"));

var _columns = require("../../helpers/columns");

var data = {
  name: 'a',
  number: 26
};
var columns = [{
  component: undefined,
  field: 'name',
  isFirstDataColumn: true
}, {
  component: undefined,
  field: 'number',
  isFirstDataColumn: false
}];
describe('<Row />', function () {
  it('should return a tr element with no children when columns is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: data,
      columns: undefined
    }));
    expect(component.find('tr').children().length).toBe(0);
  });
  it('should return the amount of Cell components that correspond with the columns', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: data,
      columns: columns
    }));
    var cell = component.find('Cell');
    expect(cell.length).toBe(2);
    expect(cell.get(0).props).toEqual(expect.objectContaining({
      value: 'a',
      isFirst: true,
      rowData: {
        name: 'a',
        number: 26
      }
    }));
    expect(cell.get(1).props).toEqual(expect.objectContaining({
      value: 26,
      isFirst: false,
      rowData: {
        name: 'a',
        number: 26
      }
    }));
  });
  it('should set the right value to isFirst prop in Cell component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: data,
      columns: columns
    }));
    var cell = component.find('Cell');
    expect(cell.at(0).prop('isFirst')).toBe(true);
    expect(cell.at(1).prop('isFirst')).toBe(false);
  });
  it('should set empty string to value prop in Cell component when the column field does not exists', function () {
    var values = [[{}, {
      field: 'wrong field'
    }], [{
      field: 'wrong.field'
    }], [{
      field: 'name.field'
    }], [{
      field: 'name.asd.qwerty'
    }]];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
        rowData: data,
        columns: value
      }));
      var cell = component.find('Cell');
      expect(cell.at(0).prop('value')).toBe('');
    });
  });
  it('should set the right value prop in Cell component when use dot notation in field', function () {
    var rowData = {
      id: 'qwerty1234',
      data: {
        name: 'a',
        number: 0
      }
    };
    var rowColumns = [{
      component: undefined,
      field: 'data.name'
    }, {
      component: undefined,
      field: 'data.number'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: rowData,
      columns: rowColumns
    }));
    var cell = component.find('Cell');
    expect(cell.at(0).prop('value')).toBe('a');
    expect(cell.at(1).prop('value')).toBe(0);
  });
  it('should set aria-selected in tr element to false when the row is not selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: data,
      columns: columns
    }));
    expect(component.find('tr').prop('aria-selected')).toBe(false);
  });
  it('should set aria-selected in tr element to true when the row is selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: data,
      columns: columns,
      isSelected: true
    }));
    expect(component.find('tr').prop('aria-selected')).toBe(true);
  });
  it('should set the right value to isFirst prop in Cell component when the firs column is selectable checkbox', function () {
    var columnsWithSelectable = [{
      type: _columns.SELECTABLE_CHECKBOX
    }, {
      component: undefined,
      field: 'number',
      isFirstDataColumn: true
    }, {
      field: 'name',
      isFirstDataColumn: false
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: data,
      columns: columnsWithSelectable
    }));
    var cell = component.find('Cell');
    expect(cell.at(0).prop('isFirst')).toBe(false);
    expect(cell.at(1).prop('isFirst')).toBe(true);
    expect(cell.at(2).prop('isFirst')).toBe(false);
  });
  it('should render LoadingCells component when data type is LOADING', function () {
    var rowData = {
      type: 'LOADING'
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_row["default"], {
      rowData: rowData,
      columns: columns
    }));
    expect(component.find('LoadingCells').exists()).toBe(true);
  });
});