import React from 'react';
import { mount } from 'enzyme';
import ImportRecordsFlow from '..';
import Footer from '../footer';
describe('<ImportRecordsFlow />', function () {
  it('should set isBackButtonDisabled to true initially in Footer component', function () {
    var component = mount(React.createElement(ImportRecordsFlow, {
      isOpen: true
    }));
    expect(component.find(Footer).prop('isBackButtonDisabled')).toBe(true);
  });
  it('should set isNextButtonDisabled to true initially in Footer component', function () {
    var component = mount(React.createElement(ImportRecordsFlow, {
      isOpen: true
    }));
    expect(component.find(Footer).prop('isNextButtonDisabled')).toBe(true);
  });
  it('should set the right modal title initially', function () {
    var component = mount(React.createElement(ImportRecordsFlow, {
      isOpen: true
    }));
    expect(component.find('Modal').prop('title')).toBe('Whats do you want to do?');
  });
});