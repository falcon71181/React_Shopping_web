import React from 'react';
import { mount } from 'enzyme';
import Textarea from '..';
describe('<Textarea/>', function () {
  it('should set an id in the textarea element', function () {
    var component = mount(React.createElement(Textarea, null));
    expect(component.find('textarea').prop('id')).toMatch(/textarea/);
  });
  it('should set the value passed in the textarea element', function () {
    var component = mount(React.createElement(Textarea, {
      value: "textarea value"
    }));
    expect(component.find('textarea').prop('value')).toBe('textarea value');
  });
  it('should set the placeholder passed in the textarea element', function () {
    var component = mount(React.createElement(Textarea, {
      placeholder: "Placeholder Text"
    }));
    expect(component.find('textarea').prop('placeholder')).toBe('Placeholder Text');
  });
  it('should fire an event when the user change the textarea', function () {
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(Textarea, {
      onChange: onChangeFn
    }));
    component.find('textarea').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the disabled passed in the textarea element', function () {
    var component = mount(React.createElement(Textarea, {
      disabled: true
    }));
    expect(component.find('textarea').prop('disabled')).toBe(true);
  });
  it('should set the readonly passed in the textarea element', function () {
    var component = mount(React.createElement(Textarea, {
      readOnly: true
    }));
    expect(component.find('textarea').prop('readOnly')).toBe(true);
  });
  it('should set required in the textarea element if it is passed', function () {
    var component = mount(React.createElement(Textarea, {
      required: true
    }));
    expect(component.find('textarea').prop('required')).toBe(true);
  });
  it('should set the maxLength passed in the textarea element', function () {
    var component = mount(React.createElement(Textarea, {
      maxLength: 0
    }));
    expect(component.find('textarea').prop('maxLength')).toBe(0);
  });
  it('should set the minLength passed in the textarea element', function () {
    var component = mount(React.createElement(Textarea, {
      minLength: 0
    }));
    expect(component.find('textarea').prop('minLength')).toBe(0);
  });
  it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the textarea when a bottomHelpText is passed', function () {
    var component = mount(React.createElement(Textarea, {
      bottomHelpText: "Help text"
    }));
    expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
    expect(component.find('textarea').prop('aria-labelledby')).toMatch(/inline-text-label/);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(Textarea, {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      inputId: expect.any(String),
      variant: 'default',
      size: 'medium'
    });
  });
  it('should have a inside div with id="headerTest"', function () {
    var component = mount(React.createElement(Textarea, {
      header: React.createElement("div", {
        id: "headerTest"
      })
    }));
    var div = component.find('div[id="headerTest"]');
    expect(div.exists()).toBeTruthy();
  });
  it('should have a inside div with id="footerTest"', function () {
    var component = mount(React.createElement(Textarea, {
      footer: React.createElement("div", {
        id: "footerTest"
      })
    }));
    var div = component.find('div[id="footerTest"]');
    expect(div.exists()).toBeTruthy();
  });
});