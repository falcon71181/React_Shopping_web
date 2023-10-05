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
import RenderIf from '../../RenderIf';
import StyledItem from './styled/item';
import StyledLi from './styled/li';
import StyledIcon from './styled/icon';
import StyledContent from './styled/content';
import StyledDescription from './styled/description';

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  var _super = _createSuper(MenuItem);

  function MenuItem(props) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _super.call(this, props);
    _this.itemRef = React.createRef();
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenuItem, [{
    key: "handleHover",
    value: function handleHover() {
      var _this$props = this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;
      onHover(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          description = _this$props2.description,
          icon = _this$props2.icon,
          onClick = _this$props2.onClick,
          isActive = _this$props2.isActive,
          id = _this$props2.id;
      return React.createElement(StyledLi, {
        role: "presentation",
        onMouseDown: onClick,
        onMouseEnter: this.handleHover
      }, React.createElement(StyledItem, {
        "aria-selected": isActive,
        isActive: isActive,
        id: id,
        tabIndex: -1,
        role: "option",
        ref: this.itemRef
      }, React.createElement(RenderIf, {
        isTrue: icon
      }, React.createElement(StyledIcon, null, icon)), React.createElement(StyledContent, null, label, React.createElement(RenderIf, {
        isTrue: description
      }, React.createElement(StyledDescription, null, description)))));
    }
  }]);

  return MenuItem;
}(Component);

export { MenuItem as default };
MenuItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  onHover: PropTypes.func,
  index: PropTypes.number,
  id: PropTypes.string
};
MenuItem.defaultProps = {
  label: undefined,
  description: undefined,
  icon: undefined,
  onClick: function onClick() {},
  isActive: false,
  onHover: function onHover() {},
  index: undefined,
  id: undefined
};