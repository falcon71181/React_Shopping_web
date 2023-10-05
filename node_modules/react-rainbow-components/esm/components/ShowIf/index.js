import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AnimatedContainer from './styled';
import getElementBoundingClientRect from './helpers/getElementDimensions';

var ShowIf = function ShowIf(_ref) {
  var id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      isTrue = _ref.isTrue,
      inAnimation = _ref.inAnimation,
      outAnimation = _ref.outAnimation,
      children = _ref.children;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      animation = _useState2[0],
      setAnimation = _useState2[1];

  var _useState3 = useState(isTrue),
      _useState4 = _slicedToArray(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      dimensions = _useState6[0],
      setDimensions = _useState6[1];

  var ref = useRef();
  useLayoutEffect(function () {
    if (isTrue) {
      var rect = getElementBoundingClientRect(ref.current);
      setDimensions(rect);
      setIsVisible(true);
      setAnimation("".concat(inAnimation, "In"));
    } else {
      setAnimation("".concat(outAnimation, "Out"));
    }
  }, [isTrue, inAnimation, outAnimation]);

  var handleAnimationEnd = function handleAnimationEnd(event) {
    if (event.animationName.includes('Out')) {
      setIsVisible(false);
    }
  };

  return React.createElement(AnimatedContainer, {
    id: id,
    className: className,
    style: style,
    animation: animation,
    isVisible: isVisible,
    dimensions: dimensions,
    onAnimationEnd: handleAnimationEnd,
    ref: ref
  }, children);
};

ShowIf.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  isTrue: PropTypes.any,
  inAnimation: PropTypes.oneOf(['fade', 'slideVertical', 'slideHorizontal']),
  outAnimation: PropTypes.oneOf(['fade', 'slideVertical', 'slideHorizontal']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object, PropTypes.node])
};
ShowIf.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  isTrue: false,
  inAnimation: 'fade',
  outAnimation: 'fade',
  children: []
};
export default ShowIf;