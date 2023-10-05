import _toArray from "@babel/runtime/helpers/toArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import useArrowKeyNav from './hooks/useArrowKeyNav';
import Spinner from '../Spinner';
import { StyledContent } from './styled';
export default function MenuContent(props) {
  var children = props.children,
      isLoading = props.isLoading,
      ariaLabel = props.ariaLabel,
      onRequestClose = props.onRequestClose;
  var childrenRefs = useRef([]);
  var containerRef = useRef();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      childCount = _useState2[0],
      setChildCount = _useState2[1];

  var _useArrowKeyNav = useArrowKeyNav({
    childrenRefs: childrenRefs.current,
    isLoading: isLoading
  }),
      focusedChildIndex = _useArrowKeyNav.focusedChildIndex,
      keyDownHandler = _useArrowKeyNav.handleKeyPress,
      focusMatchedItem = _useArrowKeyNav.focusMatchedItem,
      clearFocusedChild = _useArrowKeyNav.clearFocusedChild,
      focusChild = _useArrowKeyNav.focusChild;

  var privateOnClose = useCallback(function () {
    clearFocusedChild();
    onRequestClose();
  }, [clearFocusedChild, onRequestClose]);
  var privateOnHover = useCallback(function (event, childRef) {
    return focusMatchedItem(childRef);
  }, [focusMatchedItem]);
  var privateRegisterChild = useCallback(function (childRef) {
    if (childRef) {
      var _getChildMenuItemNode = getChildMenuItemNodes(containerRef.current),
          _getChildMenuItemNode2 = _toArray(_getChildMenuItemNode),
          nodes = _getChildMenuItemNode2.slice(0);

      childrenRefs.current = insertChildOrderly(childrenRefs.current, childRef, nodes);
      setChildCount(childrenRefs.current.length);
    }
  }, []);
  var privateUnregisterChild = useCallback(function (childRef) {
    if (childRef) {
      childrenRefs.current = childrenRefs.current.filter(function (child) {
        return child !== childRef;
      });
      setChildCount(childrenRefs.current.length);
    }
  }, []);
  useEffect(function () {
    if (!isLoading && childCount > 0) {
      focusChild(focusedChildIndex || 0);
    }
  }, [isLoading, childCount, focusChild, focusedChildIndex]);

  if (isLoading) {
    return React.createElement(Spinner, {
      assistiveText: "loading menu",
      isVisible: true,
      size: "small"
    });
  }

  return React.createElement(StyledContent, {
    ref: containerRef,
    role: "menu",
    "aria-label": ariaLabel,
    onKeyDown: keyDownHandler
  }, React.createElement(Provider, {
    value: {
      privateOnClose: privateOnClose,
      privateOnHover: privateOnHover,
      privateRegisterChild: privateRegisterChild,
      privateUnregisterChild: privateUnregisterChild
    }
  }, children));
}
MenuContent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
MenuContent.defaultProps = {
  className: '',
  style: {}
};