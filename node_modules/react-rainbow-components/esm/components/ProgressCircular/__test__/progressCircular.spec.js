import React from 'react';
import { shallow } from 'enzyme';
import ProgressCircular from '../index';
import StyledContainer from '../styled/container';
import StyledPercentValue from '../styled/percentValue';
describe('<ProgressCircular/>', function () {
  it('should be accessible', function () {
    var component = shallow(React.createElement(ProgressCircular, {
      value: 25
    }));
    expect(component.find(StyledContainer).props()).toEqual(expect.objectContaining({
      role: 'progressbar',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
      'aria-valuenow': 25
    }));
  });
  it('should has set the value passed', function () {
    var component = shallow(React.createElement(ProgressCircular, {
      value: 25
    }));
    expect(component.find('ProgressRing').prop('percent')).toBe(25);
    expect(component.find(StyledPercentValue).text()).toBe('25%');
  });
});