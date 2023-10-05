"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _rightElement = _interopRequireDefault(require("./rightElement"));

var _selectedValue = _interopRequireDefault(require("./selectedValue"));

var _options = _interopRequireDefault(require("./options"));

var _helpers = require("./helpers");

var _utils = require("../../libs/utils");

var _constants = require("../../libs/constants");

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _label = _interopRequireDefault(require("../Input/label"));

var _input = _interopRequireDefault(require("./styled/input"));

var _container = _interopRequireDefault(require("./styled/container"));

var _inputContainer = _interopRequireDefault(require("./styled/inputContainer"));

var _spinner = _interopRequireDefault(require("./styled/spinner"));

var _optionsMenu = _interopRequireDefault(require("./styled/optionsMenu"));

var _searchIcon = _interopRequireDefault(require("./styled/searchIcon"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _isScrollPositionAtMenuBottom = _interopRequireDefault(require("./helpers/isScrollPositionAtMenuBottom"));

var _menuArrowButton = _interopRequireDefault(require("./menuArrowButton"));

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var _lookupPositionResolver = _interopRequireDefault(require("./helpers/lookupPositionResolver"));

var _scrollController = require("../../libs/scrollController");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var OPTION_HEIGHT = 48;
var visibleOptionsMap = {
  small: 3,
  medium: 5,
  large: 8
};

var Lookup = function (_Component) {
  (0, _inherits2["default"])(Lookup, _Component);

  var _super = _createSuper(Lookup);

  function Lookup(props) {
    var _this$keyHandlerMap;

    var _this;

    (0, _classCallCheck2["default"])(this, Lookup);
    _this = _super.call(this, props);
    var normalizedOptions = (0, _helpers.getNormalizedOptions)(props.options || []);
    _this.state = {
      searchValue: '',
      isOpen: false,
      isFocused: false,
      options: normalizedOptions,
      focusedItemIndex: (0, _helpers.getInitialFocusedIndex)(normalizedOptions, props.preferredSelectedOption),
      showScrollUpArrow: undefined,
      showScrollDownArrow: undefined
    };
    _this.inputId = (0, _utils.uniqueId)('lookup-input');
    _this.listboxId = (0, _utils.uniqueId)('lookup-listbox');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.containerRef = _react["default"].createRef();
    _this.inputRef = _react["default"].createRef();
    _this.menuRef = _react["default"].createRef();
    _this.handleSearch = _this.handleSearch.bind((0, _assertThisInitialized2["default"])(_this));
    _this.clearInput = _this.clearInput.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleRemoveValue = _this.handleRemoveValue.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleHover = _this.handleHover.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyUpPressed = _this.handleKeyUpPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDownPressed = _this.handleKeyDownPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyEnterPressed = _this.handleKeyEnterPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.UP_KEY, _this.handleKeyUpPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.DOWN_KEY, _this.handleKeyDownPressed), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.ENTER_KEY, _this.handleKeyEnterPressed), _this$keyHandlerMap);
    _this.handleScrollDownArrowHover = _this.handleScrollDownArrowHover.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleScrollUpArrowHover = _this.handleScrollUpArrowHover.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stopArrowScoll = _this.stopArrowScoll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateScrollingArrows = _this.updateScrollingArrows.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleWindowScroll = _this.handleWindowScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleOverlayOpened = _this.handleOverlayOpened.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.windowScrolling = new _scrollController.WindowScrolling();
    return _this;
  }

  (0, _createClass2["default"])(Lookup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevOptions = prevProps.options,
          prevPreferredSelectedOption = prevProps.preferredSelectedOption;
      var _this$props = this.props,
          options = _this$props.options,
          preferredSelectedOption = _this$props.preferredSelectedOption;

      if (prevOptions !== options) {
        var normalizedOptions = (0, _helpers.getNormalizedOptions)(options);
        this.setState({
          options: normalizedOptions,
          focusedItemIndex: (0, _helpers.getInitialFocusedIndex)(normalizedOptions, preferredSelectedOption),
          isOpen: this.isLookupOpen()
        });
      }

      if (prevPreferredSelectedOption !== preferredSelectedOption) {
        var currentOptions = this.state.options;
        this.setState({
          focusedItemIndex: (0, _helpers.getInitialFocusedIndex)(currentOptions, preferredSelectedOption),
          isOpen: this.isLookupOpen()
        });
      }

      var wasOpen = prevState.isOpen;
      var isOpen = this.state.isOpen;

      if (!wasOpen && isOpen && this.menuRef.current !== null) {
        this.updateScrollingArrows();
      }

      if (!this.isLookupOpen()) this.windowScrolling.stopListening();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.props.value;

      if ((0, _typeof2["default"])(value) === 'object' && !Array.isArray(value)) {
        return value;
      }

      return undefined;
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
    key: "getAriaActivedescendant",
    value: function getAriaActivedescendant() {
      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          focusedItemIndex = _this$state.focusedItemIndex;
      var options = this.props.options;
      var isOpen = (0, _helpers.isMenuOpen)(options, isFocused);

      if (isOpen) {
        return "lookup-item-".concat(focusedItemIndex);
      }

      return undefined;
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      var _this2 = this;

      var onChange = this.props.onChange;
      setTimeout(function () {
        return _this2.containerRef.current.focus();
      }, 0);
      this.setState({
        searchValue: ''
      });
      this.closeMenu();
      onChange(value);
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(event) {
      var value = event.target.value;
      this.setState({
        searchValue: value
      });
      this.fireSearch(value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      var _this$props2 = this.props,
          onFocus = _this$props2.onFocus,
          value = _this$props2.value;
      this.openMenu();
      var eventValue = value || null;
      onFocus(eventValue);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var _this$props3 = this.props,
          onBlur = _this$props3.onBlur,
          value = _this$props3.value;
      this.closeMenu();
      var eventValue = value || null;
      onBlur(eventValue);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var onClick = this.props.onClick;
      this.openMenu();
      return onClick(event);
    }
  }, {
    key: "handleRemoveValue",
    value: function handleRemoveValue() {
      var _this3 = this;

      var _this$props4 = this.props,
          onChange = _this$props4.onChange,
          onSearch = _this$props4.onSearch;
      onChange(null);
      onSearch('');
      setTimeout(function () {
        return _this3.focus();
      }, 0);
    }
  }, {
    key: "fireSearch",
    value: function fireSearch(value) {
      var _this$props5 = this.props,
          onSearch = _this$props5.onSearch,
          debounce = _this$props5.debounce;

      if (debounce && value) {
        this.resetTimeout();
        this.timeout = setTimeout(function () {
          onSearch(value);
        }, 500);
      } else {
        this.resetTimeout();
        onSearch(value);
      }
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      var _this4 = this;

      var searchValue = '';
      this.setState({
        searchValue: searchValue
      });
      this.fireSearch(searchValue);
      setTimeout(function () {
        return _this4.focus();
      }, 0);
    }
  }, {
    key: "resetTimeout",
    value: function resetTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      return this.setState({
        isFocused: true
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      var options = this.state.options;
      var preferredSelectedOption = this.props.preferredSelectedOption;
      return this.setState({
        isFocused: false,
        isOpen: false,
        focusedItemIndex: (0, _helpers.getInitialFocusedIndex)(options, preferredSelectedOption)
      });
    }
  }, {
    key: "isLookupOpen",
    value: function isLookupOpen() {
      var _this$state2 = this.state,
          searchValue = _this$state2.searchValue,
          isFocused = _this$state2.isFocused;
      var options = this.props.options;
      var isMenuEmpty = isFocused && !!searchValue && Array.isArray(options) && options.length === 0;
      var isOpen = (0, _helpers.isMenuOpen)(options, isFocused);
      return isOpen || isMenuEmpty;
    }
  }, {
    key: "handleHover",
    value: function handleHover(index) {
      this.setState({
        focusedItemIndex: index
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var searchValue = this.state.searchValue;
      var keyCode = event.keyCode;

      if (keyCode === _constants.ESCAPE_KEY) {
        if (searchValue) {
          event.stopPropagation();
        } else if (this.isLookupOpen()) {
          event.stopPropagation();
          this.closeMenu();
        }
      }

      if ((0, _helpers.isNavigationKey)(keyCode) && this.isLookupOpen()) {
        event.preventDefault();
        event.stopPropagation();

        if (this.keyHandlerMap[keyCode]) {
          this.keyHandlerMap[keyCode]();
        }
      }
    }
  }, {
    key: "stopArrowScoll",
    value: function stopArrowScoll() {
      if (this.scrollingTimer) {
        clearTimeout(this.scrollingTimer);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(offset) {
      var menu = this.menuRef.current.getRef();
      menu.scrollTo(0, offset);
    }
  }, {
    key: "scrollBy",
    value: function scrollBy(offset) {
      var menu = this.menuRef.current.getRef();
      menu.scrollBy(0, offset);
    }
  }, {
    key: "handleScrollUpArrowHover",
    value: function handleScrollUpArrowHover() {
      var _this5 = this;

      this.stopArrowScoll();
      var menu = this.menuRef.current.getRef();
      this.scrollingTimer = setTimeout(function () {
        if (menu.scrollTop > 0) {
          menu.scrollBy(0, -1);
          setTimeout(_this5.handleScrollUpArrowHover(), 5);
        } else {
          _this5.stopArrowScoll();
        }
      }, 5);
      this.updateScrollingArrows();
    }
  }, {
    key: "handleScrollDownArrowHover",
    value: function handleScrollDownArrowHover() {
      var _this6 = this;

      this.stopArrowScoll();
      var menu = this.menuRef.current.getRef();
      this.scrollingTimer = setTimeout(function () {
        if (!(0, _isScrollPositionAtMenuBottom["default"])(menu)) {
          menu.scrollBy(0, 1);
          setTimeout(_this6.handleScrollDownArrowHover(), 5);
        } else {
          _this6.stopArrowScoll();
        }
      }, 5);
      this.updateScrollingArrows();
    }
  }, {
    key: "updateScrollingArrows",
    value: function updateScrollingArrows() {
      var menu = this.menuRef.current.getRef();
      var showScrollUpArrow = menu.scrollTop > 0;
      var showScrollDownArrow = !(0, _isScrollPositionAtMenuBottom["default"])(menu);
      this.setState({
        showScrollUpArrow: showScrollUpArrow,
        showScrollDownArrow: showScrollDownArrow
      });
    }
  }, {
    key: "handleKeyUpPressed",
    value: function handleKeyUpPressed() {
      var _this$state3 = this.state,
          focusedItemIndex = _this$state3.focusedItemIndex,
          options = _this$state3.options;

      if (focusedItemIndex > 0) {
        var prevIndex = focusedItemIndex - 1;
        var prevFocusedIndex = options[prevIndex].type === 'header' ? focusedItemIndex - 2 : prevIndex;

        if (prevFocusedIndex >= 0) {
          this.setState({
            focusedItemIndex: prevFocusedIndex
          });
        }

        this.scrollUp(prevFocusedIndex);
      }
    }
  }, {
    key: "scrollUp",
    value: function scrollUp(prevFocusedIndex) {
      var options = this.state.options;
      var size = this.props.size;
      var menu = this.menuRef.current.getRef();
      var prevIndex = prevFocusedIndex >= 0 ? prevFocusedIndex : 0;
      var prevFocusedOption = menu.childNodes[prevIndex];
      var visibleOptionsAmount = visibleOptionsMap[size] || visibleOptionsMap.medium;

      if (options.length > visibleOptionsAmount && !(0, _helpers.isOptionVisible)(prevFocusedOption, menu)) {
        this.menuRef.current.scrollTo(OPTION_HEIGHT * prevIndex);
      }
    }
  }, {
    key: "handleKeyDownPressed",
    value: function handleKeyDownPressed() {
      var _this$state4 = this.state,
          focusedItemIndex = _this$state4.focusedItemIndex,
          options = _this$state4.options;
      var lastIndex = options.length - 1;

      if (focusedItemIndex < lastIndex) {
        var nextIndex = focusedItemIndex + 1;
        var nextFocusedIndex = options[nextIndex].type === 'header' ? focusedItemIndex + 2 : nextIndex;

        if (nextFocusedIndex <= lastIndex) {
          this.setState({
            focusedItemIndex: nextFocusedIndex
          });
          this.scrollDown(nextFocusedIndex);
        }
      }
    }
  }, {
    key: "scrollDown",
    value: function scrollDown(nextFocusedIndex) {
      var options = this.state.options;
      var size = this.props.size;
      var menu = this.menuRef.current.getRef();
      var nextFocusedOption = menu.childNodes[nextFocusedIndex];
      var visibleOptionsAmount = visibleOptionsMap[size] || visibleOptionsMap.medium;

      if (options.length > visibleOptionsAmount && !(0, _helpers.isOptionVisible)(nextFocusedOption, menu)) {
        this.menuRef.current.scrollTo(OPTION_HEIGHT * (nextFocusedIndex - (visibleOptionsAmount - 1)));
      }
    }
  }, {
    key: "handleKeyEnterPressed",
    value: function handleKeyEnterPressed() {
      var onChange = this.props.onChange;
      var focusedItemIndex = this.state.focusedItemIndex;
      var options = this.state.options;
      var value = options[focusedItemIndex];
      this.containerRef.current.focus();
      this.setState({
        searchValue: ''
      });
      onChange(value);
    }
  }, {
    key: "handleWindowScroll",
    value: function handleWindowScroll(event) {
      if (this.menuRef.current && this.menuRef.current.getRef().contains(event.target)) return;
      this.closeMenu();
    }
  }, {
    key: "handleOverlayOpened",
    value: function handleOverlayOpened() {
      this.windowScrolling.startListening(this.handleWindowScroll);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.inputRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.inputRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.inputRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          style = _this$props6.style,
          className = _this$props6.className,
          label = _this$props6.label,
          error = _this$props6.error,
          size = _this$props6.size,
          placeholder = _this$props6.placeholder,
          disabled = _this$props6.disabled,
          readOnly = _this$props6.readOnly,
          tabIndex = _this$props6.tabIndex,
          onClick = _this$props6.onClick,
          required = _this$props6.required,
          id = _this$props6.id,
          name = _this$props6.name,
          labelAlignment = _this$props6.labelAlignment,
          hideLabel = _this$props6.hideLabel,
          isLoading = _this$props6.isLoading,
          icon = _this$props6.icon,
          variant = _this$props6.variant,
          borderRadius = _this$props6.borderRadius;
      var _this$state5 = this.state,
          searchValue = _this$state5.searchValue,
          focusedItemIndex = _this$state5.focusedItemIndex,
          options = _this$state5.options;
      var onDeleteValue = disabled || readOnly ? undefined : this.handleRemoveValue;
      var isLookupOpen = this.isLookupOpen();
      var errorMessageId = this.getErrorMessageId();
      var currentValue = this.getValue();
      var _this$state6 = this.state,
          showScrollUpArrow = _this$state6.showScrollUpArrow,
          showScrollDownArrow = _this$state6.showScrollDownArrow;
      var errorValue = isLoading ? null : error;
      return _react["default"].createElement(_container["default"], {
        id: id,
        className: className,
        style: style,
        role: "presentation",
        onKeyDown: this.handleKeyDown,
        ref: this.containerRef,
        tabIndex: -1
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: readOnly,
        size: size
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: currentValue
      }, _react["default"].createElement(_selectedValue["default"], {
        id: this.inputId,
        name: name,
        value: currentValue,
        tabIndex: tabIndex,
        onClick: onClick,
        disabled: disabled,
        error: errorValue,
        required: required,
        readOnly: readOnly,
        errorMessageId: errorMessageId,
        ref: this.inputRef,
        onClearValue: onDeleteValue,
        borderRadius: borderRadius
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: !currentValue
      }, _react["default"].createElement(_inputContainer["default"], {
        "aria-expanded": isLookupOpen,
        "aria-haspopup": "listbox",
        role: "combobox"
      }, _react["default"].createElement(_spinner["default"], {
        isVisible: isLoading,
        size: "x-small",
        assistiveText: "searching"
      }), _react["default"].createElement(_rightElement["default"], {
        showCloseButton: !!searchValue,
        onClear: this.clearInput,
        icon: icon,
        error: errorValue
      }), _react["default"].createElement(_input["default"], {
        id: this.inputId,
        name: name,
        type: "search",
        value: searchValue,
        placeholder: placeholder,
        onChange: this.handleSearch,
        tabIndex: tabIndex,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        disabled: disabled,
        readOnly: readOnly,
        required: required,
        autoComplete: "off",
        "aria-describedby": errorMessageId,
        "aria-autocomplete": "list",
        "aria-controls": this.listboxId,
        "aria-activedescendant": this.getAriaActivedescendant(),
        ref: this.inputRef,
        iconPosition: "right",
        icon: icon,
        error: errorValue,
        isLoading: isLoading,
        variant: variant,
        size: size,
        borderRadius: borderRadius
      }), _react["default"].createElement(_InternalOverlay["default"], {
        isVisible: isLookupOpen,
        triggerElementRef: this.inputRef,
        positionResolver: _lookupPositionResolver["default"],
        onOpened: this.handleOverlayOpened
      }, _react["default"].createElement(_optionsMenu["default"], {
        id: this.listboxId,
        role: "listbox",
        "data-id": "lookup-options-container",
        borderRadius: borderRadius
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: showScrollUpArrow
      }, _react["default"].createElement(_menuArrowButton["default"], {
        arrow: "up",
        onMouseEnter: this.handleScrollUpArrowHover,
        onMouseLeave: this.stopArrowScoll
      })), _react["default"].createElement(_options["default"], {
        items: options,
        value: searchValue,
        onSelectOption: this.handleChange,
        focusedItemIndex: focusedItemIndex,
        onHoverOption: this.handleHover,
        itemHeight: OPTION_HEIGHT,
        ref: this.menuRef,
        size: size,
        onScroll: this.updateScrollingArrows
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: showScrollDownArrow
      }, _react["default"].createElement(_menuArrowButton["default"], {
        arrow: "down",
        onMouseEnter: this.handleScrollDownArrowHover,
        onMouseLeave: this.stopArrowScoll
      })))))), _react["default"].createElement(_RenderIf["default"], {
        isTrue: errorValue
      }, _react["default"].createElement(_errorText["default"], {
        id: errorMessageId
      }, error)));
    }
  }]);
  return Lookup;
}(_react.Component);

Lookup.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    label: _propTypes["default"].string,
    description: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
    icon: _propTypes["default"].node
  }), _propTypes["default"].string]),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
    description: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
    icon: _propTypes["default"].node
  })),
  name: _propTypes["default"].string,
  debounce: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  icon: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onSearch: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  preferredSelectedOption: _propTypes["default"].number,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Lookup.defaultProps = {
  label: undefined,
  value: undefined,
  name: undefined,
  placeholder: null,
  required: false,
  error: null,
  disabled: false,
  readOnly: false,
  icon: _react["default"].createElement(_searchIcon["default"], null),
  size: 'medium',
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  isLoading: false,
  options: undefined,
  onSearch: function onSearch() {},
  debounce: false,
  preferredSelectedOption: 0,
  variant: 'default',
  borderRadius: 'rounded'
};

var _default = (0, _withReduxForm["default"])(Lookup);

exports["default"] = _default;