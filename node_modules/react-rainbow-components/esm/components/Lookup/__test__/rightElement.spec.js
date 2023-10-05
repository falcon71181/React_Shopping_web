import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon from '../../ButtonIcon';
import RightElement from '../rightElement';
import StyledInputIcon from '../styled/inputIcon';
describe('<RightElement />', function () {
  it('should render an icon container', function () {
    var component = mount(React.createElement(RightElement, null));
    expect(component.find(StyledInputIcon).exists()).toBe(true);
  });
  it('should render a close button when showCloseButton is passed', function () {
    var component = mount(React.createElement(RightElement, {
      showCloseButton: true
    }));
    expect(component.find(ButtonIcon).exists()).toBe(true);
  });
  it('should fire an event when click the button', function () {
    var onClearMockFn = jest.fn();
    var component = mount(React.createElement(RightElement, {
      showCloseButton: true,
      onClear: onClearMockFn
    }));
    component.find(ButtonIcon).simulate('click');
    expect(onClearMockFn).toHaveBeenCalledTimes(1);
  });
});