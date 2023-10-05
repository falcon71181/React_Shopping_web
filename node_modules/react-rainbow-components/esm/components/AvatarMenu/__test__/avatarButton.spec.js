import React from 'react';
import { mount } from 'enzyme';
import AvatarButton from '../avatarButton';
import StyledButton from '../styled/button';
describe('<AvatarButton/>', function () {
  it('should focus the AvatarButton when the focus method is called', function () {
    var component = mount(React.createElement(AvatarButton, null));
    component.instance().focus();
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var buttonDataId = component.find(StyledButton).prop('data-id');
    expect(focusedElementDataId).toBe(buttonDataId);
  });
  it('should blur the AvatarButton when the blur method is called', function () {
    var component = mount(React.createElement(AvatarButton, null));
    var instance = component.instance();
    var buttonDataId = component.find(StyledButton).prop('data-id');
    instance.focus();
    expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
    instance.blur();
    expect(document.activeElement.getAttribute('data-id')).toBeNull();
  });
});