"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _playIcon = _interopRequireDefault(require("./playIcon"));

var _pauseIcon = _interopRequireDefault(require("./pauseIcon"));

var _autoplayButton = _interopRequireDefault(require("../styled/autoplayButton"));

function AnimationButton(_ref) {
  var isAnimationPaused = _ref.isAnimationPaused,
      onClick = _ref.onClick;

  var getIcon = function getIcon() {
    if (isAnimationPaused) {
      return _react["default"].createElement(_playIcon["default"], null);
    }

    return _react["default"].createElement(_pauseIcon["default"], null);
  };

  var getAssistiveText = function getAssistiveText() {
    if (isAnimationPaused) {
      return 'Start auto-play';
    }

    return 'Stop auto-play';
  };

  return _react["default"].createElement(_autoplayButton["default"], {
    variant: "border-filled",
    size: "small",
    icon: getIcon(),
    onClick: onClick,
    ariaPressed: isAnimationPaused,
    assistiveText: getAssistiveText()
  });
}

AnimationButton.propTypes = {
  isAnimationPaused: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
AnimationButton.defaultProps = {
  isAnimationPaused: true,
  onClick: function onClick() {}
};