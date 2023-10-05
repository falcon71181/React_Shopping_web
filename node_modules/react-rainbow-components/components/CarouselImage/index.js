"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../CarouselCard/context");

var _helpers = require("../CarouselCard/helpers");

var _li = _interopRequireDefault(require("./styled/li"));

var _innerContainer = _interopRequireDefault(require("./styled/innerContainer"));

var _imageContainer = _interopRequireDefault(require("./imageContainer"));

var _hooks = require("../../libs/hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  var _ref = (0, _react.useContext)(_context.CarouselCardContext) || defaultContext,
      register = _ref.register,
      unregister = _ref.unregister,
      activeItem = _ref.activeItem,
      prevActiveItem = _ref.prevActiveItem,
      childrenRegistered = _ref.childrenRegistered,
      isAnimationPaused = _ref.isAnimationPaused;

  var imageId = (0, _hooks.useUniqueIdentifier)('carousel-content-id');
  var indicatorId = (0, _hooks.useUniqueIdentifier)('indicator-id');
  var itemRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
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
      var activeItemIndex = (0, _helpers.getItemIndex)(childrenRegistered, activeItem);
      var prevItemIndex = (0, _helpers.getItemIndex)(childrenRegistered, prevActiveItem);

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
  return _react["default"].createElement(_li["default"], {
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
  }, _react["default"].createElement(_innerContainer["default"], {
    className: "rainbow-carousel-image",
    tabIndex: getTabIndex(),
    href: href,
    as: getHtmlElememnt(),
    "data-id": "carousel-image_inner-container"
  }, _react["default"].createElement(_imageContainer["default"], {
    imageSrc: imageSrc,
    assistiveText: assistiveText,
    hasContent: hasContent,
    header: header,
    description: description
  })));
};

CarouselImage.propTypes = {
  src: _propTypes["default"].string,
  header: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  assistiveText: _propTypes["default"].string,
  href: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
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
var _default = CarouselImage;
exports["default"] = _default;