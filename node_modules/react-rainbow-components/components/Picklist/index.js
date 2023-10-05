"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Component = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _constants = require("../../libs/constants");

var _utils = require("../../libs/utils");

var _outsideClick = _interopRequireDefault(require("../../libs/outsideClick"));

var _scrollController = require("../../libs/scrollController");

var _label = _interopRequireDefault(require("../Input/label"));

var _getNormalizeValue2 = _interopRequireDefault(require("./helpers/getNormalizeValue"));

var _shouldOpenMenu = _interopRequireDefault(require("./helpers/shouldOpenMenu"));

var _input = _interopRequireDefault(require("./styled/input"));

var _container = _interopRequireDefault(require("./styled/container"));

var _innerContainer = _interopRequireDefault(require("./styled/innerContainer"));

var _icon = _interopRequireDefault(require("./styled/icon"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _indicator = _interopRequireDefault(require("./styled/indicator"));

var _InternalDropdown = _interopRequireDefault(require("../InternalDropdown"));

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var _WindowResize = _interopRequireDefault(require("../../libs/WindowResize"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _positionResolver(opts, enableSearch) {
  var trigger = opts.trigger,
      viewport = opts.viewport,
      content = opts.content;
  var newOpts = {
    trigger: trigger,
    viewport: viewport,
    content: _objectSpread(_objectSpread({}, content), {}, {
      width: trigger.width
    })
  };

  if (enableSearch && viewport.width <= 600) {
    return {
      top: 0,
      left: 0,
      width: viewport.width
    };
  }

  return _objectSpread(_objectSpread({}, _InternalOverlay["default"].defaultPositionResolver(newOpts)), {}, {
    width: trigger.width
  });
}

var Picklist = function (_Component) {
  (0, _inherits2["default"])(Picklist, _Component);

  var _super = _createSuper(Picklist);

  function Picklist(props) {
    var _this$keyHandlerMap;

    var _this;

    (0, _classCallCheck2["default"])(this, Picklist);
    _this = _super.call(this, props);
    _this.inputId = (0, _utils.uniqueId)('picklist-input');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.listboxId = (0, _utils.uniqueId)('listbox');
    _this.containerRef = _react["default"].createRef();
    _this.triggerRef = _react["default"].createRef();
    _this.dropdownRef = _react["default"].createRef();
    _this.handleInputClick = _this.handleInputClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPressed = _this.handleKeyPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeAndFocusInput = _this.closeAndFocusInput.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleWindowScroll = _this.handleWindowScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleWindowResize = _this.handleWindowResize.bind((0, _assertThisInitialized2["default"])(_this));
    _this.outsideClick = new _outsideClick["default"]();
    _this.windowScrolling = new _scrollController.WindowScrolling();
    _this.windowResize = new _WindowResize["default"]();
    _this.activeChildren = [];
    _this.state = {
      isOpen: false
    };
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.ESCAPE_KEY, _this.closeAndFocusInput), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.TAB_KEY, _this.closeAndFocusInput), _this$keyHandlerMap);
    return _this;
  }

  (0, _createClass2["default"])(Picklist, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var wasOpen = prevState.isOpen;
      var isOpen = this.state.isOpen;

      if (!wasOpen && isOpen) {
        this.outsideClick.startListening(this.containerRef.current, function (_, event) {
          if (!_this2.dropdownRef.current.contains(event.target)) {
            _this2.closeMenu();

            _this2.handleBlur();
          }
        });

        if (window.screen.width > 600) {
          this.windowScrolling.startListening(this.handleWindowScroll);
        }

        this.windowResize.startListening(this.handleWindowResize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.outsideClick.stopListening();
      this.windowScrolling.stopListening();
      this.windowResize.stopListening();
    }
  }, {
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "handleKeyPressed",
    value: function handleKeyPressed(event) {
      var isOpen = this.state.isOpen;
      var readOnly = this.props.readOnly;

      if (isOpen) {
        if (this.keyHandlerMap[event.keyCode]) {
          return this.keyHandlerMap[event.keyCode]();
        }
      } else if ((0, _shouldOpenMenu["default"])(event.keyCode) && !readOnly) {
        event.preventDefault();
        this.openMenu();
      }

      return null;
    }
  }, {
    key: "handleWindowScroll",
    value: function handleWindowScroll(event) {
      if (this.dropdownRef.current.contains(event.target)) return;
      this.closeMenu();
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      this.closeMenu();
    }
  }, {
    key: "closeAndFocusInput",
    value: function closeAndFocusInput() {
      this.closeMenu();
      this.focus();
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      var readOnly = this.props.readOnly;

      if (!readOnly) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.outsideClick.stopListening();
      this.windowScrolling.stopListening();
      this.windowResize.stopListening();
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "handleInputClick",
    value: function handleInputClick(event) {
      var onClick = this.props.onClick;
      var isOpen = this.state.isOpen;
      onClick(event);

      if (isOpen) {
        return this.closeMenu();
      }

      return this.openMenu();
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      var _this$props = this.props,
          onFocus = _this$props.onFocus,
          value = _this$props.value;
      var eventValue = value || null;
      onFocus(eventValue);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var isOpen = this.state.isOpen;
      if (isOpen) return;
      var _this$props2 = this.props,
          onBlur = _this$props2.onBlur,
          value = _this$props2.value;
      var eventValue = value || null;
      onBlur(eventValue);
    }
  }, {
    key: "handleChange",
    value: function handleChange(option) {
      var _this3 = this;

      var onChange = this.props.onChange;
      var label = option.label,
          name = option.name,
          icon = option.icon,
          value = option.value;
      this.closeMenu();
      setTimeout(function () {
        _this3.focus();

        return onChange({
          label: label,
          name: name,
          icon: icon,
          value: value
        });
      }, 0);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.triggerRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.triggerRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.triggerRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          pickListLabel = _this$props3.label,
          labelAlignment = _this$props3.labelAlignment,
          hideLabel = _this$props3.hideLabel,
          style = _this$props3.style,
          className = _this$props3.className,
          variant = _this$props3.variant,
          error = _this$props3.error,
          isLoading = _this$props3.isLoading,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly,
          required = _this$props3.required,
          children = _this$props3.children,
          id = _this$props3.id,
          tabIndex = _this$props3.tabIndex,
          placeholder = _this$props3.placeholder,
          name = _this$props3.name,
          valueInProps = _this$props3.value,
          enableSearch = _this$props3.enableSearch,
          onSearch = _this$props3.onSearch,
          debounce = _this$props3.debounce,
          emptyComponent = _this$props3.emptyComponent,
          size = _this$props3.size,
          borderRadius = _this$props3.borderRadius;

      var _getNormalizeValue = (0, _getNormalizeValue2["default"])(valueInProps),
          valueLabel = _getNormalizeValue.label,
          icon = _getNormalizeValue.icon;

      var value = valueLabel || '';
      var errorMessageId = this.getErrorMessageId();
      var isOpen = this.state.isOpen;
      var isReadOnly = !!(!disabled && readOnly);
      var labelVariant = variant === 'inverse' ? variant : 'default';
      return _react["default"].createElement(_container["default"], {
        id: id,
        role: "presentation",
        className: className,
        style: style,
        onKeyDown: this.handleKeyPressed,
        ref: this.containerRef,
        readOnly: readOnly
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: pickListLabel
      }, _react["default"].createElement(_label["default"], {
        label: pickListLabel,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: isReadOnly,
        variant: labelVariant,
        size: size
      })), _react["default"].createElement(_innerContainer["default"], {
        disabled: disabled,
        readOnly: readOnly,
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        role: "combobox"
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: icon
      }, _react["default"].createElement(_icon["default"], {
        error: error
      }, icon)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: !readOnly
      }, _react["default"].createElement(_indicator["default"], {
        error: error,
        disabled: disabled
      })), _react["default"].createElement(_input["default"], {
        "aria-controls": this.listboxId,
        id: this.inputId,
        type: "text",
        name: name,
        value: value,
        error: error,
        onClick: this.handleInputClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        placeholder: placeholder,
        tabIndex: tabIndex,
        readOnly: true,
        isReadOnly: readOnly,
        disabled: disabled,
        required: required,
        "aria-describedby": errorMessageId,
        autoComplete: "off",
        ref: this.triggerRef,
        icon: icon,
        iconPosition: "left",
        variant: variant,
        size: size,
        borderRadius: borderRadius
      }), _react["default"].createElement(_InternalOverlay["default"], {
        isVisible: isOpen,
        positionResolver: function positionResolver(opt) {
          return _positionResolver(opt, enableSearch);
        },
        onOpened: function onOpened() {
          return _this4.dropdownRef.current.focus();
        },
        triggerElementRef: function triggerElementRef() {
          return _this4.triggerRef;
        },
        keepScrollEnabled: true
      }, _react["default"].createElement(_InternalDropdown["default"], {
        id: this.listboxId,
        isLoading: isLoading,
        value: valueInProps,
        onChange: this.handleChange,
        enableSearch: enableSearch,
        onSearch: onSearch,
        debounce: debounce,
        ref: this.dropdownRef,
        emptyComponent: emptyComponent,
        borderRadius: borderRadius
      }, children))), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: errorMessageId
      }, error)));
    }
  }]);
  return Picklist;
}(_react.Component);

exports.Component = Picklist;
Picklist.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  isLoading: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    label: _propTypes["default"].string,
    name: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    icon: _propTypes["default"].node,
    value: _propTypes["default"].any
  }), _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  placeholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare', 'inverse']),
  enableSearch: _propTypes["default"].bool,
  onSearch: _propTypes["default"].func,
  debounce: _propTypes["default"].bool,
  emptyComponent: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Picklist.defaultProps = {
  label: undefined,
  children: null,
  isLoading: false,
  value: undefined,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  tabIndex: undefined,
  placeholder: undefined,
  name: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  id: undefined,
  error: null,
  disabled: false,
  readOnly: false,
  required: false,
  className: undefined,
  style: undefined,
  variant: 'default',
  enableSearch: false,
  onSearch: undefined,
  debounce: false,
  emptyComponent: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};

var _default = (0, _withReduxForm["default"])(Picklist);

exports["default"] = _default;