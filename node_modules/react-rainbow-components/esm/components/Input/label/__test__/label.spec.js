import React from 'react';
import { mount } from 'enzyme';
import Label from '..';
import LabelText from '../labelText';
import HiddenElement from '../../../Structural/hiddenElement';
import RequiredAsterisk from '../../../RequiredAsterisk';
describe('<InputBaseLabel/>', function () {
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
    it('should set the required prop passed in the RequiredAsterisk component', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label",
        required: true
      }));
      expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should render the label passed', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label"
      }));
      expect(component.find('label').text()).toBe('Input Label');
    });
    it('should render the LabelText component', function () {
      var component = mount(React.createElement(Label, {
        label: "Input Label"
      }));
      expect(component.find(LabelText).exists()).toBe(true);
      expect(component.find(HiddenElement).exists()).toBe(false);
    });
    it('should not render the RequiredAsterisk when there is no label', function () {
      var component = mount(React.createElement(Label, {
        required: true
      }));
      expect(component.find(RequiredAsterisk).exists()).toBe(false);
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
      expect(component.find(LabelText).exists()).toBe(false);
    });
  });
});