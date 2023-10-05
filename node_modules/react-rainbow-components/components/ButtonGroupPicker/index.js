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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _utils = require("../../libs/utils");

var _label = _interopRequireDefault(require("../Input/label"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _context = require("./context");

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ButtonGroupPicker = function (_Component) {
  (0, _inherits2["default"])(ButtonGroupPicker, _Component);

  var _super = _createSuper(ButtonGroupPicker);

  function ButtonGroupPicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ButtonGroupPicker);
    _this = _super.call(this, props);
    var name = _this.props.name;
    _this.groupNameId = name || (0, _utils.uniqueId)('options');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ButtonGroupPicker, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var _this$props = this.props,
          multiple = _this$props.multiple,
          size = _this$props.size,
          value = _this$props.value,
          variant = _this$props.variant;
      return {
        onChange: this.handleOnChange,
        values: value,
        type: multiple ? 'checkbox' : 'radio',
        name: this.groupNameId,
        ariaDescribedBy: this.getErrorMessageId(),
        size: size,
        variant: variant
      };
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event) {
      var _event$target = event.target,
          eventValue = _event$target.value,
          checked = _event$target.checked;
      var _this$props2 = this.props,
          value = _this$props2.value,
          multiple = _this$props2.multiple,
          onChange = _this$props2.onChange;

      if (!multiple) {
        return onChange(eventValue);
      }

      if (checked && Array.isArray(value)) {
        return onChange(value.concat([eventValue]));
      }

      if (checked && !Array.isArray(value)) {
        return onChange([eventValue]);
      }

      return onChange(value.filter(function (valueId) {
        return valueId !== eventValue;
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          className = _this$props3.className,
          style = _this$props3.style,
          label = _this$props3.label,
          children = _this$props3.children,
          error = _this$props3.error,
          bottomHelpText = _this$props3.bottomHelpText,
          required = _this$props3.required,
          labelAlignment = _this$props3.labelAlignment,
          hideLabel = _this$props3.hideLabel,
          variant = _this$props3.variant,
          borderRadius = _this$props3.borderRadius;
      var context = this.getContext();
      return _react["default"].createElement(_styled.StyledContainer, {
        id: id,
        className: className,
        style: style,
        borderRadius: borderRadius
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        as: "legend"
      })), _react["default"].createElement(_styled.StyledButtonGroup, {
        variant: variant,
        borderRadius: borderRadius
      }, _react["default"].createElement(_context.Provider, {
        value: context
      }, children)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: bottomHelpText
      }, _react["default"].createElement(_styled.StyledHelpText, null, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_styled.StyledErrorText, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return ButtonGroupPicker;
}(_react.Component);

exports.Component = ButtonGroupPicker;
ButtonGroupPicker.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  required: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  multiple: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  name: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  variant: _propTypes["default"].oneOf(['default', 'shaded']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonGroupPicker.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  label: undefined,
  value: undefined,
  required: false,
  onChange: function onChange() {},
  multiple: false,
  name: undefined,
  size: 'medium',
  error: undefined,
  bottomHelpText: undefined,
  children: undefined,
  labelAlignment: 'center',
  variant: 'default',
  hideLabel: false,
  borderRadius: 'rounded'
};

var _default = (0, _withReduxForm["default"])(ButtonGroupPicker);

exports["default"] = _default;