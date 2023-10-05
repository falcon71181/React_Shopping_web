"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../libs/utils");

var _label = _interopRequireDefault(require("../label"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _relativeElement = _interopRequireDefault(require("../../Structural/relativeElement"));

var _container = _interopRequireDefault(require("../styled/container"));

var _iconContainer = _interopRequireDefault(require("../styled/iconContainer"));

var _styled = require("./styled");

var _helpText = _interopRequireDefault(require("../styled/helpText"));

var _errorText = _interopRequireDefault(require("../styled/errorText"));

var _icons = require("./icons");

var _getValueAlignment = _interopRequireDefault(require("../helpers/getValueAlignment"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InputBase = function (_Component) {
  (0, _inherits2["default"])(InputBase, _Component);

  var _super = _createSuper(InputBase);

  function InputBase(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputBase);
    _this = _super.call(this, props);
    _this.inputId = (0, _utils.uniqueId)('input');
    _this.inlineTextLabelId = (0, _utils.uniqueId)('inline-text-label');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.inputRef = _react["default"].createRef();
    _this.handlePasswordToggle = _this.handlePasswordToggle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      isPasswordVisible: false
    };
    return _this;
  }

  (0, _createClass2["default"])(InputBase, [{
    key: "getInlineTextLabelId",
    value: function getInlineTextLabelId() {
      var bottomHelpText = this.props.bottomHelpText;

      if (bottomHelpText) {
        return this.inlineTextLabelId;
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
    key: "getToggleButtonIcon",
    value: function getToggleButtonIcon() {
      var isPasswordVisible = this.state.isPasswordVisible;
      return isPasswordVisible ? _react["default"].createElement(_icons.EyeClosed, null) : _react["default"].createElement(_icons.Eye, null);
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      var type = this.props.type;

      if (type === 'password') {
        var isPasswordVisible = this.state.isPasswordVisible;
        return isPasswordVisible ? 'text' : 'password';
      }

      return type;
    }
  }, {
    key: "handlePasswordToggle",
    value: function handlePasswordToggle() {
      var type = this.props.type;

      if (type === 'password') {
        var isPasswordVisible = this.state.isPasswordVisible;
        this.setState({
          isPasswordVisible: !isPasswordVisible
        });
      }
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
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          value = _this$props.value,
          label = _this$props.label,
          error = _this$props.error,
          placeholder = _this$props.placeholder,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          tabIndex = _this$props.tabIndex,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          type = _this$props.type,
          max = _this$props.max,
          min = _this$props.min,
          maxLength = _this$props.maxLength,
          minLength = _this$props.minLength,
          pattern = _this$props.pattern,
          icon = _this$props.icon,
          bottomHelpText = _this$props.bottomHelpText,
          required = _this$props.required,
          id = _this$props.id,
          autoComplete = _this$props.autoComplete,
          name = _this$props.name,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          isBare = _this$props.isBare,
          isCentered = _this$props.isCentered,
          iconPosition = _this$props.iconPosition,
          variant = _this$props.variant,
          size = _this$props.size,
          valueAlignment = _this$props.valueAlignment,
          borderRadius = _this$props.borderRadius;
      var isReadOnly = !!(!disabled && readOnly);
      var isPassword = type === 'password';
      return _react["default"].createElement(_container["default"], {
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.inputId,
        readOnly: isReadOnly,
        id: this.getInlineTextLabelId(),
        size: size
      }), _react["default"].createElement(_relativeElement["default"], null, _react["default"].createElement(_RenderIf["default"], {
        isTrue: icon
      }, _react["default"].createElement(_iconContainer["default"], {
        iconPosition: iconPosition,
        readOnly: readOnly,
        error: error,
        size: size
      }, icon)), _react["default"].createElement(_styled.StyledInput, {
        id: this.inputId,
        name: name,
        type: this.getInputType(),
        value: value,
        placeholder: placeholder,
        onChange: onChange,
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onKeyDown: onKeyDown,
        disabled: disabled,
        readOnly: readOnly,
        required: required,
        max: max,
        min: min,
        maxLength: maxLength,
        minLength: minLength,
        pattern: pattern,
        autoComplete: autoComplete,
        "aria-labelledby": this.getInlineTextLabelId(),
        "aria-describedby": this.getErrorMessageId(),
        ref: this.inputRef,
        isBare: isBare,
        valueAlignment: (0, _getValueAlignment["default"])({
          valueAlignment: valueAlignment,
          isCentered: isCentered
        }),
        iconPosition: iconPosition,
        icon: icon,
        error: error,
        variant: variant,
        size: size,
        borderRadius: borderRadius
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: isPassword
      }, _react["default"].createElement(_styled.TogglePasswordButton, {
        icon: this.getToggleButtonIcon(),
        onClick: this.handlePasswordToggle,
        size: size
      }))), _react["default"].createElement(_RenderIf["default"], {
        isTrue: bottomHelpText
      }, _react["default"].createElement(_helpText["default"], {
        alignSelf: "center"
      }, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        alignSelf: "center",
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return InputBase;
}(_react.Component);

exports["default"] = InputBase;
InputBase.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  name: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  placeholder: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  max: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  min: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxLength: _propTypes["default"].number,
  minLength: _propTypes["default"].number,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  required: _propTypes["default"].bool,
  pattern: _propTypes["default"].string,
  isCentered: _propTypes["default"].bool,
  isBare: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  id: _propTypes["default"].string,
  autoComplete: _propTypes["default"].string,
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  valueAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
InputBase.defaultProps = {
  value: undefined,
  name: undefined,
  type: 'text',
  label: undefined,
  placeholder: undefined,
  icon: undefined,
  iconPosition: 'left',
  max: undefined,
  min: undefined,
  maxLength: undefined,
  minLength: undefined,
  bottomHelpText: null,
  required: false,
  pattern: undefined,
  isCentered: false,
  isBare: false,
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  autoComplete: 'on',
  labelAlignment: 'center',
  hideLabel: false,
  size: 'medium',
  valueAlignment: undefined,
  borderRadius: 'rounded'
};