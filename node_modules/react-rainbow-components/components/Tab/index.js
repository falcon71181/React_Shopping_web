"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tab;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../Tabset/context");

var _container = _interopRequireDefault(require("./styled/container"));

var _truncatedText = _interopRequireDefault(require("../Structural/truncatedText"));

var _button = _interopRequireDefault(require("./styled/button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TabItem = function (_Component) {
  (0, _inherits2["default"])(TabItem, _Component);

  var _super = _createSuper(TabItem);

  function TabItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TabItem);
    _this = _super.call(this, props);
    _this.tabRef = _react["default"].createRef();
    _this.handleSelect = _this.handleSelect.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(TabItem, [{
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
      return _react["default"].createElement(_container["default"], {
        className: className,
        fullWidth: fullWidth,
        variant: variant,
        isActive: isActive,
        style: style,
        title: title,
        role: "presentation"
      }, _react["default"].createElement(_button["default"], {
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
      }, _react["default"].createElement(_truncatedText["default"], null, label)));
    }
  }]);
  return TabItem;
}(_react.Component);

function Tab(props) {
  return _react["default"].createElement(_context.Consumer, null, function (context) {
    return _react["default"].createElement(TabItem, (0, _extends2["default"])({}, props, context));
  });
}

Tab.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  name: _propTypes["default"].string,
  title: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  ariaControls: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
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