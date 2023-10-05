import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../index';
import StyledBar from '../styled/bar';
import StyledContainer from '../styled/container';
describe('<ProgressBar/>', function () {
  it('should has set the value passed', function () {
    var component = shallow(React.createElement(ProgressBar, {
      value: 25
    }));
    expect(component.find(StyledBar).prop('style').width).toBe('25%');
  });
  it('should be accessible', function () {
    var component = shallow(React.createElement(ProgressBar, {
      value: 25
    }));
    expect(component.find(StyledContainer).props()).toEqual(expect.objectContaining({
      role: 'progressbar',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
      'aria-valuenow': 25
    }));
  });
});