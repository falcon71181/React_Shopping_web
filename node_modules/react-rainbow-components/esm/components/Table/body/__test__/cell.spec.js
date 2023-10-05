import React from 'react';
import { mount } from 'enzyme';
import Cell from '../cell';
import EditableCell from '../editableCell';

var CellComponent = function CellComponent(_ref) {
  var value = _ref.value;
  return React.createElement("h1", null, value);
};

describe('<Cell /> when isFirst is not passed', function () {
  it('should render a td element with text "cell-1" ', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1"
    }));
    var td = component.find('td');
    expect(td.text()).toBe('cell-1');
  });
  it('should render a td element with a component to display de value', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-2",
      component: CellComponent
    }));
    var td = component.find('td');
    expect(td.find('h1').text()).toBe('cell-2');
  });
  it('should set role="gridcell" in td element', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1"
    }));
    var td = component.find('td');
    expect(td.prop('role')).toBe('gridcell');
  });
  it('should set tabIndex={-1} in td element ', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1"
    }));
    var td = component.find('td');
    expect(td.prop('tabIndex')).toBe(-1);
  });
  it('should set the right data-label in td element when the header passed is a string', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      header: "column header"
    }));
    var td = component.find('td');
    expect(td.prop('data-label')).toBe('column header');
  });
  it('should not set any data-label in td element when the header passed is not a string', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      header: React.createElement("span", null)
    }));
    var td = component.find('td');
    expect(td.prop('data-label')).toBe(undefined);
  });
  it('should render the SelectableCell component when columnType is "SELECTABLE_CHECKBOX"', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      columnType: "SELECTABLE_CHECKBOX"
    }));
    expect(component.find('SelectableCell').exists()).toBe(true);
  });
  it('should render the EnumerableCell component when columnType is "WITH_ENUMERABLE"', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      columnType: "WITH_ENUMERABLE"
    }));
    expect(component.find('EnumerableCell').exists()).toBe(true);
  });
  it('should render the ActionsCell component when columnType is "action"', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      columnType: "action"
    }));
    expect(component.find('ActionsCell').exists()).toBe(true);
  });
  it('should pass the row data and other columns props to cell component', function () {
    var rowData = {
      name: 'John',
      emai: 'john@gmail.com'
    };
    var columnProps = {
      otherData: 'qwerty1234'
    };
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      rowData: rowData,
      restColumnProps: columnProps,
      component: CellComponent,
      columnType: "number",
      isEditable: true
    }));
    expect(component.find('CellComponent').props()).toEqual({
      otherData: 'qwerty1234',
      isEditable: true,
      onChange: expect.any(Function),
      row: {
        emai: 'john@gmail.com',
        name: 'John'
      },
      value: 'cell-1',
      type: 'number'
    });
  });
  it('should render EditableCell when pass isEditable to true', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isEditable: true
    }));
    expect(component.find(EditableCell).exists()).toBe(true);
  });
  it('should render EditableCell when pass isEditable to function that returns true', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isEditable: function isEditable() {
        return true;
      }
    }));
    expect(component.find(EditableCell).exists()).toBe(true);
  });
  it('should not render EditableCell when pass isEditable to function that returns false', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isEditable: function isEditable() {
        return false;
      }
    }));
    expect(component.find(EditableCell).exists()).toBe(false);
  });
});
describe('<Cell /> when isFirst is passed', function () {
  it('should render a th element with text "cell-1" ', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true
    }));
    var th = component.find('th');
    expect(th.text()).toBe('cell-1');
  });
  it('should render a th element with a component to display de value if isFirst is passed', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-2",
      isFirst: true,
      component: CellComponent
    }));
    var th = component.find('th');
    expect(th.find('h1').text()).toBe('cell-2');
  });
  it('should set scope="row" in th element', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true
    }));
    var th = component.find('th');
    expect(th.prop('scope')).toBe('row');
  });
  it('should set tabIndex={-1} in th element', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true
    }));
    var th = component.find('th');
    expect(th.prop('tabIndex')).toBe(-1);
  });
  it('should set the right data-label in th element when the header passed is a string', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true,
      header: "column header"
    }));
    var th = component.find('th');
    expect(th.prop('data-label')).toBe('column header');
  });
  it('should not set any data-label in th element when the header passed is not a string', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true,
      header: React.createElement("span", null)
    }));
    var th = component.find('th');
    expect(th.prop('data-label')).toBe(undefined);
  });
  it('should render the SelectableCell component when columnType is "SELECTABLE_CHECKBOX"', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true,
      columnType: "SELECTABLE_CHECKBOX"
    }));
    expect(component.find('SelectableCell').exists()).toBe(true);
  });
  it('should render the EnumerableCell component when columnType is "WITH_ENUMERABLE"', function () {
    var component = mount(React.createElement(Cell, {
      value: "cell-1",
      isFirst: true,
      columnType: "WITH_ENUMERABLE"
    }));
    expect(component.find('EnumerableCell').exists()).toBe(true);
  });
});