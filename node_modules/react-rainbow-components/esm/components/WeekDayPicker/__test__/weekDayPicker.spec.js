import React from 'react';
import { mount } from 'enzyme';
import WeekDayPicker from '..';
import { StyledHelpText } from '../styled';
import StyledTextError from '../../Input/styled/errorText';
import WeekDayItems from '../weekDayItems';
import { useUniqueIdentifier } from '../../../libs/hooks';
jest.mock('../../../libs/hooks/useUniqueIdentifier', function () {
  return jest.fn(function () {
    return 'week-day-items';
  });
});
describe('<WeekDayPicker />', function () {
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      as: 'legend',
      variant: 'default',
      size: 'medium'
    });
  });
  it('should render bottom help text when bottomHelpText prop is passed', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      bottomHelpText: "My help text"
    }));
    expect(component.find(StyledHelpText).length).toBe(1);
  });
  it('should render required asterisk when required prop is true', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      label: "My label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').exists()).toBe(true);
  });
  it('should have input type as checkbox when multiple is true', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      multiple: true
    }));
    expect(component.find('input').at(0).prop('type')).toBe('checkbox');
  });
  it('should have input type as radio when multiple is false', function () {
    var component = mount(React.createElement(WeekDayPicker, null));
    expect(component.find('input').at(0).prop('type')).toBe('radio');
  });
  it('should render an error text when error prop is passed', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      error: "error"
    }));
    expect(component.find(StyledTextError).exists()).toBe(true);
  });
  it('should have the opposite days disabled when a list of availableDates is sent', function () {
    var weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var availableDates = ['wednesday', 'friday'];
    var component = mount(React.createElement(WeekDayPicker, {
      availableDates: availableDates
    }));
    weekDays.forEach(function (weekDay, index) {
      var isDisabled = component.find('input').at(index).prop('disabled');
      var shouldDisable = !availableDates.includes(weekDay);

      if (shouldDisable) {
        expect(isDisabled).toBe(true);
      } else {
        expect(isDisabled).toBe(false);
      }
    });
  });
  it('should have readonly prop as true when readOnly param is passed', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      readOnly: true
    }));
    expect(component.find('input').at(0).prop('readOnly')).toBe(true);
  });
  it('should change checked properly status for single day selection', function () {
    var component = mount(React.createElement(WeekDayPicker, {
      value: "friday"
    }));
    component.setProps({
      value: 'monday'
    });
    expect(component.find('input').at(5).prop('checked')).toBe(false);
    expect(component.find('input').at(1).prop('checked')).toBe(true);
  });
  it('should change checked status properly for multiple selection', function () {
    var value = ['saturday'];
    var component = mount(React.createElement(WeekDayPicker, {
      value: value,
      multiple: true
    }));
    component.setProps({
      value: ['sunday', 'monday']
    });
    expect(component.find('input').at(0).prop('checked')).toBe(true);
    expect(component.find('input').at(1).prop('checked')).toBe(true);
    expect(component.find('input').at(6).prop('checked')).toBe(false);
  });
  it('should call useUniqueIdentifier 8 times for the ids generations', function () {
    useUniqueIdentifier.mockClear();
    mount(React.createElement(WeekDayPicker, null));
    expect(useUniqueIdentifier).toHaveBeenCalledTimes(8);
  });
  it('should have default name when name params is not sent', function () {
    var component = mount(React.createElement(WeekDayPicker, null));
    expect(component.find(WeekDayItems).at(0).prop('name')).toBe('week-day-items');
  });
  it('should not run onChange when checkbox change is triggered and readOnly is true', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(WeekDayPicker, {
      onChange: onChangeFn,
      readOnly: true
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should not run onChange when input change is triggered and disabled is true', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(WeekDayPicker, {
      onChange: onChangeFn,
      disabled: true
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should run onChange with the right value when multiple is not set', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(WeekDayPicker, {
      value: "monday",
      onChange: onChangeFn
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith('sunday');
  });
  it('should run onChange with the right sorted values when multiple is true', function () {
    var onChangeFn = jest.fn();
    var value = ['friday', 'monday'];
    var component = mount(React.createElement(WeekDayPicker, {
      value: value,
      multiple: true,
      onChange: onChangeFn
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['sunday', 'monday', 'friday']);
  });
});