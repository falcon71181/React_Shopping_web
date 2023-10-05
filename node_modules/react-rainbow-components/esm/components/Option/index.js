import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["style", "className", "label", "title", "variant", "icon", "iconPosition", "disabled", "activeOptionName", "name", "currentValues", "activeChildrenMap", "showCheckbox", "multiple", "privateOnClick", "privateOnHover", "privateRegisterChild", "privateUnregisterChild", "value", "component"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../InternalDropdown/context';
import Icon from './icon';
import StyledHeader from './styled/header';
import StyledHeaderLabel from './styled/headerLabel';
import StyledItem from './styled/item';
import StyledIconContainer from './styled/iconContainer';
import StyledCheckmarkIcon from './styled/checkmarkIcon';
import StyledUncheckIcon from './styled/uncheckIcon';
import StyledInput from './styled/input';
import RenderIf from '../RenderIf';
import StyledButton from './styled/button';

function preventDefault(event) {
  event.preventDefault();
}

var OptionItem = function (_Component) {
  _inherits(OptionItem, _Component);

  var _super = _createSuper(OptionItem);

  function OptionItem(props) {
    var _this;

    _classCallCheck(this, OptionItem);

    _this = _super.call(this, props);
    _this.itemRef = React.createRef();
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.handleOnlyClick = _this.handleOnlyClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OptionItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          variant = _this$props.variant,
          name = _this$props.name;
      var isHeader = variant === 'header';

      if (disabled || isHeader || typeof name !== 'string' && typeof name !== 'number') {
        return null;
      }

      return this.register();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevActiveChildrenMap = prevProps.activeChildrenMap;
      var _this$props2 = this.props,
          activeChildrenMap = _this$props2.activeChildrenMap,
          name = _this$props2.name,
          variant = _this$props2.variant;

      if (prevActiveChildrenMap !== activeChildrenMap && variant === 'default') {
        if (activeChildrenMap[name]) {
          this.register();
        } else {
          this.unregister();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      return this.unregister();
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          privateOnClick = _this$props3.privateOnClick,
          label = _this$props3.label,
          name = _this$props3.name,
          icon = _this$props3.icon,
          value = _this$props3.value,
          showCheckbox = _this$props3.showCheckbox;

      if (showCheckbox && event.target.tagName === 'BUTTON') {
        return null;
      }

      if (disabled) {
        event.preventDefault();
        return null;
      }

      return privateOnClick(event, {
        label: label,
        name: name,
        icon: icon,
        value: value
      });
    }
  }, {
    key: "handleOnlyClick",
    value: function handleOnlyClick(event) {
      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          privateOnClick = _this$props4.privateOnClick,
          label = _this$props4.label,
          name = _this$props4.name,
          icon = _this$props4.icon,
          value = _this$props4.value;
      event.preventDefault();

      if (disabled) {
        event.preventDefault();
        return null;
      }

      return privateOnClick(event, {
        label: label,
        name: name,
        icon: icon,
        value: value,
        only: true
      });
    }
  }, {
    key: "handleHover",
    value: function handleHover(event) {
      var _this$props5 = this.props,
          privateOnHover = _this$props5.privateOnHover,
          disabled = _this$props5.disabled,
          name = _this$props5.name;

      if (disabled) {
        return null;
      }

      return privateOnHover(event, name);
    }
  }, {
    key: "register",
    value: function register() {
      var _this2 = this;

      var _this$props6 = this.props,
          privateRegisterChild = _this$props6.privateRegisterChild,
          label = _this$props6.label,
          searchableText = _this$props6.searchableText,
          name = _this$props6.name,
          icon = _this$props6.icon,
          value = _this$props6.value,
          variant = _this$props6.variant;

      if (privateRegisterChild) {
        return setTimeout(function () {
          return privateRegisterChild(_this2.itemRef.current, {
            label: label,
            searchableText: searchableText,
            name: name,
            icon: icon,
            value: value,
            variant: variant
          });
        }, 0);
      }

      return null;
    }
  }, {
    key: "unregister",
    value: function unregister() {
      var _this3 = this;

      var _this$props7 = this.props,
          privateUnregisterChild = _this$props7.privateUnregisterChild,
          name = _this$props7.name;

      if (privateUnregisterChild) {
        return setTimeout(function () {
          return privateUnregisterChild(_this3.itemRef.current, name);
        }, 0);
      }

      return null;
    }
  }, {
    key: "renderRightIcon",
    value: function renderRightIcon() {
      var _this$props8 = this.props,
          name = _this$props8.name,
          currentValues = _this$props8.currentValues,
          icon = _this$props8.icon,
          iconPosition = _this$props8.iconPosition,
          activeOptionName = _this$props8.activeOptionName,
          multiple = _this$props8.multiple,
          showCheckbox = _this$props8.showCheckbox;
      var hasRightIcon = !!(icon && iconPosition === 'right');

      if (currentValues && currentValues.includes(name) && !showCheckbox) {
        if (multiple && activeOptionName === name) return React.createElement(StyledUncheckIcon, null);
        return React.createElement(StyledCheckmarkIcon, null);
      }

      if (showCheckbox && activeOptionName === name) {
        return React.createElement(StyledButton, {
          label: "Only",
          onClick: this.handleOnlyClick
        });
      }

      return React.createElement(Icon, {
        "data-id": "menu-item-right-icon",
        icon: icon,
        isVisible: hasRightIcon,
        position: iconPosition
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          style = _this$props9.style,
          className = _this$props9.className,
          label = _this$props9.label,
          title = _this$props9.title,
          variant = _this$props9.variant,
          icon = _this$props9.icon,
          iconPosition = _this$props9.iconPosition,
          disabled = _this$props9.disabled,
          activeOptionName = _this$props9.activeOptionName,
          name = _this$props9.name,
          currentValues = _this$props9.currentValues,
          activeChildrenMap = _this$props9.activeChildrenMap,
          showCheckbox = _this$props9.showCheckbox,
          multiple = _this$props9.multiple,
          privateOnClick = _this$props9.privateOnClick,
          privateOnHover = _this$props9.privateOnHover,
          privateRegisterChild = _this$props9.privateRegisterChild,
          privateUnregisterChild = _this$props9.privateUnregisterChild,
          value = _this$props9.value,
          component = _this$props9.component,
          rest = _objectWithoutProperties(_this$props9, _excluded);

      var isSelected = currentValues && currentValues.includes(name);
      var isActive = activeOptionName === name;

      if (variant === 'header') {
        return React.createElement(StyledHeader, {
          className: className,
          style: style,
          title: title,
          role: "presentation",
          onMouseDown: preventDefault
        }, React.createElement(StyledHeaderLabel, null, label));
      }

      var showOption = !activeChildrenMap || activeChildrenMap[name];

      if (showOption) {
        var hasLeftIcon = !!(icon && iconPosition === 'left');
        var hasComponent = !!component;

        var OptionComponent = component || function () {
          return null;
        };

        return React.createElement("li", {
          "data-selected": isSelected,
          className: className,
          style: style,
          role: "presentation",
          onMouseDown: this.handleClick,
          onMouseEnter: this.handleHover
        }, React.createElement(StyledItem, {
          id: name,
          role: "option",
          "aria-selected": isActive,
          "aria-disabled": disabled,
          ref: this.itemRef,
          isSelected: isSelected,
          isActive: isActive,
          hasComponent: hasComponent
        }, React.createElement(RenderIf, {
          isTrue: !hasComponent
        }, React.createElement(StyledIconContainer, {
          title: title
        }, React.createElement(RenderIf, {
          isTrue: showCheckbox
        }, React.createElement(StyledInput, {
          type: "checkbox",
          checked: isSelected,
          tabIndex: "-1"
        })), React.createElement(Icon, {
          "data-id": "menu-item-left-icon",
          icon: icon,
          isVisible: hasLeftIcon,
          position: iconPosition
        }), label), this.renderRightIcon()), React.createElement(RenderIf, {
          isTrue: hasComponent
        }, React.createElement(OptionComponent, _extends({}, rest, {
          disabled: disabled,
          icon: icon,
          iconPosition: iconPosition,
          label: label,
          value: value,
          isSelected: isSelected,
          isActive: isActive,
          variant: variant
        })))));
      }

      return null;
    }
  }]);

  return OptionItem;
}(Component);

export default function Option(props) {
  return React.createElement(Consumer, null, function (values) {
    return React.createElement(OptionItem, _extends({}, props, values));
  });
}
export { OptionItem };
Option.propTypes = {
  label: PropTypes.node,
  searchableText: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['default', 'header']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.any,
  component: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
Option.defaultProps = {
  label: undefined,
  searchableText: undefined,
  name: undefined,
  variant: 'default',
  icon: null,
  iconPosition: 'left',
  disabled: false,
  title: undefined,
  value: undefined,
  component: null,
  className: undefined,
  style: undefined
};