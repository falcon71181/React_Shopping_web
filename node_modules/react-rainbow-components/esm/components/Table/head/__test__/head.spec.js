import React from 'react';
import { mount } from 'enzyme';
import Head from '..';
var columns = [{
  header: 'header',
  field: 'name'
}, {
  header: 'header-2',
  field: 'email'
}, {
  header: 'header-3'
}];
describe('<Head />', function () {
  it('should return null if columns is not passed', function () {
    var component = mount(React.createElement(Head, null));
    expect(component.children().length).toBe(0);
  });
  it('should return null if columns is an empty array', function () {
    var component = mount(React.createElement(Head, {
      columns: []
    }));
    expect(component.children().length).toBe(0);
  });
  it('should return the right amount of Header components', function () {
    var component = mount(React.createElement(Head, {
      columns: columns
    }));
    var header = component.find('Header');
    expect(header.length).toBe(3);
  });
  it('should set the right sortDirection in Header component when only defaultSortDirection is passed', function () {
    var component = mount(React.createElement(Head, {
      columns: columns,
      defaultSortDirection: "desc"
    }));
    var header = component.find('Header');
    expect(header.at(0).prop('sortDirection')).toBe('desc');
  });
  it('should set the right sortDirection in Header component when sortDirection is passed and sortedBy match with the column field', function () {
    var component = mount(React.createElement(Head, {
      columns: columns,
      defaultSortDirection: "desc",
      sortDirection: "asc",
      sortedBy: "name"
    }));
    var header = component.find('Header');
    expect(header.at(0).prop('sortDirection')).toBe('asc');
  });
  it('should set isSorted to true in Header component when the sortedBy passed match with the column field', function () {
    var component = mount(React.createElement(Head, {
      columns: columns,
      sortedBy: "name"
    }));
    var header = component.find('Header');
    expect(header.at(0).prop('isSorted')).toBe(true);
  });
  it('should set isSorted to false in Header component when the sortedBy passed does not match with the column field', function () {
    var component = mount(React.createElement(Head, {
      columns: columns,
      sortedBy: "other field"
    }));
    var header = component.find('Header');
    expect(header.at(0).prop('isSorted')).toBe(false);
  });
});