import React from 'react';
import { mount } from 'enzyme';
import getSchemaFieldOptions from '../../helpers/getSchemaFieldOptions';
import StepOne from '..';
jest.mock('../../helpers/getSchemaFieldOptions', function () {
  return jest.fn(function () {
    return [];
  });
});
describe('<StepOne />', function () {
  it('should render a Select when actionOption is set to "merge-records"', function () {
    var component = mount(React.createElement(StepOne, {
      actionOption: "merge-records"
    }));
    expect(component.find('Select').exists()).toBe(true);
  });
  it('should not render a Select when actionOption is set to other value than "merge-records"', function () {
    var component = mount(React.createElement(StepOne, {
      actionOption: "add-records"
    }));
    expect(component.find('Select').exists()).toBe(false);
  });
  it('should pass the matchField prop passed as value prop to Select', function () {
    var component = mount(React.createElement(StepOne, {
      matchField: "test-field",
      actionOption: "merge-records"
    }));
    expect(component.find('Select').prop('value')).toBe('test-field');
  });
  it('should pass the right options to Select', function () {
    var expectedFieldOptions = [{
      label: 'Select the Field do you want match',
      value: 'default',
      disabled: true
    }, {
      label: 'Name',
      value: 'name'
    }, {
      label: 'Email',
      value: 'email'
    }];
    getSchemaFieldOptions.mockReturnValue(expectedFieldOptions);
    var component = mount(React.createElement(StepOne, {
      actionOption: "merge-records"
    }));
    expect(component.find('Select').prop('options')).toEqual(expectedFieldOptions);
  });
  it('should call getSchemaFieldOptions when change schemaFields', function () {
    getSchemaFieldOptions.mockReset();
    var component = mount(React.createElement(StepOne, {
      actionOption: "merge-records",
      schemaFields: []
    }));
    component.setProps({
      schemaFields: ['name', 'email', 'age']
    });
    expect(getSchemaFieldOptions.mock.calls[0][0]).toEqual([]);
    expect(getSchemaFieldOptions.mock.calls[1][0]).toEqual(['name', 'email', 'age']);
  });
});