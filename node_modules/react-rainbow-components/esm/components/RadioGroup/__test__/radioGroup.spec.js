import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from '..';
import StyledLabel from '../styled/label';
import RadioGroupStyledContentContainer from '../styled/contentContainer';
describe('<RadioGroup />', function () {
  it('renders correctly in vertical orientation (default)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = mount(React.createElement(RadioGroup, {
      options: options
    }));
    var elem = component.find(RadioGroupStyledContentContainer);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('column');
  });
  it('renders correctly in vertical orientation (explicit)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = mount(React.createElement(RadioGroup, {
      options: options,
      orientation: "vertical"
    }));
    var elem = component.find(RadioGroupStyledContentContainer);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('column');
  });
  it('renders correctly in horizontal orientation (explicit)', function () {
    var options = [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'user',
      label: 'User'
    }];
    var component = mount(React.createElement(RadioGroup, {
      options: options,
      orientation: "horizontal"
    }));
    var elem = component.find(RadioGroupStyledContentContainer);
    expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('row');
  });
  it('should render a label when label prop is passed', function () {
    var component = mount(React.createElement(RadioGroup, {
      label: "RadioGroup Label"
    }));
    expect(component.find(StyledLabel).exists()).toBe(true);
  });
  it('should set "left" to labelAlignment prop passed in the Label component', function () {
    var component = mount(React.createElement(RadioGroup, {
      label: "RadioGroup Label",
      labelAlignment: "left"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
  });
  it('should set "right" to labelAlignment prop passed in the Label component', function () {
    var component = mount(React.createElement(RadioGroup, {
      label: "RadioGroup Label",
      labelAlignment: "right"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
  });
  it('should set "left" to labelAlignment if prop not passed in the Label component', function () {
    var component = mount(React.createElement(RadioGroup, {
      label: "RadioGroup Label"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
  });
});