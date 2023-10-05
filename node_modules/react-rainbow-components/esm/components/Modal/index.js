import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import { ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import Header from './header';
import CloseIcon from './closeIcon';
import manageTab from '../../libs/manageTab';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from '../../libs/scrollController';
import CounterManager from '../../libs/counterManager';
import StyledBackDrop from './styled/backDrop';
import StyledModalContainer from './styled/modalContainer';
import StyledCloseButton from './styled/closeButton';
import StyledContent from './styled/content';
import StyledFooter from './styled/footer';

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.containerRef = React.createRef();
    _this.buttonRef = React.createRef();
    _this.modalRef = React.createRef();
    _this.contentRef = React.createRef();
    _this.modalHeadingId = uniqueId('modal-heading');
    _this.modalContentId = uniqueId('modal-content');
    _this.handleKeyPressed = _this.handleKeyPressed.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.addBackdropClickListener = _this.addBackdropClickListener.bind(_assertThisInitialized(_this));
    _this.removeBackdropClickListener = _this.removeBackdropClickListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.contentElement = this.contentRef.current;
        CounterManager.increment();
        disableBodyScroll(this.contentRef.current);
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
        CounterManager.increment();
        this.contentElement = this.contentRef.current;
        disableBodyScroll(this.contentRef.current);
        this.modalTriggerElement = document.activeElement;
        this.modalRef.current.focus();
        this.addBackdropClickListener();
        onOpened();
      }

      if (wasClosed) {
        this.removeBackdropClickListener();
        CounterManager.decrement();

        if (this.modalTriggerElement) {
          this.modalTriggerElement.focus();
        }

        if (!CounterManager.hasModalsOpen()) {
          enableBodyScroll(this.contentElement);
          clearAllBodyScrollLocks();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        CounterManager.decrement();
      }

      if (!CounterManager.hasModalsOpen()) {
        enableBodyScroll(this.contentElement);
        clearAllBodyScrollLocks();
      }

      this.removeBackdropClickListener();
    }
  }, {
    key: "handleKeyPressed",
    value: function handleKeyPressed(event) {
      event.stopPropagation();
      var isOpen = this.props.isOpen;

      if (isOpen && event.keyCode === ESCAPE_KEY && this.containerRef.current.contains(event.target)) {
        this.closeModal();
      }

      if (event.keyCode === TAB_KEY) {
        manageTab(this.modalRef.current, event);
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
        return createPortal(React.createElement(StyledBackDrop, {
          role: "presentation",
          isOpen: isOpen,
          id: id,
          ref: this.containerRef,
          onKeyDown: this.handleKeyPressed
        }, React.createElement(StyledModalContainer, {
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
        }, React.createElement(RenderIf, {
          isTrue: !hideCloseButton
        }, React.createElement(StyledCloseButton, {
          id: "modal-close-button",
          icon: React.createElement(CloseIcon, null),
          title: "Close",
          onClick: this.closeModal,
          ref: this.buttonRef
        })), React.createElement(Header, {
          id: this.modalHeadingId,
          title: title
        }), React.createElement(StyledContent, {
          id: this.modalContentId,
          ref: this.contentRef
        }, children), React.createElement(RenderIf, {
          isTrue: footer
        }, React.createElement(StyledFooter, null, footer)))), document.body);
      }

      return null;
    }
  }]);

  return Modal;
}(Component);

export { Modal as default };
Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  footer: PropTypes.node,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onOpened: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  hideCloseButton: PropTypes.bool,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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