import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './styled/avatar';
export default function Avatars(props) {
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
    return React.createElement(StyledAvatar, {
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
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  avatars: PropTypes.array,
  maxAvatars: PropTypes.number
};
Avatars.defaultProps = {
  size: 'medium',
  avatars: [],
  maxAvatars: 3
};