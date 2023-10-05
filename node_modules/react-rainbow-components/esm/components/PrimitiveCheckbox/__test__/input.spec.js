import React from 'react';
import { mount } from 'enzyme';
import PrimitiveCheckbox from '..';
describe('<PrimitiveCheckbox/>', function () {
  it('should set an id in the input element', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, null));
    expect(component.find('input').prop('id')).toMatch(/input/);
  });
  it('should set the value passed in the input element', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      value: "Input value"
    }));
    expect(component.find('input').prop('value')).toBe('Input value');
  });
  it('should fire an event when the user change the input', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(PrimitiveCheckbox, {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      tabIndex: 0
    }));
    expect(component.find('input').prop('tabIndex')).toBe(0);
  });
  it('should set the disabled passed in the input element', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should pass a generated inputId to the Label component', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      bottomHelpText: "Help text"
    }));
    expect(component.find('Label').prop('inputId')).toMatch(/input-checkbox/);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      label: "custom label"
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      inputId: expect.any(String)
    });
  });
  it('should set indeterminate prop to true in input reference when checked prop is "indeterminate" and it is passed', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      checked: "indeterminate"
    }));
    expect(component.instance().inputRef.current.indeterminate).toBe(true);
  });
  it('should set indeterminate prop to true in input reference when checked prop is "indeterminate" and it is passed later the component is mounted', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, null));
    component.setProps({
      checked: 'indeterminate'
    });
    expect(component.instance().inputRef.current.indeterminate).toBe(true);
  });
  it('should set checked prop passed in input element', function () {
    var component = mount(React.createElement(PrimitiveCheckbox, {
      checked: true
    }));
    expect(component.find('input').prop('checked')).toBe(true);
  });
});