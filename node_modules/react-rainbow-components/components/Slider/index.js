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

var _utils = require("../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _container = _interopRequireDefault(require("./styled/container"));

var _label = _interopRequireDefault(require("./styled/label"));

var _slider = _interopRequireDefault(require("./styled/slider"));

var _inputRange = _interopRequireDefault(require("./styled/inputRange"));

var _value = _interopRequireDefault(require("./styled/value"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Slider = function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = _super.call(this, props);
    _this.sliderId = (0, _utils.uniqueId)('slider-id');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.sliderRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "getAriaDescribedBy",
    value: function getAriaDescribedBy() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "click",
    value: function click() {
      this.sliderRef.current.click();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.sliderRef.current.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.sliderRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          name = _this$props.name,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          error = _this$props.error,
          disabled = _this$props.disabled,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          onFocus = _this$props.onFocus,
          style = _this$props.style,
          className = _this$props.className,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          required = _this$props.required;
      var valueWidth = Math.max("".concat(max).length, "".concat(min).length) + 1;
      return _react["default"].createElement(_container["default"], {
        className: className,
        style: style
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        inputId: this.sliderId,
        required: required
      })), _react["default"].createElement(_slider["default"], null, _react["default"].createElement(_inputRange["default"], {
        id: this.sliderId,
        type: "range",
        name: name,
        value: value,
        min: min,
        max: max,
        step: step,
        "aria-describedby": this.getAriaDescribedBy(),
        disabled: disabled,
        required: required,
        onClick: onClick,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        ref: this.sliderRef
      }), _react["default"].createElement(_value["default"], {
        width: valueWidth,
        "aria-hidden": true
      }, value)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: this.errorMessageId
      }, error)));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
Slider.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  name: _propTypes["default"].string,
  min: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  max: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  step: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Slider.defaultProps = {
  label: null,
  value: undefined,
  name: undefined,
  min: 0,
  max: 100,
  step: 1,
  error: undefined,
  disabled: false,
  required: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: null,
  labelAlignment: 'center',
  hideLabel: false
};