import React from 'react';
import { mount } from 'enzyme';
import WeekDay from '../weekDay';
import { useUniqueIdentifier } from '../../../libs/hooks';
jest.mock('../../../libs/hooks/useUniqueIdentifier', function () {
  return jest.fn(function () {
    return 'week-day';
  });
});
describe('<WeekDay />', function () {
  it('should have checked as true when isChecked is true', function () {
    var component = mount(React.createElement(WeekDay, {
      isChecked: true
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
  it('should have checked as false when isChecked is not set', function () {
    var component = mount(React.createElement(WeekDay, null));
    expect(component.find('input').prop('checked')).toBe(false);
  });
  it('should have disabled as true when disabled is true', function () {
    var component = mount(React.createElement(WeekDay, {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should have checked as false when disabled is not set', function () {
    var component = mount(React.createElement(WeekDay, null));
    expect(component.find('input').prop('disabled')).toBe(false);
  });
  it('should have readOnly as true when readOnly is true', function () {
    var component = mount(React.createElement(WeekDay, {
      readOnly: true
    }));
    expect(component.find('input').prop('readOnly')).toBe(true);
  });
  it('should have readonly as false when readOnly is not set', function () {
    var component = mount(React.createElement(WeekDay, null));
    expect(component.find('input').prop('readOnly')).toBe(false);
  });
  it('should call useUniqueIdentifier to generate input ID with the right value', function () {
    useUniqueIdentifier.mockReset();
    mount(React.createElement(WeekDay, null));
    expect(useUniqueIdentifier).toHaveBeenCalledTimes(1);
    expect(useUniqueIdentifier).toHaveBeenCalledWith('week-day');
  });
});