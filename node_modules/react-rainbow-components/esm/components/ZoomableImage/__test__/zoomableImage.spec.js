import React from 'react';
import { mount } from 'enzyme';
import ZoomableImage from '..';
import { StyledImage } from '../styled';
import ZoomedImage from '../zoomedImage';
describe('<ZoomableImage />', function () {
  it('should zoom the image when clicked', function () {
    var component = mount(React.createElement(ZoomableImage, {
      src: "https://via.placeholder.com/450"
    }));
    component.find(StyledImage).simulate('click');
    expect(component.find(ZoomedImage).exists()).toBe(true);
  });
});