import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon from '../../ButtonIcon';
import Calendar, { Component } from '..';
describe('Calendar', function () {
  it('should render the component when pass falsy values', function () {
    var values = ['', undefined, null, 0];
    values.forEach(function (value) {
      var component = mount(React.createElement(Calendar, {
        value: value
      }));
      expect(component.exists()).toBe(true);
    });
  });
  it('should render the right month', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(Calendar, {
      value: value
    }));
    expect(component.find('h3[data-id="month"]').text()).toBe('April');
  });
  it('should render the prev month', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(Calendar, {
      value: value
    }));
    var prevMonthButton = component.find(ButtonIcon).at(0);
    prevMonthButton.simulate('click');
    expect(component.find('h3[data-id="month"]').text()).toBe('March');
  });
  it('should render the next month', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(Calendar, {
      value: value
    }));
    var nextMonthButton = component.find(ButtonIcon).at(1);
    nextMonthButton.simulate('click');
    expect(component.find('h3[data-id="month"]').text()).toBe('May');
  });
  it('should set to disable the prev month button when minDate is greater than prev month date', function () {
    var value = new Date('04/24/2019');
    var minDate = new Date('04/01/2019');
    var component = mount(React.createElement(Calendar, {
      value: value,
      minDate: minDate
    }));
    var prevMonthButton = component.find(ButtonIcon).at(0);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should set to disable the next month button when maxDate is less than next month date', function () {
    var value = new Date('04/24/2019');
    var maxDate = new Date('04/30/2019');
    var component = mount(React.createElement(Calendar, {
      value: value,
      maxDate: maxDate
    }));
    var prevMonthButton = component.find(ButtonIcon).at(1);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should render the right month when value is updated', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(Calendar, {
      value: value
    }));
    component.setProps({
      value: new Date('10/24/2019')
    });
    expect(component.find('h3[data-id="month"]').text()).toBe('October');
  });
  it('should change the year', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(Calendar, {
      value: value
    }));
    var select = component.find('Select');
    expect(select.prop('value')).toBe(2019);
    component.find('select').simulate('change', {
      target: {
        value: 2022
      }
    });
    expect(component.find('Select').prop('value')).toBe(2022);
  });
  it('should set the right attributes in table element', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(Component, {
      value: value
    }));

    var _component$instance = component.instance(),
        monthLabelId = _component$instance.monthLabelId;

    expect(component.find('table').props()).toEqual(expect.objectContaining({
      'aria-labelledby': monthLabelId,
      role: 'grid'
    }));
  });
  it('should fire onChange with a date as parameter when selectionType is single', function () {
    var value = new Date('04/24/2019');
    var mockChangeFn = jest.fn();
    var simpleCalendar = mount(React.createElement(Calendar, {
      value: value,
      onChange: mockChangeFn
    }));
    simpleCalendar.find('table').find('button').at(7).simulate('click');
    expect(mockChangeFn).toHaveBeenCalledWith(new Date('04/08/2019'));
  });
  it('should fire onChange with an array of dates as parameter when selectionType is range', function () {
    var value = new Date(2019, 3, 3);
    var date1 = new Date(2019, 3, 8, 23, 59, 59, 999);
    var mockChangeFn = jest.fn();
    var simpleCalendar = mount(React.createElement(Calendar, {
      value: value,
      selectionType: "range",
      onChange: mockChangeFn
    }));
    simpleCalendar.find('table').find('button').at(7).simulate('click');
    expect(mockChangeFn).toHaveBeenCalledWith([value, date1]);
  });
});