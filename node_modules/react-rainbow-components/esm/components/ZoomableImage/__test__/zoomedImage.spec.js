import React from 'react';
import { mount } from 'enzyme';
import { StyledCenteredImage } from '../styled';
import ZoomedImage from '../zoomedImage';
jest.useFakeTimers();
var eventMap = {};
document.addEventListener = jest.fn(function (event, callback) {
  eventMap[event] = callback;
});
describe('<ZoomableImage />', function () {
  it('should call close when clicked', function () {
    var close = jest.fn();
    var component = mount(React.createElement(ZoomedImage, {
      src: "https://via.placeholder.com/450",
      originalRect: {},
      close: close
    }));
    component.find(StyledCenteredImage).simulate('click');
    jest.runAllTimers();
    expect(close).toHaveBeenCalled();
  });
  it('should close when Escape key is pressed', function () {
    var close = jest.fn();
    mount(React.createElement(ZoomedImage, {
      src: "https://via.placeholder.com/450",
      originalRect: {},
      close: close
    }));
    eventMap.keydown({
      key: 'Escape'
    });
    jest.runAllTimers();
    expect(close).toHaveBeenCalled();
  });
});