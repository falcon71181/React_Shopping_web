import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["render"];
import React from 'react';
import { mount } from 'enzyme';
import { ESCAPE_KEY } from '../../../libs/constants';
import HelpText from '..';
import InternalOverlay from '../../InternalOverlay';
jest.mock('../../InternalOverlay', function () {
  return jest.fn(function (_ref) {
    var Content = _ref.render,
        props = _objectWithoutProperties(_ref, _excluded);

    return React.createElement("div", props, React.createElement(Content, null));
  });
});
describe('<HelpText />', function () {
  it('should show info when button is focused and hiddden when is not', function () {
    var wrapper = mount(React.createElement(HelpText, {
      text: "Help Text"
    }));
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('blur');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
  });
  it('should show info when mouse enter to button and hidden when leave', function () {
    jest.useFakeTimers();
    var wrapper = mount(React.createElement(HelpText, {
      text: "Help Text"
    }));
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
    wrapper.find('button').simulate('mouseenter');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('mouseleave');
    jest.advanceTimersByTime(50);
    wrapper.update();
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
    jest.useRealTimers();
  });
  it('should hidden info when is button is focused and press ESCAPE key', function () {
    var wrapper = mount(React.createElement(HelpText, {
      text: "Help Text"
    }));
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('keyDown', {
      keyCode: ESCAPE_KEY
    });
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
  });
  it('should show info when mouse leave to button and is focused', function () {
    jest.useFakeTimers();
    var wrapper = mount(React.createElement(HelpText, {
      text: "Help Text"
    }));
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('mouseleave');
    jest.advanceTimersByTime(50);
    wrapper.update();
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    jest.useRealTimers();
  });
  it('should maintain focus button when clicking in help text', function () {
    var wrapper = mount(React.createElement(HelpText, {
      text: React.createElement("div", {
        id: "test-id"
      }, "Help Text")
    }));
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    wrapper.find('[id="test-id"]').simulate('click');
    expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
  });
});