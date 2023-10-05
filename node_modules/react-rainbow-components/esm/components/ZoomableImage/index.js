import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import ZoomedImage from './zoomedImage';
import { StyledImage } from './styled';

var ZoomableImage = function ZoomableImage(_ref) {
  var className = _ref.className,
      style = _ref.style,
      src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height;
  var ref = useRef();
  var imageRect = useRef({});

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var open = function open() {
    imageRect.current = ref.current.getBoundingClientRect();
    setIsOpen(true);
  };

  var close = function close() {
    setIsOpen(false);
  };

  return React.createElement(React.Fragment, null, React.createElement(StyledImage, {
    className: className,
    style: style,
    src: src,
    alt: alt,
    width: width,
    height: height,
    ref: ref,
    isOpen: isOpen,
    onClick: open
  }), React.createElement(RenderIf, {
    isTrue: isOpen
  }, React.createElement(ZoomedImage, {
    src: src,
    alt: alt,
    close: close,
    originalRect: imageRect.current
  })));
};

ZoomableImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
ZoomableImage.defaultProps = {
  className: undefined,
  style: undefined,
  src: '',
  alt: '',
  width: undefined,
  height: undefined
};
export default ZoomableImage;