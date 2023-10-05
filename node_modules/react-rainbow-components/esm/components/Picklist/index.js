import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import { ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import { uniqueId } from '../../libs/utils';
import OutsideClick from '../../libs/outsideClick';
import { WindowScrolling } from '../../libs/scrollController';
import Label from '../Input/label';
import getNormalizeValue from './helpers/getNormalizeValue';
import shouldOpenMenu from './helpers/shouldOpenMenu';
import StyledInput from './styled/input';
import StyledContainer from './styled/container';
import StyledInnerContainer from './styled/innerContainer';
import StyledIcon from './styled/icon';
import StyledError from '../Input/styled/errorText';
import StyledIndicator from './styled/indicator';
import InternalDropdown from '../InternalDropdown';
import InternalOverlay from '../InternalOverlay';
import WindowResize from '../../libs/WindowResize';

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

  return _objectSpread(_objectSpread({}, InternalOverlay.defaultPositionResolver(newOpts)), {}, {
    width: trigger.width
  });
}

var Picklist = function (_Component) {
  _inherits(Picklist, _Component);

  var _super = _createSuper(Picklist);

  function Picklist(props) {
    var _this$keyHandlerMap;

    var _this;

    _classCallCheck(this, Picklist);

    _this = _super.call(this, props);
    _this.inputId = uniqueId('picklist-input');
    _this.errorMessageId = uniqueId('error-message');
    _this.listboxId = uniqueId('listbox');
    _this.containerRef = React.createRef();
    _this.triggerRef = React.createRef();
    _this.dropdownRef = React.createRef();
    _this.handleInputClick = _this.handleInputClick.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleKeyPressed = _this.handleKeyPressed.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.closeAndFocusInput = _this.closeAndFocusInput.bind(_assertThisInitialized(_this));
    _this.handleWindowScroll = _this.handleWindowScroll.bind(_assertThisInitialized(_this));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_this));
    _this.outsideClick = new OutsideClick();
    _this.windowScrolling = new WindowScrolling();
    _this.windowResize = new WindowResize();
    _this.activeChildren = [];
    _this.state = {
      isOpen: false
    };
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, _defineProperty(_this$keyHandlerMap, ESCAPE_KEY, _this.closeAndFocusInput), _defineProperty(_this$keyHandlerMap, TAB_KEY, _this.closeAndFocusInput), _this$keyHandlerMap);
    return _this;
  }

  _createClass(Picklist, [{
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
      } else if (shouldOpenMenu(event.keyCode) && !readOnly) {
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

      var _getNormalizeValue = getNormalizeValue(valueInProps),
          valueLabel = _getNormalizeValue.label,
          icon = _getNormalizeValue.icon;

      var value = valueLabel || '';
      var errorMessageId = this.getErrorMessageId();
      var isOpen = this.state.isOpen;
      var isReadOnly = !!(!disabled && readOnly);
      var labelVariant = variant === 'inverse' ? variant : 'default';
      return React.createElement(StyledContainer, {
        id: id,
        role: "presentation",
        className: className,
        style: style,
        onKeyDown: this.handleKeyPressed,
        ref: this.containerRef,
        readOnly: readOnly
      }, React.createElement(RenderIf, {
        isTrue: pickListLabel
      }, React.createElement(Label, {
        label: pickListLabel,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: isReadOnly,
        variant: labelVariant,
        size: size
      })), React.createElement(StyledInnerContainer, {
        disabled: disabled,
        readOnly: readOnly,
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        role: "combobox"
      }, React.createElement(RenderIf, {
        isTrue: icon
      }, React.createElement(StyledIcon, {
        error: error
      }, icon)), React.createElement(RenderIf, {
        isTrue: !readOnly
      }, React.createElement(StyledIndicator, {
        error: error,
        disabled: disabled
      })), React.createElement(StyledInput, {
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
      }), React.createElement(InternalOverlay, {
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
      }, React.createElement(InternalDropdown, {
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
      }, children))), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledError, {
        id: errorMessageId
      }, error)));
    }
  }]);

  return Picklist;
}(Component);

Picklist.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  isLoading: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.node,
    value: PropTypes.any
  }), PropTypes.string]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded', 'bare', 'inverse']),
  enableSearch: PropTypes.bool,
  onSearch: PropTypes.func,
  debounce: PropTypes.bool,
  emptyComponent: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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
export default withReduxForm(Picklist);
export { Picklist as Component };