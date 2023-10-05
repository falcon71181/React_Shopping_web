import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _typeof from "@babel/runtime/helpers/typeof";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useIsomorphicLayoutEffect } from '../../libs/hooks';
import ContentMetaResolver from './ContentMetaResolver';
import defaultPositionResolver from './helpers/defaultPositionResolver';
import resolveElement from './helpers/resolveElement';
import useDisableScroll from './hooks/useDisableScroll';
import { ZINDEX_OVERLAY } from '../../styles/zIndex';
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    z-index: ", ";\n    top: ", "px;\n    left: ", "px;\n    bottom: ", "px;\n    ", ";\n"])), ZINDEX_OVERLAY, function (props) {
  return props.position && props.position.top;
}, function (props) {
  return props.position && props.position.left;
}, function (props) {
  return props.position && props.position.bottom;
}, function (props) {
  return props.position && props.position.width && "\n            width: ".concat(props.position.width, "px;\n        ");
});

var resolveTriggerMeta = function resolveTriggerMeta(ref) {
  var element = resolveElement(ref);

  if (element instanceof Element) {
    var _element$getClientRec = element.getClientRects()[0],
        x = _element$getClientRec.x,
        y = _element$getClientRec.y,
        width = _element$getClientRec.width,
        height = _element$getClientRec.height;
    return {
      leftUpAnchor: {
        x: x,
        y: y
      },
      leftBottomAnchor: {
        x: x,
        y: y + height
      },
      rightUpAnchor: {
        x: x + width,
        y: y
      },
      rightBottomAnchor: {
        x: x + width,
        y: y + height
      },
      width: width,
      height: height
    };
  }

  console.debug("The \"triggerElementRef\" provided is not resolving to a valid DOM Element.");
  return {
    leftUpAnchor: {
      x: 0,
      y: 0
    },
    leftBottomAnchor: {
      x: 0,
      y: 0
    },
    rightUpAnchor: {
      x: 0,
      y: 0
    },
    rightBottomAnchor: {
      x: 0,
      y: 0
    },
    width: 0,
    height: 0
  };
};

var resolveViewportMeta = function resolveViewportMeta() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

var resolvePosition = function resolvePosition(opts) {
  var triggerMeta = opts.triggerMeta,
      viewportMeta = opts.viewportMeta,
      contentMeta = opts.contentMeta,
      positionResolver = opts.positionResolver;

  if (typeof positionResolver === 'function') {
    var pos = positionResolver({
      trigger: triggerMeta,
      viewport: viewportMeta,
      content: contentMeta
    });

    if (_typeof(pos) === 'object') {
      return pos;
    }
  }

  return defaultPositionResolver({
    trigger: triggerMeta,
    viewport: viewportMeta,
    content: contentMeta
  });
};

var InternalOverlay = function InternalOverlay(props) {
  var ContentComponent = props.render,
      isVisible = props.isVisible,
      triggerElementRef = props.triggerElementRef,
      positionResolver = props.positionResolver,
      onOpened = props.onOpened,
      children = props.children,
      keepScrollEnabled = props.keepScrollEnabled;
  var containerRef = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      contentMeta = _useState2[0],
      updateContentMeta = _useState2[1];

  var shouldOpen = isVisible && contentMeta;
  useEffect(function () {
    if (shouldOpen) {
      onOpened();
    }
  }, [shouldOpen]);
  var shouldDisableScroll = shouldOpen && !keepScrollEnabled;
  useDisableScroll(shouldDisableScroll);
  useIsomorphicLayoutEffect(function () {
    if (contentMeta && containerRef.current) {
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
          width = _containerRef$current.width,
          height = _containerRef$current.height;

      if (width !== contentMeta.width || height !== contentMeta.height) {
        updateContentMeta({
          width: width,
          height: height
        });
      }
    }
  });

  if (isVisible) {
    var content = children || React.createElement(ContentComponent, null);

    if (contentMeta) {
      var triggerMeta = resolveTriggerMeta(triggerElementRef);
      var viewportMeta = resolveViewportMeta();
      var position = resolvePosition({
        triggerMeta: triggerMeta,
        contentMeta: contentMeta,
        viewportMeta: viewportMeta,
        positionResolver: positionResolver
      });
      return createPortal(React.createElement(Container, {
        position: position,
        ref: containerRef
      }, content), document.body);
    }

    return React.createElement(ContentMetaResolver, {
      component: ContentComponent,
      onResolved: updateContentMeta
    }, children);
  }

  return null;
};

InternalOverlay.propTypes = {
  render: PropTypes.func,
  isVisible: PropTypes.bool,
  triggerElementRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  positionResolver: PropTypes.func,
  onOpened: PropTypes.func,
  keepScrollEnabled: PropTypes.bool,
  children: PropTypes.node
};
InternalOverlay.defaultProps = {
  render: function render() {},
  isVisible: false,
  positionResolver: undefined,
  onOpened: function onOpened() {},
  children: undefined,
  keepScrollEnabled: false,
  triggerElementRef: undefined
};
InternalOverlay.defaultPositionResolver = defaultPositionResolver;
export default InternalOverlay;