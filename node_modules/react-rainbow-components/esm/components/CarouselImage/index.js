import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CarouselCardContext } from '../CarouselCard/context';
import { getItemIndex } from '../CarouselCard/helpers';
import StyledLi from './styled/li';
import StyledInnerContainer from './styled/innerContainer';
import ImageContainer from './imageContainer';
import { useUniqueIdentifier } from '../../libs/hooks';
var defaultContext = {
  register: function register() {},
  unregister: function unregister() {}
};

var CarouselImage = function CarouselImage(props) {
  var assistiveText = props.assistiveText,
      description = props.description,
      header = props.header,
      href = props.href,
      src = props.src,
      style = props.style,
      className = props.className;

  var _ref = useContext(CarouselCardContext) || defaultContext,
      register = _ref.register,
      unregister = _ref.unregister,
      activeItem = _ref.activeItem,
      prevActiveItem = _ref.prevActiveItem,
      childrenRegistered = _ref.childrenRegistered,
      isAnimationPaused = _ref.isAnimationPaused;

  var imageId = useUniqueIdentifier('carousel-content-id');
  var indicatorId = useUniqueIdentifier('indicator-id');
  var itemRef = useRef();
  useEffect(function () {
    register({
      containerId: imageId,
      id: indicatorId,
      ref: itemRef.current,
      header: header
    });
    return function () {
      unregister(indicatorId);
    };
  }, []);

  var shouldBeActive = function shouldBeActive() {
    var areTheSame = activeItem === prevActiveItem;
    var isSelected = activeItem === indicatorId;
    return areTheSame && isSelected;
  };

  var shouldShow = function shouldShow() {
    var areTheSame = activeItem === prevActiveItem;
    if (areTheSame) return false;
    return activeItem === indicatorId;
  };

  var shouldHide = function shouldHide() {
    var isNotActive = activeItem !== indicatorId;
    var itWasActive = prevActiveItem === indicatorId;
    return isNotActive && itWasActive;
  };

  var getTabIndex = function getTabIndex() {
    if (href) {
      if (activeItem === indicatorId) {
        return 0;
      }

      return -1;
    }

    return undefined;
  };

  var getHtmlElememnt = function getHtmlElememnt() {
    if (href && typeof href === 'string') {
      return 'a';
    }

    return 'div';
  };

  var getAnimationDirection = function getAnimationDirection() {
    if (isAnimationPaused) {
      var activeItemIndex = getItemIndex(childrenRegistered, activeItem);
      var prevItemIndex = getItemIndex(childrenRegistered, prevActiveItem);

      if (activeItemIndex === 0 && prevItemIndex === childrenRegistered.length - 1) {
        return 'right-to-left';
      }

      if (prevItemIndex === 0 && activeItemIndex === childrenRegistered.length - 1) {
        return 'left-to-right';
      }

      if (activeItemIndex > prevItemIndex) {
        return 'right-to-left';
      }

      return 'left-to-right';
    }

    return 'right-to-left';
  };

  var ariaHidden = activeItem !== indicatorId;
  var hasContent = Boolean(header || description);
  var imageSrc = {
    backgroundImage: "url(".concat(src, ")")
  };
  return React.createElement(StyledLi, {
    id: imageId,
    className: className,
    role: "tabpanel",
    "aria-hidden": ariaHidden,
    "aria-labelledby": imageId,
    style: style,
    ref: itemRef,
    shouldBeActive: shouldBeActive(),
    shouldShow: shouldShow(),
    shouldHide: shouldHide(),
    direction: getAnimationDirection()
  }, React.createElement(StyledInnerContainer, {
    className: "rainbow-carousel-image",
    tabIndex: getTabIndex(),
    href: href,
    as: getHtmlElememnt(),
    "data-id": "carousel-image_inner-container"
  }, React.createElement(ImageContainer, {
    imageSrc: imageSrc,
    assistiveText: assistiveText,
    hasContent: hasContent,
    header: header,
    description: description
  })));
};

CarouselImage.propTypes = {
  src: PropTypes.string,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  assistiveText: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
CarouselImage.defaultProps = {
  src: undefined,
  header: undefined,
  description: undefined,
  assistiveText: undefined,
  href: undefined,
  className: undefined,
  style: undefined
};
export default CarouselImage;