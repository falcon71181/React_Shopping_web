"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuItem;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../PrimitiveMenu/context");

var _icon = _interopRequireDefault(require("./icon"));

var _header = _interopRequireDefault(require("./styled/header"));

var _headerLabel = _interopRequireDefault(require("./styled/headerLabel"));

var _li = _interopRequireDefault(require("./styled/li"));

var _iconContainer = _interopRequireDefault(require("./styled/iconContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Item = function (_Component) {
  (0, _inherits2["default"])(Item, _Component);

  var _super = _createSuper(Item);

  function Item(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Item);
    _this = _super.call(this, props);
    _this.itemRef = _react["default"].createRef();
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleHover = _this.handleHover.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Item, [{
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
        return _react["default"].createElement(_header["default"], {
          className: className,
          style: style,
          title: title,
          role: "separator"
        }, _react["default"].createElement(_headerLabel["default"], null, label));
      }

      var hasLeftIcon = !!(icon && iconPosition === 'left');
      var hasRightIcon = !!(icon && iconPosition === 'right');
      return _react["default"].createElement(_li["default"], {
        className: className,
        style: style,
        role: "menuitem",
        onClick: this.handleClick,
        onMouseEnter: this.handleHover,
        "aria-disabled": disabled,
        tabIndex: "-1",
        ref: this.itemRef
      }, _react["default"].createElement(_iconContainer["default"], {
        title: title
      }, _react["default"].createElement(_icon["default"], {
        "data-id": "menu-item-left-icon",
        icon: icon,
        isVisible: hasLeftIcon,
        position: iconPosition
      }), label), _react["default"].createElement(_icon["default"], {
        "data-id": "menu-item-right-icon",
        icon: icon,
        isVisible: hasRightIcon,
        position: iconPosition
      }));
    }
  }]);
  return Item;
}(_react.Component);

function MenuItem(props) {
  return _react["default"].createElement(_context.Consumer, null, function (values) {
    return _react["default"].createElement(Item, (0, _extends2["default"])({}, props, values));
  });
}

MenuItem.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  variant: _propTypes["default"].oneOf(['default', 'header']),
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  title: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
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