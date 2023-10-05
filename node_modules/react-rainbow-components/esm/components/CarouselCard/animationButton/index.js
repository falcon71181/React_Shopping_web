import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from './playIcon';
import PauseIcon from './pauseIcon';
import StyledAutoplayButton from '../styled/autoplayButton';
export default function AnimationButton(_ref) {
  var isAnimationPaused = _ref.isAnimationPaused,
      onClick = _ref.onClick;

  var getIcon = function getIcon() {
    if (isAnimationPaused) {
      return React.createElement(PlayIcon, null);
    }

    return React.createElement(PauseIcon, null);
  };

  var getAssistiveText = function getAssistiveText() {
    if (isAnimationPaused) {
      return 'Start auto-play';
    }

    return 'Stop auto-play';
  };

  return React.createElement(StyledAutoplayButton, {
    variant: "border-filled",
    size: "small",
    icon: getIcon(),
    onClick: onClick,
    ariaPressed: isAnimationPaused,
    assistiveText: getAssistiveText()
  });
}
AnimationButton.propTypes = {
  isAnimationPaused: PropTypes.bool,
  onClick: PropTypes.func
};
AnimationButton.defaultProps = {
  isAnimationPaused: true,
  onClick: function onClick() {}
};