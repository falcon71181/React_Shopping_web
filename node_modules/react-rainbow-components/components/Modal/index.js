"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _utils = require("../../libs/utils");

var _constants = require("../../libs/constants");

var _header = _interopRequireDefault(require("./header"));

var _closeIcon = _interopRequireDefault(require("./closeIcon"));

var _manageTab = _interopRequireDefault(require("../../libs/manageTab"));

var _scrollController = require("../../libs/scrollController");

var _counterManager = _interopRequireDefault(require("../../libs/counterManager"));

var _backDrop = _interopRequireDefault(require("./styled/backDrop"));

var _modalContainer = _interopRequireDefault(require("./styled/modalContainer"));

var _closeButton = _interopRequireDefault(require("./styled/closeButton"));

var _content = _interopRequireDefault(require("./styled/content"));

var _footer = _interopRequireDefault(require("./styled/footer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Modal = function (_Component) {
  (0, _inherits2["default"])(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Modal);
    _this = _super.call(this, props);
    _this.containerRef = _react["default"].createRef();
    _this.buttonRef = _react["default"].createRef();
    _this.modalRef = _react["default"].createRef();
    _this.contentRef = _react["default"].createRef();
    _this.modalHeadingId = (0, _utils.uniqueId)('modal-heading');
    _this.modalContentId = (0, _utils.uniqueId)('modal-content');
    _this.handleKeyPressed = _this.handleKeyPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeModal = _this.closeModal.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addBackdropClickListener = _this.addBackdropClickListener.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeBackdropClickListener = _this.removeBackdropClickListener.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.contentElement = this.contentRef.current;

        _counterManager["default"].increment();

        (0, _scrollController.disableBodyScroll)(this.contentRef.current);
        this.modalTriggerElement = document.activeElement;
        this.modalRef.current.focus();
        this.addBackdropClickListener();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onOpened = _this$props.onOpened;
      var prevIsOpen = prevProps.isOpen;
      var wasOpened = isOpen && !prevIsOpen;
      var wasClosed = !isOpen && prevIsOpen;

      if (wasOpened) {
        _counterManager["default"].increment();

        this.contentElement = this.contentRef.current;
        (0, _scrollController.disableBodyScroll)(this.contentRef.current);
        this.modalTriggerElement = document.activeElement;
        this.modalRef.current.focus();
        this.addBackdropClickListener();
        onOpened();
      }

      if (wasClosed) {
        this.removeBackdropClickListener();

        _counterManager["default"].decrement();

        if (this.modalTriggerElement) {
          this.modalTriggerElement.focus();
        }

        if (!_counterManager["default"].hasModalsOpen()) {
          (0, _scrollController.enableBodyScroll)(this.contentElement);
          (0, _scrollController.clearAllBodyScrollLocks)();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        _counterManager["default"].decrement();
      }

      if (!_counterManager["default"].hasModalsOpen()) {
        (0, _scrollController.enableBodyScroll)(this.contentElement);
        (0, _scrollController.clearAllBodyScrollLocks)();
      }

      this.removeBackdropClickListener();
    }
  }, {
    key: "handleKeyPressed",
    value: function handleKeyPressed(event) {
      event.stopPropagation();
      var isOpen = this.props.isOpen;

      if (isOpen && event.keyCode === _constants.ESCAPE_KEY && this.containerRef.current.contains(event.target)) {
        this.closeModal();
      }

      if (event.keyCode === _constants.TAB_KEY) {
        (0, _manageTab["default"])(this.modalRef.current, event);
      }

      return null;
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        var isClickOutsideModal = !this.modalRef.current.contains(event.target);

        if (isClickOutsideModal) {
          return this.closeModal();
        }
      }

      return null;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var onRequestClose = this.props.onRequestClose;
      return onRequestClose();
    }
  }, {
    key: "addBackdropClickListener",
    value: function addBackdropClickListener() {
      var node = this.containerRef.current;

      if (node) {
        node.addEventListener('click', this.handleClick);
      }
    }
  }, {
    key: "removeBackdropClickListener",
    value: function removeBackdropClickListener() {
      var node = this.containerRef.current;

      if (node) {
        node.removeEventListener('click', this.handleClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          style = _this$props2.style,
          className = _this$props2.className,
          children = _this$props2.children,
          footer = _this$props2.footer,
          isOpen = _this$props2.isOpen,
          id = _this$props2.id,
          size = _this$props2.size,
          hideCloseButton = _this$props2.hideCloseButton,
          borderRadius = _this$props2.borderRadius;

      if (isOpen) {
        return (0, _reactDom.createPortal)(_react["default"].createElement(_backDrop["default"], {
          role: "presentation",
          isOpen: isOpen,
          id: id,
          ref: this.containerRef,
          onKeyDown: this.handleKeyPressed
        }, _react["default"].createElement(_modalContainer["default"], {
          role: "dialog",
          tabIndex: -1,
          "aria-labelledby": this.modalHeadingId,
          "aria-modal": true,
          "aria-hidden": !isOpen,
          "aria-describedby": this.modalContentId,
          style: style,
          ref: this.modalRef,
          isOpen: isOpen,
          className: className,
          size: size,
          as: "section",
          borderRadius: borderRadius
        }, _react["default"].createElement(_RenderIf["default"], {
          isTrue: !hideCloseButton
        }, _react["default"].createElement(_closeButton["default"], {
          id: "modal-close-button",
          icon: _react["default"].createElement(_closeIcon["default"], null),
          title: "Close",
          onClick: this.closeModal,
          ref: this.buttonRef
        })), _react["default"].createElement(_header["default"], {
          id: this.modalHeadingId,
          title: title
        }), _react["default"].createElement(_content["default"], {
          id: this.modalContentId,
          ref: this.contentRef
        }, children), _react["default"].createElement(_RenderIf["default"], {
          isTrue: footer
        }, _react["default"].createElement(_footer["default"], null, footer)))), document.body);
      }

      return null;
    }
  }]);
  return Modal;
}(_react.Component);

exports["default"] = Modal;
Modal.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  footer: _propTypes["default"].node,
  isOpen: _propTypes["default"].bool,
  onRequestClose: _propTypes["default"].func,
  onOpened: _propTypes["default"].func,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  hideCloseButton: _propTypes["default"].bool,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Modal.defaultProps = {
  isOpen: false,
  title: null,
  size: 'small',
  children: null,
  className: undefined,
  style: undefined,
  footer: null,
  onRequestClose: function onRequestClose() {},
  onOpened: function onOpened() {},
  id: undefined,
  hideCloseButton: false,
  borderRadius: 'rounded'
};