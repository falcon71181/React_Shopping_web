import React from 'react';
import { mount } from 'enzyme';
import Label from '..';
import StyledLabelText from '../labelText';
import HiddenElement from '../../../Structural/hiddenElement';
describe('<CheckboxRadioLabel/>', function () {
  describe('without hideLabel', function () {
    it('should set the inputId passed as the htmlFor prop in the label element', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label",
        inputId: "input-213"
      }));
      expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
    it('should set the id passed as the id prop in the label element', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label",
        id: "label-123"
      }));
      expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should render the label passed', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label"
      }));
      expect(component.find('label').text()).toBe('Input Label');
    });
    it('should render the StyledLabelText component', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label"
      }));
      expect(component.find(StyledLabelText).exists()).toBe(true);
      expect(component.find(HiddenElement).exists()).toBe(false);
    });
  });
  describe('with hideLabel', function () {
    it('should set the inputId passed as the htmlFor prop in the label element', function () {
      var component = mount(React.createElement(Label, {
        hideLabel: true,
        label: "Input Label",
        inputId: "input-213"
      }));
      expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
    it('should set the id passed as the id prop in the label element', function () {
      var component = mount(React.createElement(Label, {
        hideLabel: true,
        label: "Input Label",
        id: "label-123"
      }));
      expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should render the label passed', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label",
        hideLabel: true
      }));
      expect(component.find('label').text()).toBe('Input Label');
    });
    it('should render the HiddenElement component', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label",
        hideLabel: true
      }));
      expect(component.find(HiddenElement).exists()).toBe(true);
      expect(component.find(StyledLabelText).exists()).toBe(false);
    });
  });
});