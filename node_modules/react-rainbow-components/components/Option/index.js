"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionItem = void 0;
exports["default"] = Option;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../InternalDropdown/context");

var _icon = _interopRequireDefault(require("./icon"));

var _header = _interopRequireDefault(require("./styled/header"));

var _headerLabel = _interopRequireDefault(require("./styled/headerLabel"));

var _item = _interopRequireDefault(require("./styled/item"));

var _iconContainer = _interopRequireDefault(require("./styled/iconContainer"));

var _checkmarkIcon = _interopRequireDefault(require("./styled/checkmarkIcon"));

var _uncheckIcon = _interopRequireDefault(require("./styled/uncheckIcon"));

var _input = _interopRequireDefault(require("./styled/input"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _button = _interopRequireDefault(require("./styled/button"));

var _excluded = ["style", "className", "label", "title", "variant", "icon", "iconPosition", "disabled", "activeOptionName", "name", "currentValues", "activeChildrenMap", "showCheckbox", "multiple", "privateOnClick", "privateOnHover", "privateRegisterChild", "privateUnregisterChild", "value", "component"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function preventDefault(event) {
  event.preventDefault();
}

var OptionItem = function (_Component) {
  (0, _inherits2["default"])(OptionItem, _Component);

  var _super = _createSuper(OptionItem);

  function OptionItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, OptionItem);
    _this = _super.call(this, props);
    _this.itemRef = _react["default"].createRef();
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleHover = _this.handleHover.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleOnlyClick = _this.handleOnlyClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(OptionItem, [{
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
        if (multiple && activeOptionName === name) return _react["default"].createElement(_uncheckIcon["default"], null);
        return _react["default"].createElement(_checkmarkIcon["default"], null);
      }

      if (showCheckbox && activeOptionName === name) {
        return _react["default"].createElement(_button["default"], {
          label: "Only",
          onClick: this.handleOnlyClick
        });
      }

      return _react["default"].createElement(_icon["default"], {
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
          rest = (0, _objectWithoutProperties2["default"])(_this$props9, _excluded);
      var isSelected = currentValues && currentValues.includes(name);
      var isActive = activeOptionName === name;

      if (variant === 'header') {
        return _react["default"].createElement(_header["default"], {
          className: className,
          style: style,
          title: title,
          role: "presentation",
          onMouseDown: preventDefault
        }, _react["default"].createElement(_headerLabel["default"], null, label));
      }

      var showOption = !activeChildrenMap || activeChildrenMap[name];

      if (showOption) {
        var hasLeftIcon = !!(icon && iconPosition === 'left');
        var hasComponent = !!component;

        var OptionComponent = component || function () {
          return null;
        };

        return _react["default"].createElement("li", {
          "data-selected": isSelected,
          className: className,
          style: style,
          role: "presentation",
          onMouseDown: this.handleClick,
          onMouseEnter: this.handleHover
        }, _react["default"].createElement(_item["default"], {
          id: name,
          role: "option",
          "aria-selected": isActive,
          "aria-disabled": disabled,
          ref: this.itemRef,
          isSelected: isSelected,
          isActive: isActive,
          hasComponent: hasComponent
        }, _react["default"].createElement(_RenderIf["default"], {
          isTrue: !hasComponent
        }, _react["default"].createElement(_iconContainer["default"], {
          title: title
        }, _react["default"].createElement(_RenderIf["default"], {
          isTrue: showCheckbox
        }, _react["default"].createElement(_input["default"], {
          type: "checkbox",
          checked: isSelected,
          tabIndex: "-1"
        })), _react["default"].createElement(_icon["default"], {
          "data-id": "menu-item-left-icon",
          icon: icon,
          isVisible: hasLeftIcon,
          position: iconPosition
        }), label), this.renderRightIcon()), _react["default"].createElement(_RenderIf["default"], {
          isTrue: hasComponent
        }, _react["default"].createElement(OptionComponent, (0, _extends2["default"])({}, rest, {
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
}(_react.Component);

exports.OptionItem = OptionItem;

function Option(props) {
  return _react["default"].createElement(_context.Consumer, null, function (values) {
    return _react["default"].createElement(OptionItem, (0, _extends2["default"])({}, props, values));
  });
}

Option.propTypes = {
  label: _propTypes["default"].node,
  searchableText: _propTypes["default"].string,
  name: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  variant: _propTypes["default"].oneOf(['default', 'header']),
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  disabled: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  value: _propTypes["default"].any,
  component: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
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