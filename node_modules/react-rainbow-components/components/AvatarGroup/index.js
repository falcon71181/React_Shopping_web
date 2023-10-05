"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AvatarGroup;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = _interopRequireDefault(require("./styled/container"));

var _avatars = _interopRequireDefault(require("./avatars"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _counter = _interopRequireDefault(require("./counter"));

function AvatarGroup(props) {
  var size = props.size,
      className = props.className,
      style = props.style,
      avatars = props.avatars,
      maxAvatars = props.maxAvatars,
      showCounter = props.showCounter;
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style,
    size: size
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: showCounter
  }, _react["default"].createElement(_counter["default"], {
    size: size,
    avatars: avatars,
    maxAvatars: maxAvatars
  })), _react["default"].createElement(_avatars["default"], {
    size: size,
    avatars: avatars,
    showCounter: showCounter,
    maxAvatars: maxAvatars
  }));
}

AvatarGroup.propTypes = {
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  avatars: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    src: _propTypes["default"].string,
    initials: _propTypes["default"].string,
    icon: _propTypes["default"].node,
    title: _propTypes["default"].string,
    assistiveText: _propTypes["default"].string
  })),
  maxAvatars: _propTypes["default"].number,
  showCounter: _propTypes["default"].bool
};
AvatarGroup.defaultProps = {
  size: 'medium',
  className: undefined,
  style: undefined,
  avatars: [],
  maxAvatars: 3,
  showCounter: false
};