"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../../libs/constants");

var _ = _interopRequireDefault(require(".."));

var _InternalOverlay = _interopRequireDefault(require("../../InternalOverlay"));

var _excluded = ["render"];
jest.mock('../../InternalOverlay', function () {
  return jest.fn(function (_ref) {
    var Content = _ref.render,
        props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    return _react["default"].createElement("div", props, _react["default"].createElement(Content, null));
  });
});
describe('<HelpText />', function () {
  it('should show info when button is focused and hiddden when is not', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      text: "Help Text"
    }));
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('blur');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
  });
  it('should show info when mouse enter to button and hidden when leave', function () {
    jest.useFakeTimers();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      text: "Help Text"
    }));
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
    wrapper.find('button').simulate('mouseenter');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('mouseleave');
    jest.advanceTimersByTime(50);
    wrapper.update();
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
    jest.useRealTimers();
  });
  it('should hidden info when is button is focused and press ESCAPE key', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      text: "Help Text"
    }));
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('keyDown', {
      keyCode: _constants.ESCAPE_KEY
    });
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(false);
  });
  it('should show info when mouse leave to button and is focused', function () {
    jest.useFakeTimers();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      text: "Help Text"
    }));
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    wrapper.find('button').simulate('mouseleave');
    jest.advanceTimersByTime(50);
    wrapper.update();
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    jest.useRealTimers();
  });
  it('should maintain focus button when clicking in help text', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      text: _react["default"].createElement("div", {
        id: "test-id"
      }, "Help Text")
    }));
    wrapper.find('button').simulate('focus');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
    wrapper.find('[id="test-id"]').simulate('click');
    expect(wrapper.find(_InternalOverlay["default"]).prop('isVisible')).toBe(true);
  });
});