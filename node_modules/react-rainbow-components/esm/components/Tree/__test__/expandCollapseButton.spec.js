import React from 'react';
import { mount } from 'enzyme';
import ExpandCollapseButton from '../expandCollapseButton';
import ButtonIcon from '../../ButtonIcon';
describe('<ExpandCollapseButton/>', function () {
  it('should return the Spinner component when isLoading prop is true', function () {
    var component = mount(React.createElement(ExpandCollapseButton, {
      isLoading: true
    }));
    expect(component.find('Spinner').exists()).toBe(true);
  });
  it('should return the ButtonIcon component when hasChildren prop is true', function () {
    var component = mount(React.createElement(ExpandCollapseButton, {
      hasChildren: true
    }));
    expect(component.find(ButtonIcon).exists()).toBe(true);
  });
  it('should set the right icon when isExpanded prop is true', function () {
    var component = mount(React.createElement(ExpandCollapseButton, {
      isExpanded: true,
      hasChildren: true
    }));
    expect(component.find(ButtonIcon).find('DownArrow').exists()).toBe(true);
  });
  it('should set the right icon when isExpanded prop is false', function () {
    var component = mount(React.createElement(ExpandCollapseButton, {
      isExpanded: false,
      hasChildren: true
    }));
    expect(component.find(ButtonIcon).find('RightArrow').exists()).toBe(true);
  });
  it('should fire onclick callback when ButtonIcon is clicked', function () {
    var onClickMock = jest.fn();
    var component = mount(React.createElement(ExpandCollapseButton, {
      isExpanded: true,
      hasChildren: true,
      onClick: onClickMock
    }));
    component.find(ButtonIcon).simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});