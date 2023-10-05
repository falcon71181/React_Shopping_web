import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import StyledButton from './styled/button';

var AvatarButton = function (_Component) {
  _inherits(AvatarButton, _Component);

  var _super = _createSuper(AvatarButton);

  function AvatarButton(props) {
    var _this;

    _classCallCheck(this, AvatarButton);

    _this = _super.call(this, props);
    _this.avatarButtonRef = React.createRef();
    return _this;
  }

  _createClass(AvatarButton, [{
    key: "htmlElementRef",
    get: function get() {
      return this.avatarButtonRef;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.avatarButtonRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.avatarButtonRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.avatarButtonRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          tabIndex = _this$props.tabIndex,
          onClick = _this$props.onClick,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          disabled = _this$props.disabled,
          assistiveText = _this$props.assistiveText,
          ariaHaspopup = _this$props.ariaHaspopup,
          src = _this$props.src,
          initials = _this$props.initials,
          icon = _this$props.icon,
          avatarSize = _this$props.avatarSize,
          initialsVariant = _this$props.initialsVariant,
          avatarBackgroundColor = _this$props.avatarBackgroundColor;
      return React.createElement(StyledButton, {
        "data-id": "avatar-menu-button",
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        disabled: disabled,
        onClick: onClick,
        title: title,
        "aria-haspopup": ariaHaspopup,
        ref: this.avatarButtonRef
      }, React.createElement(Avatar, {
        src: src,
        icon: icon,
        initials: initials,
        size: avatarSize,
        initialsVariant: initialsVariant,
        title: title,
        assistiveText: assistiveText,
        ariaHaspopup: true,
        onFocus: onFocus,
        onBlur: onBlur,
        backgroundColor: avatarBackgroundColor
      }));
    }
  }]);

  return AvatarButton;
}(Component);

export { AvatarButton as default };
AvatarButton.propTypes = {
  title: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  assistiveText: PropTypes.string,
  ariaHaspopup: PropTypes.bool,
  disabled: PropTypes.bool,
  src: PropTypes.string,
  initials: PropTypes.string,
  icon: PropTypes.node,
  avatarSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  initialsVariant: PropTypes.oneOf(['default', 'inverse']),
  avatarBackgroundColor: PropTypes.string
};
AvatarButton.defaultProps = {
  title: undefined,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  assistiveText: undefined,
  ariaHaspopup: false,
  src: undefined,
  initials: undefined,
  icon: null,
  avatarSize: 'medium',
  initialsVariant: 'default',
  avatarBackgroundColor: ''
};