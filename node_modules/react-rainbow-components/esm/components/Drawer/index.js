import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from '../../libs/scrollController';
import CounterManager from '../../libs/counterManager';
import manageTab from '../../libs/manageTab';
import RenderIf from '../RenderIf';
import StyledBackDrop from './styled/backDrop';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import StyledCloseButton from './styled/closeButton';
import StyledDivider from './styled/divider';
import StyledFooter from './styled/footer';
import Header from './header';
import CloseIcon from './closeIcon';
import { useUniqueIdentifier } from '../../libs/hooks';
import getSlideFrom from './helpers/getSlideFrom';
var DrawerState = {
  OPENING: 0,
  OPENED: 1,
  CLOSING: 2,
  CLOSED: 3
};
export default function Drawer(props) {
  var id = props.id,
      isOpen = props.isOpen,
      hideCloseButton = props.hideCloseButton,
      onRequestClose = props.onRequestClose,
      onOpened = props.onOpened,
      header = props.header,
      footer = props.footer,
      size = props.size,
      slideFrom = props.slideFrom,
      children = props.children,
      className = props.className,
      style = props.style;
  var headerId = useUniqueIdentifier('drawer-header');
  var contentId = useUniqueIdentifier('drawer-content');
  var triggerRef = useRef(null);
  var drawerRef = useRef(null);
  var containerRef = useRef(null);
  var contentRef = useRef(null);

  var _useState = useState(isOpen ? DrawerState.OPENED : DrawerState.CLOSED),
      _useState2 = _slicedToArray(_useState, 2),
      drawerState = _useState2[0],
      setDrawerState = _useState2[1];

  useEffect(function () {
    var contentElement = contentRef.current;

    if (isOpen) {
      CounterManager.increment();
      disableBodyScroll(contentElement);
      triggerRef.current = document.activeElement;
      setDrawerState(DrawerState.OPENING);
    }

    return function () {
      if (isOpen) {
        CounterManager.decrement();
        if (triggerRef.current) triggerRef.current.focus();

        if (!CounterManager.hasModalsOpen()) {
          enableBodyScroll(contentElement);
        }

        clearAllBodyScrollLocks();
        setDrawerState(DrawerState.CLOSING);
      }
    };
  }, [isOpen]);
  useEffect(function () {
    if (isOpen && drawerState === DrawerState.OPENED) {
      drawerRef.current.focus();
      onOpened();
    }
  }, [drawerState, isOpen, onOpened]);

  var onSlideEnd = function onSlideEnd() {
    if (drawerState === DrawerState.OPENING) {
      setDrawerState(DrawerState.OPENED);
    } else if (drawerState === DrawerState.CLOSING) {
      setDrawerState(DrawerState.CLOSED);
    }
  };

  var closeDrawer = function closeDrawer() {
    return onRequestClose();
  };

  var handleBackDropClick = useCallback(function (event) {
    if (drawerRef.current.contains(event.target)) {
      return null;
    }

    return closeDrawer();
  }, []);
  useEffect(function () {
    var node = containerRef.current;

    if (drawerState === 1) {
      node.addEventListener('click', handleBackDropClick);
    }

    return function () {
      if (node) {
        node.removeEventListener('click', handleBackDropClick);
      }
    };
  }, [drawerState, handleBackDropClick]);

  var handleKeyPressed = function handleKeyPressed(event) {
    event.stopPropagation();

    if (isOpen && event.keyCode === ESCAPE_KEY && containerRef.current.contains(event.target)) {
      closeDrawer();
    }

    if (event.keyCode === TAB_KEY) {
      manageTab(drawerRef.current, event);
    }

    return null;
  };

  var drawerIsOpen = [DrawerState.OPENING, DrawerState.OPENED].includes(drawerState);

  if (drawerState !== null && drawerState !== DrawerState.CLOSED) {
    return createPortal(React.createElement(StyledBackDrop, {
      id: id,
      role: "presentation",
      ref: containerRef,
      onKeyDown: handleKeyPressed
    }, React.createElement(StyledContainer, {
      role: "dialog",
      tabIndex: -1,
      "aria-labelledby": headerId,
      "aria-modal": true,
      "aria-hidden": !drawerIsOpen,
      "aria-describedby": contentId,
      className: className,
      isOpen: drawerIsOpen,
      style: style,
      size: size,
      slideFrom: getSlideFrom(slideFrom, 'left'),
      ref: drawerRef,
      onAnimationEnd: onSlideEnd
    }, React.createElement(Header, {
      id: headerId,
      content: header
    }), React.createElement(RenderIf, {
      isTrue: !hideCloseButton
    }, React.createElement(StyledCloseButton, {
      id: "drawer-close-button",
      icon: React.createElement(CloseIcon, null),
      title: "Hide",
      onClick: closeDrawer
    })), React.createElement(StyledContent, {
      id: contentId,
      ref: contentRef
    }, children), React.createElement(RenderIf, {
      isTrue: footer
    }, React.createElement(StyledDivider, null), React.createElement(StyledFooter, null, footer)))), document.body);
  }

  return React.createElement(React.Fragment, null);
}
Drawer.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  footer: PropTypes.node,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onRequestClose: PropTypes.func,
  onOpened: PropTypes.func,
  id: PropTypes.string,
  children: PropTypes.node,
  hideCloseButton: PropTypes.bool,
  slideFrom: PropTypes.oneOf(['left', 'right'])
};
Drawer.defaultProps = {
  isOpen: false,
  header: null,
  size: 'small',
  footer: null,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined,
  onRequestClose: function onRequestClose() {},
  onOpened: function onOpened() {},
  hideCloseButton: false,
  slideFrom: 'left'
};