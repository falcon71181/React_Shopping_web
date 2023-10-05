import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '..';
import StyledTooltip from '../styled';
jest.useFakeTimers();
var triggerElement = {
  current: {
    getBoundingClientRect: jest.fn(function () {
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
    })
  }
};
describe('<Tooltip />', function () {
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
  });
  it('should have top as default position', function () {
    var component = mount(React.createElement(Tooltip, {
      triggerElementRef: triggerElement
    }));
    expect(component.prop('preferredPosition')).toBe('top');
  });
  it('should set the position after onOpen', function () {
    var component = mount(React.createElement(Tooltip, {
      triggerElementRef: triggerElement,
      isVisible: true
    }));
    jest.runAllTimers();
    expect(component.find(StyledTooltip).prop('position')).not.toBeNull();
  });
});