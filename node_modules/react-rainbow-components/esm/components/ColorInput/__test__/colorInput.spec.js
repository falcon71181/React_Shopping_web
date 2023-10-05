import React from 'react';
import { mount } from 'enzyme';
import ColorInput from '..';
import ColorPicker from '../../ColorPicker';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';
describe('<ColorInput />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
      }];
    });
  });
  it('should set the value passed to the input without `#`', function () {
    var component = mount(React.createElement(ColorInput, {
      value: {
        hex: '#cccccc',
        alpha: 0.75
      }
    }));
    expect(component.find('input[type="text"]').prop('value')).toBe('cccccc');
    expect(component.find('input[type="number"]').prop('value')).toBe(75);
  });
  it('should show a color picker', function () {
    var component = mount(React.createElement(ColorInput, null));
    component.find('button').simulate('click');
    expect(component.find(ColorPicker).exists()).toBe(true);
  });
  it('should call onChange callback', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('button').simulate('click');
    component.find(ColorPicker).prop('onChange')({
      hex: '#000000',
      rgba: [0, 0, 0, 0.75]
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#000000',
      alpha: 0.75,
      isValid: true
    });
  });
  it('shold call onChange when typing in the color input', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('input[type="text"]').simulate('change', {
      target: {
        value: '#cccccc'
      }
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#cccccc',
      alpha: 1,
      isValid: true
    });
  });
  it('shold call onChange with isValid false when the color value is incorrect', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('input[type="text"]').simulate('change', {
      target: {
        value: '#ccccc'
      }
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#ccccc',
      alpha: 1,
      isValid: false
    });
  });
  it('shold call onChange when typing in the alpha input', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('input[type="number"]').simulate('change', {
      target: {
        value: '50'
      }
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#000000',
      alpha: 0.5
    });
  });
  it('should call onChange with alpha null when input is empty', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('input[type="number"]').simulate('change', {
      target: {
        value: ''
      }
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#000000',
      alpha: null
    });
  });
  it('should call onChange with alpha 1 when type an alpha greater than 100', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('input[type="number"]').simulate('change', {
      target: {
        value: '150'
      }
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#000000',
      alpha: 1
    });
  });
  it('should call onChange with alpha 0 when type an alpha smaller than 0', function () {
    var changeFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onChange: changeFn
    }));
    component.find('input[type="number"]').simulate('change', {
      target: {
        value: '-10'
      }
    });
    expect(changeFn).toHaveBeenCalledWith({
      hex: '#000000',
      alpha: 0
    });
  });
  it('should call onClick callback', function () {
    var clickFn = jest.fn();
    var component = mount(React.createElement(ColorInput, {
      onClick: clickFn
    }));
    component.find('input[type="text"]').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  it('should call onFocus with the current value', function () {
    var focusFn = jest.fn();
    var value = {
      hex: '#ccc',
      alpha: 1,
      isValid: true
    };
    var component = mount(React.createElement(ColorInput, {
      value: value,
      onFocus: focusFn
    }));
    component.find('input[type="text"]').simulate('focus');
    expect(focusFn).toHaveBeenCalledWith(value);
  });
  it('should call onBlur with the current value', function () {
    var blurFn = jest.fn();
    var value = {
      hex: '#ccc',
      alpha: 1,
      isValid: true
    };
    var component = mount(React.createElement(ColorInput, {
      value: value,
      onBlur: blurFn
    }));
    component.find('input[type="text"]').simulate('blur');
    expect(blurFn).toHaveBeenCalledWith(value);
  });
  it('should set the color sample according to the value', function () {
    var value = {
      hex: '#ccc',
      alpha: 1,
      isValid: true
    };
    var component = mount(React.createElement(ColorInput, {
      value: value
    }));
    expect(component.find('ColorSample').prop('value')).toEqual(value);
  });
  it('should update the color sample on change', function () {
    var value = {
      hex: '#ccc',
      alpha: 1,
      isValid: true
    };
    var component = mount(React.createElement(ColorInput, {
      value: value
    }));
    var div = component.find('ColorSample').find('div');
    expect(getComputedStyle(div.getDOMNode()).getPropertyValue('background-color')).toBe('rgb(204, 204, 204)');
    component.find('input[type="text"]').simulate('change', {
      target: {
        value: '#fff'
      }
    });
    expect(getComputedStyle(div.getDOMNode()).getPropertyValue('background-color')).toBe('rgb(255, 255, 255)');
  });
  it('should not update the color sample on change when value is invalid', function () {
    var value = {
      hex: '#ccc',
      alpha: 1,
      isValid: true
    };
    var component = mount(React.createElement(ColorInput, {
      value: value
    }));
    component.find('input[type="text"]').simulate('change', {
      target: {
        value: '#ffff'
      }
    });
    expect(component.find('ColorSample').prop('value')).toEqual({
      hex: '#ccc',
      alpha: 1,
      isValid: true
    });
  });
  it('should set the color sample undefined on blur if value is invalid', function () {
    var value = {
      hex: '#cccc',
      alpha: 1,
      isValid: false
    };
    var component = mount(React.createElement(ColorInput, {
      value: value
    }));
    component.find('input[type="number"]').simulate('blur');
    expect(component.find('ColorSample').prop('value')).toBe(undefined);
  });
  it('should set the name of the input', function () {
    var component = mount(React.createElement(ColorInput, {
      label: "Test label",
      name: "test",
      bottomHelpText: "Help text"
    }));
    expect(component.find('input[type="text"]').prop('name')).toBe('test');
  });
  it('should set the placeholder passed in the input element', function () {
    var component = mount(React.createElement(ColorInput, {
      placeholder: "Placeholder Text"
    }));
    expect(component.find('input[type="text"]').prop('placeholder')).toBe('Placeholder Text');
  });
  it('should set the tabIndex passed in the input element', function () {
    var component = mount(React.createElement(ColorInput, {
      tabIndex: 0
    }));
    expect(component.find('input[type="text"]').prop('tabIndex')).toBe(0);
  });
  it('should set the disabled passed in the input element', function () {
    var component = mount(React.createElement(ColorInput, {
      disabled: true
    }));
    expect(component.find('input[type="text"]').prop('disabled')).toBe(true);
  });
  it('should set the readonly passed in the input element', function () {
    var component = mount(React.createElement(ColorInput, {
      readOnly: true
    }));
    expect(component.find('input[type="text"]').prop('readOnly')).toBe(true);
  });
  it('should set required in the input element if it is passed', function () {
    var component = mount(React.createElement(ColorInput, {
      required: true
    }));
    expect(component.find('input[type="text"]').prop('required')).toBe(true);
  });
  it('should render the label passed', function () {
    var component = mount(React.createElement(ColorInput, {
      label: React.createElement("span", {
        id: "label-test"
      })
    }));
    var label = component.find('Label');
    expect(label.exists()).toBe(true);
    expect(label.find('#label-test').exists()).toBe(true);
  });
  it('should render the help text passed', function () {
    var component = mount(React.createElement(ColorInput, {
      bottomHelpText: React.createElement("span", {
        id: "help-test"
      })
    }));
    var helpText = component.find(HelpText);
    expect(helpText.exists()).toBe(true);
    expect(helpText.find('#help-test').exists()).toBe(true);
  });
  it('should render the error passed', function () {
    var component = mount(React.createElement(ColorInput, {
      error: "This field is required"
    }));
    var error = component.find(ErrorText);
    expect(error.exists()).toBe(true);
    expect(error.text()).toBe('This field is required');
  });
});