"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _animationButton = _interopRequireDefault(require("../animationButton"));

describe('<AnimationButtom />', function () {
  it('should set the right assistive text', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_animationButton["default"], {
      isAnimationPaused: true
    })),
        getByText = _render.getByText;

    expect(getByText('Start auto-play')).toBeDefined();
  });
  it('should set the right assistive text', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_animationButton["default"], {
      isAnimationPaused: false
    })),
        getByText = _render2.getByText;

    expect(getByText('Stop auto-play')).toBeDefined();
  });
  it('should set the right aria-pressed value', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_animationButton["default"], {
      isAnimationPaused: true
    })),
        getByRole = _render3.getByRole;

    expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });
  it('should show the play icon', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_animationButton["default"], null)),
        getByTitle = _render4.getByTitle;

    expect(getByTitle('play')).toBeDefined();
  });
  it('should show the pause icon when isAnimationPaused is false', function () {
    var _render5 = (0, _react2.render)(_react["default"].createElement(_animationButton["default"], {
      isAnimationPaused: false
    })),
        getByTitle = _render5.getByTitle;

    expect(getByTitle('pause')).toBeDefined();
  });
  it('should call the function passed in onClick', function () {
    var onClickMockFn = jest.fn();

    var _render6 = (0, _react2.render)(_react["default"].createElement(_animationButton["default"], {
      onClick: onClickMockFn
    })),
        getByRole = _render6.getByRole;

    _react2.fireEvent.click(getByRole('button'));

    expect(onClickMockFn).toHaveBeenCalledTimes(1);
  });
});