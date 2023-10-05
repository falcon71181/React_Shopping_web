"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _selectableHeader = _interopRequireDefault(require("../selectableHeader"));

describe('SelectableHeader', function () {
  it('should not render the PrimitiveCheckbox when maxRowSelection is 1', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      maxRowSelection: 1
    }));
    expect(component.find('PrimitiveCheckbox').exists()).toBe(false);
    expect(component.find('th[scope="col"]').exists()).toBe(true);
  });
  it('should set scope to "col" in th element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], null));
    expect(component.find('th').prop('scope')).toBe('col');
  });
  it('should set name to the right value in PrimitiveCheckbox component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      tableId: "table-25"
    }));
    expect(component.find('PrimitiveCheckbox').prop('name')).toBe('table-25-options');
  });
  it('should set type to "checkbox" in PrimitiveCheckbox component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], null));
    expect(component.find('PrimitiveCheckbox').prop('type')).toBe('checkbox');
  });
  it('should set checked to false in PrimitiveCheckbox component when bulkSelection is "none"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      bulkSelection: "none"
    }));
    expect(component.find('PrimitiveCheckbox').prop('checked')).toBe(false);
  });
  it('should set checked to "indeterminate" in PrimitiveCheckbox component when bulkSelection is "some"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      bulkSelection: "some"
    }));
    expect(component.find('PrimitiveCheckbox').prop('checked')).toBe('indeterminate');
  });
  it('should set checked to true in PrimitiveCheckbox component when bulkSelection is "all"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      bulkSelection: "all"
    }));
    expect(component.find('PrimitiveCheckbox').prop('checked')).toBe(true);
  });
  it('should set disabled to true in PrimitiveCheckbox component when maxRowSelection passed is 0', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      maxRowSelection: 0
    }));
    expect(component.find('PrimitiveCheckbox').prop('disabled')).toBe(true);
  });
  it('should set disabled to false in PrimitiveCheckbox component when maxRowSelection is other than 0', function () {
    var values = [-1, 2, 3, 'abc'];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
        maxRowSelection: value
      }));
      expect(component.find('PrimitiveCheckbox').prop('disabled')).toBe(false);
    });
  });
  it('should call the right event when bulkSelection is "none"', function () {
    var onSelectAllRowsMockFn = jest.fn();
    var onDeselectAllRowsMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
      bulkSelection: "none",
      onSelectAllRows: onSelectAllRowsMockFn,
      onDeselectAllRows: onDeselectAllRowsMockFn
    }));
    component.find('input').simulate('click');
    expect(onSelectAllRowsMockFn).toHaveBeenCalledWith(expect.any(Object));
    expect(onDeselectAllRowsMockFn).not.toHaveBeenCalled();
  });
  it('should call the right event when bulkSelection is other than "none"', function () {
    var values = ['some', 'all', 'abc'];
    values.forEach(function (value) {
      var onSelectAllRowsMockFn = jest.fn();
      var onDeselectAllRowsMockFn = jest.fn();
      var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableHeader["default"], {
        bulkSelection: value,
        onSelectAllRows: onSelectAllRowsMockFn,
        onDeselectAllRows: onDeselectAllRowsMockFn
      }));
      component.find('input').simulate('click');
      expect(onDeselectAllRowsMockFn).toHaveBeenCalledWith(expect.any(Object));
      expect(onSelectAllRowsMockFn).not.toHaveBeenCalled();
    });
  });
});