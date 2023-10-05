"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _columns = require("../../helpers/columns");

var columns = [{
  type: _columns.SELECTABLE_CHECKBOX
}, {
  component: undefined,
  field: 'name'
}];
var data = [{
  name: 'a'
}, {
  name: 'b'
}];
var rows = [{
  key: 'row-1',
  inputType: 'checkbox'
}, {
  key: 'row-2',
  inputType: 'checkbox'
}];
describe('<Body />', function () {
  it('should return an empty component when data and columns are not passed and is not loading', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isLoading: false
    }));
    expect(component.find('Empty').exists()).toBe(true);
  });
  it('should return an empty component when there is not data and is not loading', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      columns: [{}],
      data: [],
      isLoading: false
    }));
    expect(component.find('Empty').exists()).toBe(true);
  });
  it('should return a loading component when there is not data and is loading', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      columns: [{}],
      data: [],
      isLoading: true
    }));
    expect(component.find('Loading').exists()).toBe(true);
  });
  it('should return one row more when there is data and is loading', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      columns: columns,
      data: data,
      isLoading: true
    }));
    expect(component.children().length).toBe(3);
  });
  it('should return an array of Row components', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      data: data,
      columns: columns,
      rows: rows
    }));
    var rowElements = component.find('Row');
    expect(rowElements.length).toBe(2);
    expect(rowElements.get(0).props).toEqual(expect.objectContaining({
      rowData: {
        name: 'a'
      },
      columns: columns,
      rowIndex: 0,
      rowsLength: 2
    }));
    expect(rowElements.get(1).props).toEqual(expect.objectContaining({
      rowData: {
        name: 'b'
      },
      columns: columns,
      rowIndex: 1,
      rowsLength: 2
    }));
  });
});