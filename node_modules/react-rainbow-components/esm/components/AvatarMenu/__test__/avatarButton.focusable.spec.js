import React from 'react';
import { mount } from 'enzyme';
import AvatarButton from '../avatarButton';
describe('<AvatarButton/>', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(AvatarButton, {
      label: "AvatarButton label"
    }));
    expect(component).toBeFocusable();
  });
});