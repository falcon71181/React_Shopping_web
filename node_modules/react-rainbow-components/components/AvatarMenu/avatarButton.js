"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _button = _interopRequireDefault(require("./styled/button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AvatarButton = function (_Component) {
  (0, _inherits2["default"])(AvatarButton, _Component);

  var _super = _createSuper(AvatarButton);

  function AvatarButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AvatarButton);
    _this = _super.call(this, props);
    _this.avatarButtonRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(AvatarButton, [{
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
      return _react["default"].createElement(_button["default"], {
        "data-id": "avatar-menu-button",
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        disabled: disabled,
        onClick: onClick,
        title: title,
        "aria-haspopup": ariaHaspopup,
        ref: this.avatarButtonRef
      }, _react["default"].createElement(_Avatar["default"], {
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
}(_react.Component);

exports["default"] = AvatarButton;
AvatarButton.propTypes = {
  title: _propTypes["default"].string,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  assistiveText: _propTypes["default"].string,
  ariaHaspopup: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  src: _propTypes["default"].string,
  initials: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  avatarSize: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  initialsVariant: _propTypes["default"].oneOf(['default', 'inverse']),
  avatarBackgroundColor: _propTypes["default"].string
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