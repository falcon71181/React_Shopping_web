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
import { Consumer } from '../Tabset/context';
import StyledContainer from './styled/container';
import TruncatedText from '../Structural/truncatedText';
import StyledButton from './styled/button';

var TabItem = function (_Component) {
  _inherits(TabItem, _Component);

  var _super = _createSuper(TabItem);

  function TabItem(props) {
    var _this;

    _classCallCheck(this, TabItem);

    _this = _super.call(this, props);
    _this.tabRef = React.createRef();
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TabItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          privateRegisterTab = _this$props.privateRegisterTab,
          name = _this$props.name,
          disabled = _this$props.disabled;

      if (!disabled) {
        privateRegisterTab({
          name: name,
          ref: this.tabRef.current
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevName = _ref.name;
      var _this$props2 = this.props,
          name = _this$props2.name,
          privateUpdateTab = _this$props2.privateUpdateTab;

      if (name !== prevName) {
        privateUpdateTab({
          name: name,
          ref: this.tabRef.current
        }, prevName);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          privateUnRegisterTab = _this$props3.privateUnRegisterTab,
          name = _this$props3.name;
      privateUnRegisterTab(name);
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      if (this.isSelected()) {
        return 0;
      }

      return -1;
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event) {
      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          onSelect = _this$props4.onSelect,
          name = _this$props4.name;

      if (!disabled) {
        onSelect(event, name);
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      var _this$props5 = this.props,
          activeTabName = _this$props5.activeTabName,
          name = _this$props5.name;
      return activeTabName === name;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          label = _this$props6.label,
          style = _this$props6.style,
          className = _this$props6.className,
          title = _this$props6.title,
          id = _this$props6.id,
          ariaControls = _this$props6.ariaControls,
          fullWidth = _this$props6.fullWidth,
          variant = _this$props6.variant,
          disabled = _this$props6.disabled;
      var isActive = this.isSelected();
      return React.createElement(StyledContainer, {
        className: className,
        fullWidth: fullWidth,
        variant: variant,
        isActive: isActive,
        style: style,
        title: title,
        role: "presentation"
      }, React.createElement(StyledButton, {
        role: "tab",
        type: "button",
        "aria-selected": isActive,
        onClick: this.handleSelect,
        tabIndex: this.getTabIndex(),
        id: id,
        "aria-controls": ariaControls,
        ref: this.tabRef,
        isActive: isActive,
        disabled: disabled,
        fullWidth: fullWidth,
        variant: variant,
        "data-active": isActive
      }, React.createElement(TruncatedText, null, label)));
    }
  }]);

  return TabItem;
}(Component);

export default function Tab(props) {
  return React.createElement(Consumer, null, function (context) {
    return React.createElement(TabItem, _extends({}, props, context));
  });
}
Tab.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  name: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  ariaControls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};
Tab.defaultProps = {
  label: null,
  name: undefined,
  title: undefined,
  disabled: false,
  id: undefined,
  ariaControls: undefined,
  className: undefined,
  style: undefined
};