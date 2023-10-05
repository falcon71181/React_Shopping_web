"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hooks = require("../../libs/hooks");

var _ContentMetaResolver = _interopRequireDefault(require("./ContentMetaResolver"));

var _defaultPositionResolver = _interopRequireDefault(require("./helpers/defaultPositionResolver"));

var _resolveElement = _interopRequireDefault(require("./helpers/resolveElement"));

var _useDisableScroll = _interopRequireDefault(require("./hooks/useDisableScroll"));

var _zIndex = require("../../styles/zIndex");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: fixed;\n    z-index: ", ";\n    top: ", "px;\n    left: ", "px;\n    bottom: ", "px;\n    ", ";\n"])), _zIndex.ZINDEX_OVERLAY, function (props) {
  return props.position && props.position.top;
}, function (props) {
  return props.position && props.position.left;
}, function (props) {
  return props.position && props.position.bottom;
}, function (props) {
  return props.position && props.position.width && "\n            width: ".concat(props.position.width, "px;\n        ");
});

var resolveTriggerMeta = function resolveTriggerMeta(ref) {
  var element = (0, _resolveElement["default"])(ref);

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

    if ((0, _typeof2["default"])(pos) === 'object') {
      return pos;
    }
  }

  return (0, _defaultPositionResolver["default"])({
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
  var containerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      contentMeta = _useState2[0],
      updateContentMeta = _useState2[1];

  var shouldOpen = isVisible && contentMeta;
  (0, _react.useEffect)(function () {
    if (shouldOpen) {
      onOpened();
    }
  }, [shouldOpen]);
  var shouldDisableScroll = shouldOpen && !keepScrollEnabled;
  (0, _useDisableScroll["default"])(shouldDisableScroll);
  (0, _hooks.useIsomorphicLayoutEffect)(function () {
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
    var content = children || _react["default"].createElement(ContentComponent, null);

    if (contentMeta) {
      var triggerMeta = resolveTriggerMeta(triggerElementRef);
      var viewportMeta = resolveViewportMeta();
      var position = resolvePosition({
        triggerMeta: triggerMeta,
        contentMeta: contentMeta,
        viewportMeta: viewportMeta,
        positionResolver: positionResolver
      });
      return (0, _reactDom.createPortal)(_react["default"].createElement(Container, {
        position: position,
        ref: containerRef
      }, content), document.body);
    }

    return _react["default"].createElement(_ContentMetaResolver["default"], {
      component: ContentComponent,
      onResolved: updateContentMeta
    }, children);
  }

  return null;
};

InternalOverlay.propTypes = {
  render: _propTypes["default"].func,
  isVisible: _propTypes["default"].bool,
  triggerElementRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  positionResolver: _propTypes["default"].func,
  onOpened: _propTypes["default"].func,
  keepScrollEnabled: _propTypes["default"].bool,
  children: _propTypes["default"].node
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
InternalOverlay.defaultPositionResolver = _defaultPositionResolver["default"];
var _default = InternalOverlay;
exports["default"] = _default;