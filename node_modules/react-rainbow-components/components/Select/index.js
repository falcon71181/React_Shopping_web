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

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _utils = require("../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _options = _interopRequireDefault(require("./options"));

var _container = _interopRequireDefault(require("./styled/container"));

var _label = _interopRequireDefault(require("../Input/label"));

var _innerContainer = _interopRequireDefault(require("./styled/innerContainer"));

var _select = _interopRequireDefault(require("./styled/select"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _helpText = _interopRequireDefault(require("../Input/styled/helpText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Select = function (_Component) {
  (0, _inherits2["default"])(Select, _Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);
    _this = _super.call(this, props);
    _this.selectId = (0, _utils.uniqueId)('select');
    _this.selectRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "focus",
    value: function focus() {
      this.selectRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.selectRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.selectRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          bottomHelpText = _this$props.bottomHelpText,
          error = _this$props.error,
          required = _this$props.required,
          disabled = _this$props.disabled,
          options = _this$props.options,
          style = _this$props.style,
          className = _this$props.className,
          id = _this$props.id,
          name = _this$props.name,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          tabIndex = _this$props.tabIndex,
          variant = _this$props.variant,
          size = _this$props.size,
          borderRadius = _this$props.borderRadius;
      return _react["default"].createElement(_container["default"], {
        className: className,
        style: style,
        id: id
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.selectId,
        size: size
      }), _react["default"].createElement(_innerContainer["default"], {
        error: error,
        disabled: disabled
      }, _react["default"].createElement(_select["default"], {
        error: error,
        id: this.selectId,
        name: name,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        value: value,
        tabIndex: tabIndex,
        required: required,
        disabled: disabled,
        variant: variant,
        ref: this.selectRef,
        size: size,
        borderRadius: borderRadius
      }, _react["default"].createElement(_options["default"], {
        options: options
      }))), _react["default"].createElement(_RenderIf["default"], {
        isTrue: bottomHelpText
      }, _react["default"].createElement(_helpText["default"], null, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], null, error)));
    }
  }]);
  return Select;
}(_react.Component);

Select.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    disabled: _propTypes["default"].bool
  })),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  variant: _propTypes["default"].oneOf(['default', 'shaded']),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Select.defaultProps = {
  label: undefined,
  value: undefined,
  name: undefined,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  bottomHelpText: null,
  error: null,
  required: false,
  disabled: false,
  options: [],
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  tabIndex: undefined,
  variant: 'default',
  size: 'medium',
  borderRadius: 'rounded'
};

var _default = (0, _withReduxForm["default"])(Select);

exports["default"] = _default;