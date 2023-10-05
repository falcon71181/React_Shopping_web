import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';
import { SELECTABLE_CHECKBOX } from '../../helpers/columns';
var eventMap = {};
document.addEventListener = jest.fn(function (event, callback) {
  eventMap[event] = callback;
});
var preventDefault = jest.fn();
describe('<Header />', function () {
  it('should set scope="col" in th element', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc"
    }));
    expect(component.find('th').prop('scope')).toBe('col');
  });
  it('should set tabIndex={0} in th element when isSorted is passed', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      isSorted: true
    }));
    expect(component.find('th').prop('tabIndex')).toBe(0);
  });
  it('should set tabIndex={-1} in th element when isSorted is not passed', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc"
    }));
    expect(component.find('th').prop('tabIndex')).toBe(-1);
  });
  it('should set the right aria-label in th element when the content passed is a string', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      content: "header content"
    }));
    expect(component.find('th').prop('aria-label')).toBe('header content');
  });
  it('should not set any aria-label in th element when the content passed is not a string', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      content: React.createElement("div", null)
    }));
    expect(component.find('th').prop('aria-label')).toBe(undefined);
  });
  it('should set the right title in the content container element when the content passed is a string', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      content: "header content"
    }));
    expect(component.find('span.rainbow-table_header-content').prop('title')).toBe('header content');
  });
  it('should not set any title in the content container element when the content passed is not a string', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      content: React.createElement("div", null)
    }));
    expect(component.find('span.rainbow-table_header-content').prop('title')).toBe(undefined);
  });
  it('should set isResizable to true in ResizeBar component', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc"
    }));
    expect(component.find('ResizeBar').prop('isResizable')).toBe(true);
  });
  it('should set isResizable to false in ResizeBar component when resizeColumnDisabled is passed', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      resizeColumnDisabled: true
    }));
    expect(component.find('ResizeBar').prop('isResizable')).toBe(false);
  });
  it('should set isResizable to false in ResizeBar component when width is passed', function () {
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      width: 30
    }));
    expect(component.find('ResizeBar').prop('isResizable')).toBe(false);
  });
  it('should call onSort with the right data when the header is clicked and sortable is passed', function () {
    var onSortMockFn = jest.fn();
    var component = mount(React.createElement(Header, {
      sortable: true,
      sortDirection: "asc",
      field: "email",
      onSort: onSortMockFn
    }));
    var header = component.find('div.rainbow-table_header-container');
    header.simulate('click');
    expect(onSortMockFn).toHaveBeenCalledWith(expect.any(Object), 'email', 'asc');
  });
  it('should not call onSort when sortable is not passed', function () {
    var onSortMockFn = jest.fn();
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      onSort: onSortMockFn
    }));
    var header = component.find('div.rainbow-table_header-container');
    header.simulate('click');
    expect(onSortMockFn).not.toHaveBeenCalled();
  });
  it('should call onResize with the right data when resize the column', function () {
    var onResizeMockFn = jest.fn();
    var component = mount(React.createElement(Header, {
      sortDirection: "asc",
      colIndex: 2,
      onResize: onResizeMockFn
    }));
    var resizeBar = component.find('span.rainbow-table_header-resize-bar');
    resizeBar.simulate('mousedown', {
      clientX: 100
    });
    eventMap.mousemove({
      clientX: 133,
      preventDefault: preventDefault
    });
    eventMap.mouseup({
      preventDefault: preventDefault
    });
    expect(onResizeMockFn).toHaveBeenCalledWith(33, 2);
  });
  it('should render SelectableHeader component when type passed is "SELECTABLE_CHECKBOX"', function () {
    var component = mount(React.createElement(Header, {
      type: SELECTABLE_CHECKBOX
    }));
    expect(component.find('SelectableHeader').exists()).toBe(true);
  });
  it('should render headerComponent component when is passed', function () {
    var component = mount(React.createElement(Header, {
      headerComponent: function headerComponent() {
        return 'test';
      }
    }));
    expect(component.text()).toBe('test');
  });
  it('should call onSort with de right data', function () {
    var onSortMockFn = jest.fn();
    var component = mount(React.createElement(Header, {
      sortable: true,
      sortDirection: "asc",
      field: "email",
      onSort: onSortMockFn,
      headerComponent: function headerComponent(_ref) {
        var onSort = _ref.onSort;
        return React.createElement("button", {
          type: "button",
          onClick: onSort
        }, "Test");
      }
    }));
    var header = component.find('button');
    header.simulate('click');
    expect(onSortMockFn).toHaveBeenCalledWith(expect.any(Object), 'email', 'asc');
  });
});