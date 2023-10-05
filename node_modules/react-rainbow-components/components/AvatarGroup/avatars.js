"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Avatars;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _avatar = _interopRequireDefault(require("./styled/avatar"));

function Avatars(props) {
  var avatars = props.avatars,
      maxAvatars = props.maxAvatars,
      size = props.size;
  var items = avatars.slice(0, maxAvatars).map(function (avatar, idx) {
    var src = avatar.src,
        assistiveText = avatar.assistiveText,
        title = avatar.title,
        initials = avatar.initials,
        icon = avatar.icon;
    var key = "avatar-".concat(idx);
    var zIndex = "".concat(maxAvatars - idx);
    return _react["default"].createElement(_avatar["default"], {
      src: src,
      assistiveText: assistiveText,
      title: title,
      initials: initials,
      icon: icon,
      size: size,
      zIndex: zIndex,
      key: key
    });
  });
  return items;
}

Avatars.propTypes = {
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  avatars: _propTypes["default"].array,
  maxAvatars: _propTypes["default"].number
};
Avatars.defaultProps = {
  size: 'medium',
  avatars: [],
  maxAvatars: 3
};