"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _menuItem = _interopRequireDefault(require("./menuItem"));

var _headerLi = _interopRequireDefault(require("./styled/headerLi"));

var _searchIcon = _interopRequireDefault(require("./styled/searchIcon"));

var _optionsContainer = _interopRequireDefault(require("./styled/optionsContainer"));

var _emptyMessage = _interopRequireDefault(require("./styled/emptyMessage"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
      return _react["default"].createElement(_headerLi["default"], {
        key: key,
        role: "separator"
      }, _react["default"].createElement("span", null, label));
    }

    return _react["default"].createElement(_menuItem["default"], {
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
  (0, _inherits2["default"])(Options, _React$PureComponent);

  var _super = _createSuper(Options);

  function Options(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Options);
    _this = _super.call(this, props);
    _this.containerRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Options, [{
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
        return _react["default"].createElement(_optionsContainer["default"], {
          ref: this.containerRef,
          as: "div",
          "data-id": "lookup-options-empty-container"
        }, _react["default"].createElement(_searchIcon["default"], null), _react["default"].createElement(_emptyMessage["default"], null, "Our robots did not find any match for", _react["default"].createElement("span", null, " \"".concat(value, "\""))));
      }

      var resultContainerStyles = {
        height: itemHeight * items.length,
        maxHeight: this.getMaxHeight()
      };
      return _react["default"].createElement(_optionsContainer["default"], {
        style: resultContainerStyles,
        ref: this.containerRef,
        role: "presentation",
        onMouseDown: preventDefault,
        onScroll: onScroll
      }, _react["default"].createElement(MenuItems, {
        items: items,
        focusedItemIndex: focusedItemIndex,
        onClick: onSelectOption,
        onHover: onHoverOption
      }));
    }
  }]);
  return Options;
}(_react["default"].PureComponent);

exports["default"] = Options;
Options.propTypes = {
  items: _propTypes["default"].array,
  value: _propTypes["default"].string,
  onSelectOption: _propTypes["default"].func,
  onHoverOption: _propTypes["default"].func,
  focusedItemIndex: _propTypes["default"].number,
  itemHeight: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  onScroll: _propTypes["default"].func
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