import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon from '../../ButtonIcon';
import Notification from '../index';
describe('<Notification/>', function () {
  it('should fire an event when the close button is clicked', function () {
    var onClickFn = jest.fn();
    var component = mount(React.createElement(Notification, {
      title: "Notification test",
      onRequestClose: onClickFn
    }));
    component.find('button').simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
  it('should set the prop size as "small" in ButtonIcon', function () {
    var component = mount(React.createElement(Notification, {
      title: "Notification test"
    }));
    expect(component.find(ButtonIcon).prop('size')).toBe('small');
  });
  it('should not display the close button when hideCloseButton props is true', function () {
    var component = mount(React.createElement(Notification, {
      title: "Notification test",
      hideCloseButton: true
    }));
    expect(component.find(ButtonIcon).exists()).toBe(false);
  });
});