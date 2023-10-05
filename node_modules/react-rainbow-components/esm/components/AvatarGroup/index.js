import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import Avatars from './avatars';
import RenderIf from '../RenderIf';
import Counter from './counter';
export default function AvatarGroup(props) {
  var size = props.size,
      className = props.className,
      style = props.style,
      avatars = props.avatars,
      maxAvatars = props.maxAvatars,
      showCounter = props.showCounter;
  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    size: size
  }, React.createElement(RenderIf, {
    isTrue: showCounter
  }, React.createElement(Counter, {
    size: size,
    avatars: avatars,
    maxAvatars: maxAvatars
  })), React.createElement(Avatars, {
    size: size,
    avatars: avatars,
    showCounter: showCounter,
    maxAvatars: maxAvatars
  }));
}
AvatarGroup.propTypes = {
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  className: PropTypes.string,
  style: PropTypes.object,
  avatars: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    initials: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    assistiveText: PropTypes.string
  })),
  maxAvatars: PropTypes.number,
  showCounter: PropTypes.bool
};
AvatarGroup.defaultProps = {
  size: 'medium',
  className: undefined,
  style: undefined,
  avatars: [],
  maxAvatars: 3,
  showCounter: false
};