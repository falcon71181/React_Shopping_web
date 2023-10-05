import React from 'react';
import { mount, shallow } from 'enzyme';
import { Component as ButtonGroupPicker } from '../index';
import ButtonOption from '../../ButtonOption/index';
import { StyledErrorText } from '../styled';
import { Provider } from '../context';
jest.mock('../../../libs/utils/uniqueId', function () {
  return jest.fn(function () {
    return 'unique-error-id';
  });
});
describe('<ButtonGroupPicker />', function () {
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(ButtonGroupPicker, {
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
    var component = mount(React.createElement(ButtonGroupPicker, {
      bottomHelpText: "My help text"
    }));
    expect(component.find('div[children="My help text"]').length).toBe(1);
  });
  it('should render required asterisk when required prop is true', function () {
    var component = mount(React.createElement(ButtonGroupPicker, {
      label: "My label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').exists()).toBe(true);
  });
  it('should pass type checkbox in context when multiple is true', function () {
    var component = shallow(React.createElement(ButtonGroupPicker, {
      multiple: true
    }));
    var context = component.find(Provider).prop('value');
    expect(context.type).toBe('checkbox');
  });
  it('should pass type radio in context when multiple is false', function () {
    var component = shallow(React.createElement(ButtonGroupPicker, null));
    var context = component.find(Provider).prop('value');
    expect(context.type).toBe('radio');
  });
  it('should render an error text when error prop is passed', function () {
    var component = mount(React.createElement(ButtonGroupPicker, {
      error: "error"
    }));
    expect(component.find(StyledErrorText).exists()).toBe(true);
  });
  it('should set the error message id as id for the error text', function () {
    var component = mount(React.createElement(ButtonGroupPicker, {
      error: "error"
    }));
    var errorElement = component.find(StyledErrorText).first();
    expect(errorElement.prop('id')).toBe('unique-error-id');
  });
  it('should pass the error message id to context', function () {
    var component = shallow(React.createElement(ButtonGroupPicker, {
      error: "error"
    }));
    var context = component.find(Provider).prop('value');
    expect(context.ariaDescribedBy).toBe('unique-error-id');
  });
  it('should fire onchange with the right value when multiple is false and option is checked', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(ButtonGroupPicker, {
      value: "option1",
      onChange: onChangeFn
    }, React.createElement(ButtonOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(ButtonOption, {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: true,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith('option2');
  });
  it('should fire onchange with an array of values including the value checked when multiple is true', function () {
    var onChangeFn = jest.fn();
    var value = ['option1'];
    var component = mount(React.createElement(ButtonGroupPicker, {
      value: value,
      onChange: onChangeFn,
      multiple: true
    }, React.createElement(ButtonOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(ButtonOption, {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: true,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option1', 'option2']);
  });
  it('should fire onchange with an array containing the value checked when multiple is true and nothing is selected', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(ButtonGroupPicker, {
      onChange: onChangeFn,
      multiple: true
    }, React.createElement(ButtonOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(ButtonOption, {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: true,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option2']);
  });
  it('should fire onchange with an array excluding the unchecked value when multiple is true and option is unchecked', function () {
    var onChangeFn = jest.fn();
    var value = ['option1', 'option2'];
    var component = mount(React.createElement(ButtonGroupPicker, {
      value: value,
      onChange: onChangeFn,
      multiple: true
    }, React.createElement(ButtonOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(ButtonOption, {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: false,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option1']);
  });
});