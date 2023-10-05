"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuContent;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _utils = require("./utils");

var _useArrowKeyNav2 = _interopRequireDefault(require("./hooks/useArrowKeyNav"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MenuContent(props) {
  var children = props.children,
      isLoading = props.isLoading,
      ariaLabel = props.ariaLabel,
      onRequestClose = props.onRequestClose;
  var childrenRefs = (0, _react.useRef)([]);
  var containerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      childCount = _useState2[0],
      setChildCount = _useState2[1];

  var _useArrowKeyNav = (0, _useArrowKeyNav2["default"])({
    childrenRefs: childrenRefs.current,
    isLoading: isLoading
  }),
      focusedChildIndex = _useArrowKeyNav.focusedChildIndex,
      keyDownHandler = _useArrowKeyNav.handleKeyPress,
      focusMatchedItem = _useArrowKeyNav.focusMatchedItem,
      clearFocusedChild = _useArrowKeyNav.clearFocusedChild,
      focusChild = _useArrowKeyNav.focusChild;

  var privateOnClose = (0, _react.useCallback)(function () {
    clearFocusedChild();
    onRequestClose();
  }, [clearFocusedChild, onRequestClose]);
  var privateOnHover = (0, _react.useCallback)(function (event, childRef) {
    return focusMatchedItem(childRef);
  }, [focusMatchedItem]);
  var privateRegisterChild = (0, _react.useCallback)(function (childRef) {
    if (childRef) {
      var _getChildMenuItemNode = (0, _utils.getChildMenuItemNodes)(containerRef.current),
          _getChildMenuItemNode2 = (0, _toArray2["default"])(_getChildMenuItemNode),
          nodes = _getChildMenuItemNode2.slice(0);

      childrenRefs.current = (0, _utils.insertChildOrderly)(childrenRefs.current, childRef, nodes);
      setChildCount(childrenRefs.current.length);
    }
  }, []);
  var privateUnregisterChild = (0, _react.useCallback)(function (childRef) {
    if (childRef) {
      childrenRefs.current = childrenRefs.current.filter(function (child) {
        return child !== childRef;
      });
      setChildCount(childrenRefs.current.length);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!isLoading && childCount > 0) {
      focusChild(focusedChildIndex || 0);
    }
  }, [isLoading, childCount, focusChild, focusedChildIndex]);

  if (isLoading) {
    return _react["default"].createElement(_Spinner["default"], {
      assistiveText: "loading menu",
      isVisible: true,
      size: "small"
    });
  }

  return _react["default"].createElement(_styled.StyledContent, {
    ref: containerRef,
    role: "menu",
    "aria-label": ariaLabel,
    onKeyDown: keyDownHandler
  }, _react["default"].createElement(_context.Provider, {
    value: {
      privateOnClose: privateOnClose,
      privateOnHover: privateOnHover,
      privateRegisterChild: privateRegisterChild,
      privateUnregisterChild: privateUnregisterChild
    }
  }, children));
}

MenuContent.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
MenuContent.defaultProps = {
  className: '',
  style: {}
};