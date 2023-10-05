"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Drawer;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _constants = require("../../libs/constants");

var _scrollController = require("../../libs/scrollController");

var _counterManager = _interopRequireDefault(require("../../libs/counterManager"));

var _manageTab = _interopRequireDefault(require("../../libs/manageTab"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _backDrop = _interopRequireDefault(require("./styled/backDrop"));

var _container = _interopRequireDefault(require("./styled/container"));

var _content = _interopRequireDefault(require("./styled/content"));

var _closeButton = _interopRequireDefault(require("./styled/closeButton"));

var _divider = _interopRequireDefault(require("./styled/divider"));

var _footer = _interopRequireDefault(require("./styled/footer"));

var _header = _interopRequireDefault(require("./header"));

var _closeIcon = _interopRequireDefault(require("./closeIcon"));

var _hooks = require("../../libs/hooks");

var _getSlideFrom = _interopRequireDefault(require("./helpers/getSlideFrom"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DrawerState = {
  OPENING: 0,
  OPENED: 1,
  CLOSING: 2,
  CLOSED: 3
};

function Drawer(props) {
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
  var headerId = (0, _hooks.useUniqueIdentifier)('drawer-header');
  var contentId = (0, _hooks.useUniqueIdentifier)('drawer-content');
  var triggerRef = (0, _react.useRef)(null);
  var drawerRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var contentRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(isOpen ? DrawerState.OPENED : DrawerState.CLOSED),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      drawerState = _useState2[0],
      setDrawerState = _useState2[1];

  (0, _react.useEffect)(function () {
    var contentElement = contentRef.current;

    if (isOpen) {
      _counterManager["default"].increment();

      (0, _scrollController.disableBodyScroll)(contentElement);
      triggerRef.current = document.activeElement;
      setDrawerState(DrawerState.OPENING);
    }

    return function () {
      if (isOpen) {
        _counterManager["default"].decrement();

        if (triggerRef.current) triggerRef.current.focus();

        if (!_counterManager["default"].hasModalsOpen()) {
          (0, _scrollController.enableBodyScroll)(contentElement);
        }

        (0, _scrollController.clearAllBodyScrollLocks)();
        setDrawerState(DrawerState.CLOSING);
      }
    };
  }, [isOpen]);
  (0, _react.useEffect)(function () {
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

  var handleBackDropClick = (0, _react.useCallback)(function (event) {
    if (drawerRef.current.contains(event.target)) {
      return null;
    }

    return closeDrawer();
  }, []);
  (0, _react.useEffect)(function () {
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

    if (isOpen && event.keyCode === _constants.ESCAPE_KEY && containerRef.current.contains(event.target)) {
      closeDrawer();
    }

    if (event.keyCode === _constants.TAB_KEY) {
      (0, _manageTab["default"])(drawerRef.current, event);
    }

    return null;
  };

  var drawerIsOpen = [DrawerState.OPENING, DrawerState.OPENED].includes(drawerState);

  if (drawerState !== null && drawerState !== DrawerState.CLOSED) {
    return (0, _reactDom.createPortal)(_react["default"].createElement(_backDrop["default"], {
      id: id,
      role: "presentation",
      ref: containerRef,
      onKeyDown: handleKeyPressed
    }, _react["default"].createElement(_container["default"], {
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
      slideFrom: (0, _getSlideFrom["default"])(slideFrom, 'left'),
      ref: drawerRef,
      onAnimationEnd: onSlideEnd
    }, _react["default"].createElement(_header["default"], {
      id: headerId,
      content: header
    }), _react["default"].createElement(_RenderIf["default"], {
      isTrue: !hideCloseButton
    }, _react["default"].createElement(_closeButton["default"], {
      id: "drawer-close-button",
      icon: _react["default"].createElement(_closeIcon["default"], null),
      title: "Hide",
      onClick: closeDrawer
    })), _react["default"].createElement(_content["default"], {
      id: contentId,
      ref: contentRef
    }, children), _react["default"].createElement(_RenderIf["default"], {
      isTrue: footer
    }, _react["default"].createElement(_divider["default"], null), _react["default"].createElement(_footer["default"], null, footer)))), document.body);
  }

  return _react["default"].createElement(_react["default"].Fragment, null);
}

Drawer.propTypes = {
  header: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large', 'full']),
  footer: _propTypes["default"].node,
  isOpen: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onRequestClose: _propTypes["default"].func,
  onOpened: _propTypes["default"].func,
  id: _propTypes["default"].string,
  children: _propTypes["default"].node,
  hideCloseButton: _propTypes["default"].bool,
  slideFrom: _propTypes["default"].oneOf(['left', 'right'])
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