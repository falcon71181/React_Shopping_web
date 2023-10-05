import React from 'react';
import { mount } from 'enzyme';
import Rating from '..';
import { StyledLabel } from '../styled';
import ErrorText from '../../Input/styled/errorText';
describe('<Rating />', function () {
  it('should set the value of the star hovered to the state and set the value passed to the state when the mouse leave the component', function () {
    var component = mount(React.createElement(Rating, {
      value: "2"
    }));
    component.find('input[value=3]').simulate('mouseover');
    expect(component.state().value).toBe('3');
    component.simulate('mouseleave');
    expect(component.state().value).toBe('2');
  });
  it('should not set the value of the star hovered to the state when readOnly is true', function () {
    var component = mount(React.createElement(Rating, {
      value: "2",
      readOnly: true
    }));
    component.find('input[value=4]').simulate('mouseover');
    expect(component.state().value).toBe('2');
  });
  it('should render a label when label prop is passed', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label"
    }));
    expect(component.find(StyledLabel).exists()).toBe(true);
  });
  it('should set "left" to labelAlignment prop passed in the Label component', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label",
      labelAlignment: "left"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
  });
  it('should set "right" to labelAlignment prop passed in the Label component', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label",
      labelAlignment: "right"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
  });
  it('should set "center" to labelAlignment if prop not passed in the Label component', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('center');
  });
  it('should set the inputs as required when required is true', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label",
      required: true
    }));
    component.find('input[type="radio"]').forEach(function (input) {
      expect(input.prop('required')).toBe(true);
    });
  });
  it('should show the help message', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label",
      bottomHelpText: React.createElement("p", {
        id: "help-text"
      })
    }));
    expect(component.find('#help-text').exists()).toBe(true);
  });
  it('should show the error message', function () {
    var component = mount(React.createElement(Rating, {
      label: "Rating Label",
      error: "Error text"
    }));
    var errorTextId = component.find(ErrorText).prop('id');
    expect(errorTextId).toMatch(/error-message/);
    component.find('input[type="radio"]').forEach(function (input) {
      expect(input.prop('aria-describedby')).toBe(errorTextId);
    });
  });
});