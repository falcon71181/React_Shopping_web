import React from 'react';
import { mount } from 'enzyme';
import InternalOverlay from '..';
import * as scroll from '../../../libs/scrollController';
import * as resolver from '../ContentMetaResolver';
var mockDisableScroll = jest.fn();
var mockEnableScroll = jest.fn();
scroll.disableBodyScroll = mockDisableScroll;
scroll.enableBodyScroll = mockEnableScroll;
describe('<InternalOverlay />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
    mockDisableScroll.mockReset();
    mockEnableScroll.mockReset();
  });
  it('should render if isVisible is true', function () {
    var component = mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      isVisible: true
    }));
    expect(component.find('[id="test-id"]').exists()).toBe(true);
  });
  it('should not render if isVisible is false', function () {
    var component = mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {}
    }));
    expect(component.find('[id="test-id"]').exists()).toBe(false);
  });
  it('should disable scroll when isVisible is true', function () {
    var component = mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {}
    }));
    component.setProps({
      isVisible: true
    });
    component.setProps({});
    expect(mockDisableScroll).toHaveBeenCalledTimes(1);
  });
  it('should enable scroll when isVisible is false', function () {
    var component = mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      isVisible: true
    }));
    mockEnableScroll.mockClear();
    component.setProps({
      isVisible: false
    });
    expect(mockEnableScroll).toHaveBeenCalledTimes(1);
  });
  it('should resolve content meta', function () {
    var mockContentMetaResolver = jest.spyOn(resolver, 'default');
    mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      isVisible: true
    }));
    expect(mockContentMetaResolver).toHaveBeenCalledTimes(1);
  });
  it('should call positionResolver with the right parameters when it is passed', function () {
    var positionResolverMock = jest.fn();
    mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      positionResolver: positionResolverMock,
      isVisible: true
    }));
    expect(positionResolverMock).toHaveBeenCalledWith({
      content: expect.any(Object),
      trigger: expect.any(Object),
      viewport: expect.any(Object)
    });
  });
  it('should call onOpened when isVisible is true', function () {
    var onOpenedMock = jest.fn();
    mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      onOpened: onOpenedMock,
      isVisible: true
    }));
    expect(onOpenedMock).toHaveBeenCalledTimes(1);
  });
  it('should not call onOpened when isVisible is false', function () {
    var onOpenedMock = jest.fn();
    mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      onOpened: onOpenedMock
    }));
    expect(onOpenedMock).not.toHaveBeenCalled();
  });
  it('should call triggerElementRef when triggerElementRef is a function', function () {
    var triggerElementRefMock = jest.fn();
    mount(React.createElement(InternalOverlay, {
      render: function render() {
        return React.createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: triggerElementRefMock,
      isVisible: true
    }));
    expect(triggerElementRefMock).toHaveBeenCalledTimes(1);
  });
});