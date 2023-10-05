import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import StyledHeaderLi from './styled/headerLi';
import StyledSearchIcon from './styled/searchIcon';
import StyledOptionsContainer from './styled/optionsContainer';
import StyledEmptyMessage from './styled/emptyMessage';

function preventDefault(event) {
  event.preventDefault();
}

function MenuItems(props) {
  var items = props.items,
      _onClick = props.onClick,
      focusedItemIndex = props.focusedItemIndex,
      onHover = props.onHover;
  return items.map(function (item, index) {
    var label = item.label,
        description = item.description,
        icon = item.icon,
        type = item.type;
    var isActive = index === focusedItemIndex;
    var key = "lookup-item-".concat(index);

    if (type === 'header') {
      return React.createElement(StyledHeaderLi, {
        key: key,
        role: "separator"
      }, React.createElement("span", null, label));
    }

    return React.createElement(MenuItem, {
      key: key,
      id: key,
      label: label,
      description: description,
      icon: icon,
      isActive: isActive,
      index: index,
      onHover: onHover,
      onClick: function onClick() {
        return _onClick(item);
      }
    });
  });
}

var sizeMap = {
  small: 144,
  medium: 240,
  large: 384
};

var Options = function (_React$PureComponent) {
  _inherits(Options, _React$PureComponent);

  var _super = _createSuper(Options);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _super.call(this, props);
    _this.containerRef = React.createRef();
    return _this;
  }

  _createClass(Options, [{
    key: "getMaxHeight",
    value: function getMaxHeight() {
      var size = this.props.size;
      return sizeMap[size] || sizeMap.medium;
    }
  }, {
    key: "getRef",
    value: function getRef() {
      return this.containerRef.current;
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(offset) {
      this.containerRef.current.scrollTo(0, offset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          value = _this$props.value,
          onSelectOption = _this$props.onSelectOption,
          onHoverOption = _this$props.onHoverOption,
          focusedItemIndex = _this$props.focusedItemIndex,
          itemHeight = _this$props.itemHeight,
          onScroll = _this$props.onScroll;

      if (items.length === 0) {
        return React.createElement(StyledOptionsContainer, {
          ref: this.containerRef,
          as: "div",
          "data-id": "lookup-options-empty-container"
        }, React.createElement(StyledSearchIcon, null), React.createElement(StyledEmptyMessage, null, "Our robots did not find any match for", React.createElement("span", null, " \"".concat(value, "\""))));
      }

      var resultContainerStyles = {
        height: itemHeight * items.length,
        maxHeight: this.getMaxHeight()
      };
      return React.createElement(StyledOptionsContainer, {
        style: resultContainerStyles,
        ref: this.containerRef,
        role: "presentation",
        onMouseDown: preventDefault,
        onScroll: onScroll
      }, React.createElement(MenuItems, {
        items: items,
        focusedItemIndex: focusedItemIndex,
        onClick: onSelectOption,
        onHover: onHoverOption
      }));
    }
  }]);

  return Options;
}(React.PureComponent);

export { Options as default };
Options.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string,
  onSelectOption: PropTypes.func,
  onHoverOption: PropTypes.func,
  focusedItemIndex: PropTypes.number,
  itemHeight: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onScroll: PropTypes.func
};
Options.defaultProps = {
  items: [],
  value: undefined,
  onSelectOption: function onSelectOption() {},
  onHoverOption: function onHoverOption() {},
  focusedItemIndex: undefined,
  size: 'medium',
  onScroll: function onScroll() {}
};