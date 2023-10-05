import React from 'react';
import { mount } from 'enzyme';
import CardBody from '../cardBody';
import Spinner from '../../Spinner';
describe('<CardBody/>', function () {
  it('should render the Spinner when isLoading is passed', function () {
    var component = mount(React.createElement(CardBody, {
      isLoading: true
    }, "Test"));
    expect(component.find(Spinner).exists()).toBe(true);
  });
  it('should not render the Spinner when isLoading is not passed', function () {
    var component = mount(React.createElement(CardBody, null, "Test"));
    expect(component.find(Spinner).exists()).toBe(false);
  });
  it('should render the children when isLoading is not passed', function () {
    var component = mount(React.createElement(CardBody, null, React.createElement("div", null, "Test")));
    expect(component.text()).toBe('Test');
  });
  it('should not render the children when isLoading is passed', function () {
    var component = mount(React.createElement(CardBody, {
      isLoading: true
    }, "Test"));
    expect(component.text()).toBeFalsy();
  });
});