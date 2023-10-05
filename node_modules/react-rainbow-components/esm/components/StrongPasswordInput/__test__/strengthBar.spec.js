import React from 'react';
import { mount } from 'enzyme';
import StrengthBar from '../strengthBar';
import { StyledStateBar, StyledStateLabel } from '../styled';
describe('<StrengthBar />', function () {
  it('should render a StyledStateBar with the right `passwordState`', function () {
    var component = mount(React.createElement(StrengthBar, {
      passwordState: "weak"
    }));
    var styledStateBar = component.find(StyledStateBar);
    expect(styledStateBar.length).toBe(1);
    expect(styledStateBar.prop('passwordState')).toBe('weak');
  });
  it('should render the password state label when passed', function () {
    var passwordStateLabels = {
      weak: 'Weak',
      average: 'Average',
      strong: 'Strong'
    };
    var component = mount(React.createElement(StrengthBar, {
      passwordState: "weak",
      passwordStateLabels: passwordStateLabels
    }));
    expect(component.find(StyledStateLabel).length).toBe(1);
  });
});