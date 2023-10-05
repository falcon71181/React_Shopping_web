import React from 'react';
import { mount } from 'enzyme';
import MenuItem from '../../../MenuItem';
import ActionsCell from '../actionsCell';
import ButtonIcon from '../../../ButtonIcon';
var columnChildren = [React.createElement(MenuItem, null), React.createElement(MenuItem, null)];
describe('<ActionsCell />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
  });
  it('should not render anything when columnChildren is not passed', function () {
    var component = mount(React.createElement(ActionsCell, null));
    expect(component.children().length).toBe(0);
  });
  it('should render the menu items passed as columnChildren', function () {
    var component = mount(React.createElement(ActionsCell, {
      columnChildren: columnChildren,
      rowsLength: 3,
      rowIndex: 1
    }));
    component.find(ButtonIcon).simulate('click');
    expect(component.find(MenuItem).length).toBe(2);
  });
  it('should render only one menu item', function () {
    var singleColumnChild = React.createElement(MenuItem, null);
    var component = mount(React.createElement(ActionsCell, {
      columnChildren: singleColumnChild,
      rowsLength: 3,
      rowIndex: 1
    }));
    component.find(ButtonIcon).simulate('click');
    expect(component.find(MenuItem).length).toBe(1);
  });
  it('should set the menuAlignment to "right" in ButtonMenu component', function () {
    var values = [1, 2, 3, 4, 5];
    values.forEach(function (value) {
      var component = mount(React.createElement(ActionsCell, {
        columnChildren: columnChildren,
        rowsLength: value,
        rowIndex: 1
      }));
      expect(component.find('ButtonMenu').prop('menuAlignment')).toBe('right');
    });
  });
  it('should set the menuAlignment to "bottom-right" in ButtonMenu component', function () {
    var values = [4, 5, 6];
    values.forEach(function (value) {
      var component = mount(React.createElement(ActionsCell, {
        columnChildren: columnChildren,
        rowsLength: value,
        rowIndex: 3
      }));
      expect(component.find('ButtonMenu').prop('menuAlignment')).toBe('bottom-right');
    });
  });
  it('should not render any MenuItem when columnChildren are invalid', function () {
    var values = [[], ['asd'], [123]];
    values.forEach(function (value) {
      var component = mount(React.createElement(ActionsCell, {
        columnChildren: value,
        rowsLength: 3,
        rowIndex: 1
      }));
      expect(component.find(MenuItem).length).toBe(0);
    });
  });
  it('should fire an event when a MenuItem is clicked', function () {
    var onClickMockFn = jest.fn();
    var menuItemsChildren = [React.createElement(MenuItem, {
      onClick: onClickMockFn
    }), React.createElement(MenuItem, null)];
    var rowData = {
      name: 'John',
      email: 'john@gmail.com'
    };
    var component = mount(React.createElement(ActionsCell, {
      columnChildren: menuItemsChildren,
      rowsLength: 3,
      rowIndex: 1,
      rowData: rowData
    }));
    component.find(ButtonIcon).simulate('click');
    component.find(MenuItem).at(0).simulate('click');
    expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object), {
      name: 'John',
      email: 'john@gmail.com'
    });
  });
});