import React from 'react';
import { mount } from 'enzyme';
import AvatarMenu from '..';
describe('<AvatarMenu/>', function () {
  it('should pass the icon passed to the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      icon: React.createElement("svg", null)
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('icon')).toEqual(React.createElement("svg", null));
  });
  it('should set the title passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      title: "my title"
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('title')).toBe('my title');
  });
  it('should set the disabled passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      disabled: true
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('disabled')).toBe(true);
  });
  it('should set the tabIndex passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      tabIndex: 0
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('tabIndex')).toBe(0);
  });
  it('should set the initials passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      initials: "CM"
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('initials')).toBe('CM');
  });
  it('should set the initialsVariant passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      initialsVariant: "inverse"
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('initialsVariant')).toBe('inverse');
  });
  it('should set the avatarSize passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      avatarSize: "small"
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('avatarSize')).toBe('small');
  });
  it('should set the src passed in the AvatarButton', function () {
    var component = mount(React.createElement(AvatarMenu, {
      src: "mages/user/user2.jpg"
    }, React.createElement("span", null)));
    expect(component.find('AvatarButton').prop('src')).toBe('mages/user/user2.jpg');
  });
});