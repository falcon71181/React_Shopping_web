import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';
import Spinner from '../../Spinner';
describe('<Button/>', function () {
  it('should focus the button when the focus method is called', function () {
    var component = mount(React.createElement(Button, {
      label: "OK"
    }));
    component.instance().focus();
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var buttonDataId = component.find('button').prop('data-id');
    expect(focusedElementDataId).toBe(buttonDataId);
  });
  it('should blur the button when the blur method is called', function () {
    var component = mount(React.createElement(Button, {
      label: "OK"
    }));
    var instance = component.instance();
    var buttonDataId = component.find('button').prop('data-id');
    instance.focus();
    expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
    instance.blur();
    expect(document.activeElement.getAttribute('data-id')).toBeNull();
  });
  it('should set disable to true when it is passed', function () {
    var component = mount(React.createElement(Button, {
      label: "my label",
      disabled: true
    }));
    expect(component.find('button').prop('disabled')).toBe(true);
  });
  it('should set the tabIndex passed', function () {
    var component = mount(React.createElement(Button, {
      label: "my label",
      tabIndex: 0
    }));
    expect(component.find('button').prop('tabIndex')).toBe(0);
  });
  it('should set the title passed', function () {
    var component = mount(React.createElement(Button, {
      label: "my label",
      title: "my title"
    }));
    expect(component.find('button').prop('title')).toBe('my title');
  });
  it('should set the type passed', function () {
    var component = mount(React.createElement(Button, {
      label: "my label",
      type: "reset"
    }));
    expect(component.find('button').prop('type')).toBe('reset');
  });
  it('should set aria-haspopup to true when it is passed', function () {
    var component = mount(React.createElement(Button, {
      label: "my label",
      ariaHaspopup: true
    }));
    expect(component.find('button').prop('aria-haspopup')).toBe(true);
  });
  it('should set the label passed as children', function () {
    var component = mount(React.createElement(Button, {
      label: "Click me"
    }));
    expect(component.find('button').text()).toBe('Click me');
  });
  it('should render the Spinner when isLoading is passed', function () {
    var component = mount(React.createElement(Button, {
      label: "Button Label",
      isLoading: true
    }));
    expect(component.find(Spinner).exists()).toBe(true);
  });
  it('should set disable to true when isLoading is passed', function () {
    var component = mount(React.createElement(Button, {
      label: "my label",
      isLoading: true
    }));
    expect(component.find('button').prop('disabled')).toBe(true);
  });
  it('should render the Spinner and label when isLoading and label are passed', function () {
    var component = mount(React.createElement(Button, {
      label: "OK",
      isLoading: true
    }));
    expect(component.text()).toBe('OK');
    expect(component.find(Spinner).exists()).toBe(true);
  });
  it('should render the Spinner and children when isLoading, children and label are passed', function () {
    var component = mount(React.createElement(Button, {
      label: "OK",
      isLoading: true
    }, "Test"));
    expect(component.text()).toBe('Test');
    expect(component.find(Spinner).exists()).toBe(true);
  });
  it('should render the children when label and children are passed', function () {
    var component = mount(React.createElement(Button, {
      label: "OK"
    }, "Test"));
    expect(component.text()).toBe('Test');
  });
  it('should return the html button element when access the htmlElementRef getter', function () {
    var component = mount(React.createElement(Button, {
      label: "OK"
    }));
    expect(component.instance().htmlElementRef).toEqual({
      current: expect.any(HTMLButtonElement)
    });
  });
});