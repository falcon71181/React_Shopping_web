import _extends from "@babel/runtime/helpers/extends";
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
import { Consumer } from '../PrimitiveMenu/context';
import Icon from './icon';
import StyledHeader from './styled/header';
import StyledHeaderLabel from './styled/headerLabel';
import StyledLi from './styled/li';
import StyledIconContainer from './styled/iconContainer';

var Item = function (_Component) {
  _inherits(Item, _Component);

  var _super = _createSuper(Item);

  function Item(props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.call(this, props);
    _this.itemRef = React.createRef();
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          privateRegisterChild = _this$props.privateRegisterChild,
          disabled = _this$props.disabled,
          variant = _this$props.variant;
      var isHeader = variant === 'header';

      if (disabled || isHeader) {
        return null;
      }

      return setTimeout(function () {
        return privateRegisterChild(_this2.itemRef.current);
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var privateUnregisterChild = this.props.privateUnregisterChild;
      return privateUnregisterChild(this.itemRef.current);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick,
          privateOnClose = _this$props2.privateOnClose;

      if (disabled) {
        return null;
      }

      onClick(event);
      return privateOnClose();
    }
  }, {
    key: "handleHover",
    value: function handleHover(event) {
      var _this$props3 = this.props,
          privateOnHover = _this$props3.privateOnHover,
          disabled = _this$props3.disabled;

      if (disabled) {
        return null;
      }

      return privateOnHover(event, this.itemRef.current);
    }
  }, {
    key: "click",
    value: function click() {
      this.itemRef.current.click();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          style = _this$props4.style,
          className = _this$props4.className,
          label = _this$props4.label,
          title = _this$props4.title,
          variant = _this$props4.variant,
          icon = _this$props4.icon,
          iconPosition = _this$props4.iconPosition,
          disabled = _this$props4.disabled;

      if (variant === 'header') {
        return React.createElement(StyledHeader, {
          className: className,
          style: style,
          title: title,
          role: "separator"
        }, React.createElement(StyledHeaderLabel, null, label));
      }

      var hasLeftIcon = !!(icon && iconPosition === 'left');
      var hasRightIcon = !!(icon && iconPosition === 'right');
      return React.createElement(StyledLi, {
        className: className,
        style: style,
        role: "menuitem",
        onClick: this.handleClick,
        onMouseEnter: this.handleHover,
        "aria-disabled": disabled,
        tabIndex: "-1",
        ref: this.itemRef
      }, React.createElement(StyledIconContainer, {
        title: title
      }, React.createElement(Icon, {
        "data-id": "menu-item-left-icon",
        icon: icon,
        isVisible: hasLeftIcon,
        position: iconPosition
      }), label), React.createElement(Icon, {
        "data-id": "menu-item-right-icon",
        icon: icon,
        isVisible: hasRightIcon,
        position: iconPosition
      }));
    }
  }]);

  return Item;
}(Component);

export default function MenuItem(props) {
  return React.createElement(Consumer, null, function (values) {
    return React.createElement(Item, _extends({}, props, values));
  });
}
MenuItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'header']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
MenuItem.defaultProps = {
  label: null,
  variant: 'default',
  icon: null,
  iconPosition: 'left',
  disabled: false,
  onClick: function onClick() {},
  title: undefined,
  className: undefined,
  style: undefined
};