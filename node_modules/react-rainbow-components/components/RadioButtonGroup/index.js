"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _buttonItems = _interopRequireDefault(require("./buttonItems"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _utils = require("../../libs/utils");

var _marker = _interopRequireDefault(require("./marker"));

var _errorText = _interopRequireDefault(require("./styled/errorText"));

var _isOptionChecked = _interopRequireDefault(require("./helpers/isOptionChecked"));

var _container = _interopRequireDefault(require("./styled/container"));

var _label = _interopRequireDefault(require("./styled/label"));

var _buttonItemsContainer = _interopRequireDefault(require("./styled/buttonItemsContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RadioButtonGroup = function (_Component) {
  (0, _inherits2["default"])(RadioButtonGroup, _Component);

  var _super = _createSuper(RadioButtonGroup);

  function RadioButtonGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioButtonGroup);
    _this = _super.call(this, props);
    _this.errorId = (0, _utils.uniqueId)('error-message');
    _this.groupNameId = props.name || (0, _utils.uniqueId)('options');
    _this.optionsRefs = _this.generateRefsForOptions();
    _this.state = {
      options: _this.addRefsToOptions(props.options),
      markerLeft: 0,
      markerWidth: 0
    };
    return _this;
  }

  (0, _createClass2["default"])(RadioButtonGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.updateMarker();
      }, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          options = _this$props.options,
          value = _this$props.value;

      if (prevProps.options !== options) {
        this.updateRefs();
      }

      if (prevProps.value !== value) {
        this.updateMarker();
      }
    }
  }, {
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorId;
      }

      return undefined;
    }
  }, {
    key: "getCheckedOptionRef",
    value: function getCheckedOptionRef() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          options = _this$props2.options;
      var currentOptionIndex = options.findIndex(function (option) {
        return (0, _isOptionChecked["default"])(option, value);
      });
      return currentOptionIndex !== -1 ? this.optionsRefs[currentOptionIndex] : null;
    }
  }, {
    key: "generateRefsForOptions",
    value: function generateRefsForOptions() {
      var options = this.props.options;
      return options.map(function () {
        return _react["default"].createRef();
      });
    }
  }, {
    key: "addRefsToOptions",
    value: function addRefsToOptions(options) {
      var _this3 = this;

      return options.map(function (option, index) {
        return _objectSpread(_objectSpread({}, option), {}, {
          optionRef: _this3.optionsRefs[index]
        });
      });
    }
  }, {
    key: "isMarkerActive",
    value: function isMarkerActive() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          options = _this$props3.options;
      return options.some(function (option) {
        return !option.disabled && option.value === value;
      });
    }
  }, {
    key: "updateMarker",
    value: function updateMarker() {
      var activeOptionRef = this.getCheckedOptionRef();

      if (activeOptionRef && activeOptionRef.current) {
        this.setState({
          markerLeft: activeOptionRef.current.offsetLeft,
          markerWidth: Math.max(activeOptionRef.current.offsetWidth, activeOptionRef.current.clientWidth)
        });
      }
    }
  }, {
    key: "updateRefs",
    value: function updateRefs() {
      var _this4 = this;

      var options = this.props.options;
      this.optionsRefs = this.generateRefsForOptions();
      this.setState({
        options: this.addRefsToOptions(options)
      });
      setTimeout(function () {
        _this4.updateMarker();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          style = _this$props4.style,
          className = _this$props4.className,
          label = _this$props4.label,
          labelAlignment = _this$props4.labelAlignment,
          hideLabel = _this$props4.hideLabel,
          required = _this$props4.required,
          error = _this$props4.error,
          value = _this$props4.value,
          id = _this$props4.id,
          onChange = _this$props4.onChange,
          variant = _this$props4.variant,
          size = _this$props4.size,
          borderRadius = _this$props4.borderRadius;
      var _this$state = this.state,
          options = _this$state.options,
          markerLeft = _this$state.markerLeft,
          markerWidth = _this$state.markerWidth;
      var markerStyle = {
        left: markerLeft,
        width: markerWidth
      };
      return _react["default"].createElement(_container["default"], {
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_label["default"], {
        label: label,
        variant: variant,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        forwardedAs: "legend"
      })), _react["default"].createElement(_buttonItemsContainer["default"], {
        variant: variant,
        size: size,
        borderRadius: borderRadius
      }, _react["default"].createElement(_marker["default"], {
        variant: variant,
        isVisible: this.isMarkerActive(),
        style: markerStyle,
        size: size,
        borderRadius: borderRadius
      }), _react["default"].createElement(_buttonItems["default"], {
        value: value,
        onChange: onChange,
        options: options,
        name: this.groupNameId,
        required: required,
        ariaDescribedby: this.getErrorMessageId(),
        variant: variant,
        size: size,
        borderRadius: borderRadius
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['default', 'inverse', 'brand']),
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    value: _propTypes["default"].string,
    disabled: _propTypes["default"].bool
  })),
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
RadioButtonGroup.defaultProps = {
  label: null,
  labelAlignment: 'center',
  hideLabel: false,
  name: null,
  className: undefined,
  style: undefined,
  value: undefined,
  variant: 'default',
  onChange: function onChange() {},
  required: false,
  options: [],
  size: 'medium',
  borderRadius: 'rounded',
  error: null,
  id: undefined
};

var _default = (0, _withReduxForm["default"])(RadioButtonGroup);

exports["default"] = _default;