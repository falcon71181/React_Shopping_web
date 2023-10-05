import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import Indicators from './indicators';
import { useChildrenRegister, usePrevious } from '../../libs/hooks';
import { getHeight, getItemIndex } from './helpers';
import AnimationButton from './animationButton';
import StyledContainer from './styled/container';
import StyledAutoplay from './styled/autoplay';
import StyledImagesUl from './styled/imagesUl';
var SELECTOR = '[role="tabpanel"]';

var CarouselCard = function CarouselCard(props) {
  var children = props.children,
      id = props.id,
      className = props.className,
      style = props.style,
      scrollDuration = props.scrollDuration,
      disableAutoScroll = props.disableAutoScroll,
      disableAutoRefresh = props.disableAutoRefresh;
  var containerRef = useRef();
  var listRef = useRef();
  var animationTimeoutRef = useRef();

  var _useState = useState(disableAutoScroll),
      _useState2 = _slicedToArray(_useState, 2),
      isAnimationPaused = _useState2[0],
      setIsAnimationPaused = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      activeItem = _useState4[0],
      setActiveItem = _useState4[1];

  var prevActiveItem = usePrevious(activeItem);

  var _useChildrenRegister = useChildrenRegister({
    containerRef: listRef,
    selector: SELECTOR
  }),
      childrenRegistered = _useChildrenRegister.childrenRegistered,
      register = _useChildrenRegister.register,
      unregister = _useChildrenRegister.unregister;

  useEffect(function () {
    if (childrenRegistered[0] && childrenRegistered[0].id !== activeItem) {
      setActiveItem(childrenRegistered[0].id);
    }
  }, [childrenRegistered]);
  useEffect(function () {
    if (!isAnimationPaused) {
      animationTimeoutRef.current = setTimeout(function () {
        var selectedItemIndex = getItemIndex(childrenRegistered, activeItem);
        var isLastItem = selectedItemIndex === childrenRegistered.length - 1;
        var nextItem = isLastItem ? 0 : selectedItemIndex + 1;

        if (isLastItem && disableAutoRefresh) {
          setIsAnimationPaused(true);
        } else if (childrenRegistered[nextItem]) {
          setActiveItem(childrenRegistered[nextItem].id);
        }
      }, scrollDuration * 1000);
    }

    return function () {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [activeItem, childrenRegistered, disableAutoRefresh, isAnimationPaused, scrollDuration]);

  var handleSelect = function handleSelect(childId) {
    setActiveItem(childId);
    setIsAnimationPaused(true);
  };

  var containerStyle = _objectSpread({
    height: getHeight(containerRef.current)
  }, style);

  var context = {
    childrenRegistered: childrenRegistered,
    activeItem: activeItem,
    prevActiveItem: prevActiveItem,
    isAnimationPaused: isAnimationPaused,
    register: register,
    unregister: unregister
  };
  return React.createElement(StyledContainer, {
    className: className,
    style: containerStyle,
    id: id,
    ref: containerRef
  }, React.createElement(StyledAutoplay, null, React.createElement(AnimationButton, {
    onClick: function onClick() {
      return setIsAnimationPaused(!isAnimationPaused);
    },
    isAnimationPaused: isAnimationPaused
  })), React.createElement(StyledImagesUl, {
    ref: listRef
  }, React.createElement(Provider, {
    value: context
  }, children)), React.createElement(Indicators, {
    carouselChildren: childrenRegistered,
    onSelect: handleSelect,
    selectedItem: activeItem
  }));
};

CarouselCard.propTypes = {
  scrollDuration: PropTypes.number,
  disableAutoScroll: PropTypes.bool,
  disableAutoRefresh: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  id: PropTypes.string
};
CarouselCard.defaultProps = {
  scrollDuration: 5,
  disableAutoScroll: false,
  disableAutoRefresh: false,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined
};
export default CarouselCard;