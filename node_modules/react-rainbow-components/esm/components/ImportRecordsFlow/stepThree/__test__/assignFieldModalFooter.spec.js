import React from 'react';
import { shallow } from 'enzyme';
import AssignFieldModalFooter from '../assignFieldModalFooter';
import StyledCancelButton from '../styled/cancelButton';
describe('<AssignFieldModalFooter />', function () {
  it('should run cancel method when cancel button is clicked', function () {
    var onCancelFn = jest.fn();
    var component = shallow(React.createElement(AssignFieldModalFooter, {
      onCancel: onCancelFn
    }));
    component.find(StyledCancelButton).simulate('click');
    expect(onCancelFn).toHaveBeenCalled();
  });
  it('should run assign method when assign button is clicked', function () {
    var onAssignFn = jest.fn();
    var component = shallow(React.createElement(AssignFieldModalFooter, {
      onAssign: onAssignFn
    }));
    component.find('Button').simulate('click');
    expect(onAssignFn).toHaveBeenCalled();
  });
  it('should disable the button when disable param is set to true', function () {
    var component = shallow(React.createElement(AssignFieldModalFooter, {
      isAssignButtonDisabled: true
    }));
    expect(component.find('Button').prop('disabled')).toBe(true);
  });
});