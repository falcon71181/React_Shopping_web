import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnimationButtom from '../animationButton';
describe('<AnimationButtom />', function () {
  it('should set the right assistive text', function () {
    var _render = render(React.createElement(AnimationButtom, {
      isAnimationPaused: true
    })),
        getByText = _render.getByText;

    expect(getByText('Start auto-play')).toBeDefined();
  });
  it('should set the right assistive text', function () {
    var _render2 = render(React.createElement(AnimationButtom, {
      isAnimationPaused: false
    })),
        getByText = _render2.getByText;

    expect(getByText('Stop auto-play')).toBeDefined();
  });
  it('should set the right aria-pressed value', function () {
    var _render3 = render(React.createElement(AnimationButtom, {
      isAnimationPaused: true
    })),
        getByRole = _render3.getByRole;

    expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });
  it('should show the play icon', function () {
    var _render4 = render(React.createElement(AnimationButtom, null)),
        getByTitle = _render4.getByTitle;

    expect(getByTitle('play')).toBeDefined();
  });
  it('should show the pause icon when isAnimationPaused is false', function () {
    var _render5 = render(React.createElement(AnimationButtom, {
      isAnimationPaused: false
    })),
        getByTitle = _render5.getByTitle;

    expect(getByTitle('pause')).toBeDefined();
  });
  it('should call the function passed in onClick', function () {
    var onClickMockFn = jest.fn();

    var _render6 = render(React.createElement(AnimationButtom, {
      onClick: onClickMockFn
    })),
        getByRole = _render6.getByRole;

    fireEvent.click(getByRole('button'));
    expect(onClickMockFn).toHaveBeenCalledTimes(1);
  });
});