"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _indicators = _interopRequireDefault(require("./indicators"));

var _hooks = require("../../libs/hooks");

var _helpers = require("./helpers");

var _animationButton = _interopRequireDefault(require("./animationButton"));

var _container = _interopRequireDefault(require("./styled/container"));

var _autoplay = _interopRequireDefault(require("./styled/autoplay"));

var _imagesUl = _interopRequireDefault(require("./styled/imagesUl"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SELECTOR = '[role="tabpanel"]';

var CarouselCard = function CarouselCard(props) {
  var children = props.children,
      id = props.id,
      className = props.className,
      style = props.style,
      scrollDuration = props.scrollDuration,
      disableAutoScroll = props.disableAutoScroll,
      disableAutoRefresh = props.disableAutoRefresh;
  var containerRef = (0, _react.useRef)();
  var listRef = (0, _react.useRef)();
  var animationTimeoutRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(disableAutoScroll),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isAnimationPaused = _useState2[0],
      setIsAnimationPaused = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      activeItem = _useState4[0],
      setActiveItem = _useState4[1];

  var prevActiveItem = (0, _hooks.usePrevious)(activeItem);

  var _useChildrenRegister = (0, _hooks.useChildrenRegister)({
    containerRef: listRef,
    selector: SELECTOR
  }),
      childrenRegistered = _useChildrenRegister.childrenRegistered,
      register = _useChildrenRegister.register,
      unregister = _useChildrenRegister.unregister;

  (0, _react.useEffect)(function () {
    if (childrenRegistered[0] && childrenRegistered[0].id !== activeItem) {
      setActiveItem(childrenRegistered[0].id);
    }
  }, [childrenRegistered]);
  (0, _react.useEffect)(function () {
    if (!isAnimationPaused) {
      animationTimeoutRef.current = setTimeout(function () {
        var selectedItemIndex = (0, _helpers.getItemIndex)(childrenRegistered, activeItem);
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
    height: (0, _helpers.getHeight)(containerRef.current)
  }, style);

  var context = {
    childrenRegistered: childrenRegistered,
    activeItem: activeItem,
    prevActiveItem: prevActiveItem,
    isAnimationPaused: isAnimationPaused,
    register: register,
    unregister: unregister
  };
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: containerStyle,
    id: id,
    ref: containerRef
  }, _react["default"].createElement(_autoplay["default"], null, _react["default"].createElement(_animationButton["default"], {
    onClick: function onClick() {
      return setIsAnimationPaused(!isAnimationPaused);
    },
    isAnimationPaused: isAnimationPaused
  })), _react["default"].createElement(_imagesUl["default"], {
    ref: listRef
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, children)), _react["default"].createElement(_indicators["default"], {
    carouselChildren: childrenRegistered,
    onSelect: handleSelect,
    selectedItem: activeItem
  }));
};

CarouselCard.propTypes = {
  scrollDuration: _propTypes["default"].number,
  disableAutoScroll: _propTypes["default"].bool,
  disableAutoRefresh: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  id: _propTypes["default"].string
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
var _default = CarouselCard;
exports["default"] = _default;