import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { StyledShapeContainer, StyledLoadingShape, StyledImageIcon, StyledAvatarIcon } from './styled';

var LoadingShape = function LoadingShape(props) {
  var className = props.className,
      style = props.style,
      shape = props.shape,
      variant = props.variant;
  var shapeRef = useRef();
  var isImage = variant === 'image';
  var isAvatar = variant === 'avatar';
  useEffect(function () {
    var element = shapeRef.current;

    if (shape === 'square' || shape === 'circle') {
      element.style.width = "".concat(element.offsetHeight, "px");
    } else {
      element.style.width = '100%';
    }
  });
  return React.createElement(StyledShapeContainer, {
    className: className,
    style: style
  }, React.createElement(StyledLoadingShape, {
    shape: shape,
    variant: variant,
    ref: shapeRef
  }, React.createElement(RenderIf, {
    isTrue: isImage
  }, React.createElement(StyledImageIcon, {
    shape: shape
  })), React.createElement(RenderIf, {
    isTrue: isAvatar
  }, React.createElement(StyledAvatarIcon, {
    shape: shape
  }))));
};

LoadingShape.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  shape: PropTypes.oneOf(['circle', 'rect', 'rounded-rect', 'square']),
  variant: PropTypes.oneOf(['solid', 'image', 'avatar'])
};
LoadingShape.defaultProps = {
  className: undefined,
  style: undefined,
  shape: 'rounded-rect',
  variant: 'solid'
};
export default LoadingShape;