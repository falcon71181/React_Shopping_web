import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { StyledBackdrop, StyledCenteredImage, StyledImageContainer } from './styled';
import getTransform from './helpers/getTransform';

var ZoomedImage = function ZoomedImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      close = _ref.close,
      originalRect = _ref.originalRect;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCentered = _useState2[0],
      setIsCentered = _useState2[1];

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setIsCentered(false);
      setTimeout(close, 300);
    }
  };

  useEffect(function () {
    setIsCentered(true);
  }, []);
  useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  var handleClick = function handleClick() {
    setIsCentered(false);
    setTimeout(close, 300);
  };

  return ReactDOM.createPortal(React.createElement(StyledImageContainer, {
    onClick: handleClick
  }, React.createElement(StyledBackdrop, {
    isCentered: isCentered
  }), React.createElement(StyledCenteredImage, {
    src: src,
    alt: alt,
    top: originalRect.top,
    left: originalRect.left,
    width: originalRect.width,
    height: originalRect.height,
    isCentered: isCentered,
    transform: getTransform(originalRect)
  })), document.body);
};

ZoomedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  close: PropTypes.func,
  originalRect: PropTypes.object
};
ZoomedImage.defaultProps = {
  src: '',
  alt: '',
  close: function close() {},
  originalRect: {}
};
export default ZoomedImage;