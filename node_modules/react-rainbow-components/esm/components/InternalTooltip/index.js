import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StyledTooltip from './styled';
import InternalOverlay from '../InternalOverlay';
import tooltipPositionResolver from './helpers/tooltipPositionResolver';
import resolveElement from '../InternalOverlay/helpers/resolveElement';
var InternalTooltip = React.forwardRef(function (props, ref) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      pos = _useState2[0],
      setPos = _useState2[1];

  var className = props.className,
      style = props.style,
      children = props.children,
      isVisible = props.isVisible,
      preferredPosition = props.preferredPosition,
      triggerElementRef = props.triggerElementRef;
  var tooltipRef = useRef();

  var handleOpen = function handleOpen() {
    var triggerRect = resolveElement(triggerElementRef).getBoundingClientRect();
    var tooltipRect = tooltipRef.current.getBoundingClientRect();

    if (tooltipRect.bottom < triggerRect.top) {
      setPos('top');
    } else if (tooltipRect.top > triggerRect.bottom) {
      setPos('bottom');
    } else if (tooltipRect.right < triggerRect.left) {
      setPos('left');
    } else if (tooltipRect.left > triggerRect.right) {
      setPos('right');
    } else {
      setPos('floating');
    }
  };

  if (!isVisible && pos !== null) {
    setPos(null);
  }

  return React.createElement(InternalOverlay, {
    isVisible: isVisible,
    triggerElementRef: triggerElementRef,
    positionResolver: function positionResolver(opts) {
      return tooltipPositionResolver(opts, preferredPosition);
    },
    onOpened: handleOpen,
    keepScrollEnabled: true
  }, React.createElement("div", {
    ref: ref
  }, React.createElement(StyledTooltip, {
    role: "tooltip",
    className: className,
    style: style,
    position: pos,
    isVisible: isVisible,
    ref: tooltipRef
  }, children)));
});
InternalTooltip.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  preferredPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  triggerElementRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  children: PropTypes.node
};
InternalTooltip.defaultProps = {
  className: undefined,
  style: undefined,
  isVisible: false,
  preferredPosition: 'top',
  children: undefined
};
export default InternalTooltip;