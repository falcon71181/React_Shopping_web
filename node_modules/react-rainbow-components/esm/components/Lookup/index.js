import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import RenderIf from '../RenderIf';
import RightElement from './rightElement';
import SelectedValue from './selectedValue';
import Options from './options';
import { isNavigationKey, getNormalizedOptions, getInitialFocusedIndex, isOptionVisible, isMenuOpen } from './helpers';
import { uniqueId } from '../../libs/utils';
import { UP_KEY, DOWN_KEY, ENTER_KEY, ESCAPE_KEY } from '../../libs/constants';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Label from '../Input/label';
import StyledInput from './styled/input';
import StyledContainer from './styled/container';
import StyledInputContainer from './styled/inputContainer';
import StyledSpinner from './styled/spinner';
import StyledOptionsMenu from './styled/optionsMenu';
import StyledSearchIcon from './styled/searchIcon';
import StyledTextError from '../Input/styled/errorText';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';
import MenuArrowButton from './menuArrowButton';
import InternalOverlay from '../InternalOverlay';
import lookupPositionResolver from './helpers/lookupPositionResolver';
import { WindowScrolling } from '../../libs/scrollController';
var OPTION_HEIGHT = 48;
var visibleOptionsMap = {
  small: 3,
  medium: 5,
  large: 8
};

var Lookup = function (_Component) {
  _inherits(Lookup, _Component);

  var _super = _createSuper(Lookup);

  function Lookup(props) {
    var _this$keyHandlerMap;

    var _this;

    _classCallCheck(this, Lookup);

    _this = _super.call(this, props);
    var normalizedOptions = getNormalizedOptions(props.options || []);
    _this.state = {
      searchValue: '',
      isOpen: false,
      isFocused: false,
      options: normalizedOptions,
      focusedItemIndex: getInitialFocusedIndex(normalizedOptions, props.preferredSelectedOption),
      showScrollUpArrow: undefined,
      showScrollDownArrow: undefined
    };
    _this.inputId = uniqueId('lookup-input');
    _this.listboxId = uniqueId('lookup-listbox');
    _this.errorMessageId = uniqueId('error-message');
    _this.containerRef = React.createRef();
    _this.inputRef = React.createRef();
    _this.menuRef = React.createRef();
    _this.handleSearch = _this.handleSearch.bind(_assertThisInitialized(_this));
    _this.clearInput = _this.clearInput.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleRemoveValue = _this.handleRemoveValue.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleKeyUpPressed = _this.handleKeyUpPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyDownPressed = _this.handleKeyDownPressed.bind(_assertThisInitialized(_this));
    _this.handleKeyEnterPressed = _this.handleKeyEnterPressed.bind(_assertThisInitialized(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, _defineProperty(_this$keyHandlerMap, UP_KEY, _this.handleKeyUpPressed), _defineProperty(_this$keyHandlerMap, DOWN_KEY, _this.handleKeyDownPressed), _defineProperty(_this$keyHandlerMap, ENTER_KEY, _this.handleKeyEnterPressed), _this$keyHandlerMap);
    _this.handleScrollDownArrowHover = _this.handleScrollDownArrowHover.bind(_assertThisInitialized(_this));
    _this.handleScrollUpArrowHover = _this.handleScrollUpArrowHover.bind(_assertThisInitialized(_this));
    _this.stopArrowScoll = _this.stopArrowScoll.bind(_assertThisInitialized(_this));
    _this.updateScrollingArrows = _this.updateScrollingArrows.bind(_assertThisInitialized(_this));
    _this.handleWindowScroll = _this.handleWindowScroll.bind(_assertThisInitialized(_this));
    _this.handleOverlayOpened = _this.handleOverlayOpened.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.windowScrolling = new WindowScrolling();
    return _this;
  }

  _createClass(Lookup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevOptions = prevProps.options,
          prevPreferredSelectedOption = prevProps.preferredSelectedOption;
      var _this$props = this.props,
          options = _this$props.options,
          preferredSelectedOption = _this$props.preferredSelectedOption;

      if (prevOptions !== options) {
        var normalizedOptions = getNormalizedOptions(options);
        this.setState({
          options: normalizedOptions,
          focusedItemIndex: getInitialFocusedIndex(normalizedOptions, preferredSelectedOption),
          isOpen: this.isLookupOpen()
        });
      }

      if (prevPreferredSelectedOption !== preferredSelectedOption) {
        var currentOptions = this.state.options;
        this.setState({
          focusedItemIndex: getInitialFocusedIndex(currentOptions, preferredSelectedOption),
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

      if (_typeof(value) === 'object' && !Array.isArray(value)) {
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
      var isOpen = isMenuOpen(options, isFocused);

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
        focusedItemIndex: getInitialFocusedIndex(options, preferredSelectedOption)
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
      var isOpen = isMenuOpen(options, isFocused);
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

      if (keyCode === ESCAPE_KEY) {
        if (searchValue) {
          event.stopPropagation();
        } else if (this.isLookupOpen()) {
          event.stopPropagation();
          this.closeMenu();
        }
      }

      if (isNavigationKey(keyCode) && this.isLookupOpen()) {
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
        if (!isScrollPositionAtMenuBottom(menu)) {
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
      var showScrollDownArrow = !isScrollPositionAtMenuBottom(menu);
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

      if (options.length > visibleOptionsAmount && !isOptionVisible(prevFocusedOption, menu)) {
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

      if (options.length > visibleOptionsAmount && !isOptionVisible(nextFocusedOption, menu)) {
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
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style,
        role: "presentation",
        onKeyDown: this.handleKeyDown,
        ref: this.containerRef,
        tabIndex: -1
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: readOnly,
        size: size
      }), React.createElement(RenderIf, {
        isTrue: currentValue
      }, React.createElement(SelectedValue, {
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
      })), React.createElement(RenderIf, {
        isTrue: !currentValue
      }, React.createElement(StyledInputContainer, {
        "aria-expanded": isLookupOpen,
        "aria-haspopup": "listbox",
        role: "combobox"
      }, React.createElement(StyledSpinner, {
        isVisible: isLoading,
        size: "x-small",
        assistiveText: "searching"
      }), React.createElement(RightElement, {
        showCloseButton: !!searchValue,
        onClear: this.clearInput,
        icon: icon,
        error: errorValue
      }), React.createElement(StyledInput, {
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
      }), React.createElement(InternalOverlay, {
        isVisible: isLookupOpen,
        triggerElementRef: this.inputRef,
        positionResolver: lookupPositionResolver,
        onOpened: this.handleOverlayOpened
      }, React.createElement(StyledOptionsMenu, {
        id: this.listboxId,
        role: "listbox",
        "data-id": "lookup-options-container",
        borderRadius: borderRadius
      }, React.createElement(RenderIf, {
        isTrue: showScrollUpArrow
      }, React.createElement(MenuArrowButton, {
        arrow: "up",
        onMouseEnter: this.handleScrollUpArrowHover,
        onMouseLeave: this.stopArrowScoll
      })), React.createElement(Options, {
        items: options,
        value: searchValue,
        onSelectOption: this.handleChange,
        focusedItemIndex: focusedItemIndex,
        onHoverOption: this.handleHover,
        itemHeight: OPTION_HEIGHT,
        ref: this.menuRef,
        size: size,
        onScroll: this.updateScrollingArrows
      }), React.createElement(RenderIf, {
        isTrue: showScrollDownArrow
      }, React.createElement(MenuArrowButton, {
        arrow: "down",
        onMouseEnter: this.handleScrollDownArrowHover,
        onMouseLeave: this.stopArrowScoll
      })))))), React.createElement(RenderIf, {
        isTrue: errorValue
      }, React.createElement(StyledTextError, {
        id: errorMessageId
      }, error)));
    }
  }]);

  return Lookup;
}(Component);

Lookup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.shape({
    label: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    icon: PropTypes.node
  }), PropTypes.string]),
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    icon: PropTypes.node
  })),
  name: PropTypes.string,
  debounce: PropTypes.bool,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  preferredSelectedOption: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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
  icon: React.createElement(StyledSearchIcon, null),
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
export default withReduxForm(Lookup);