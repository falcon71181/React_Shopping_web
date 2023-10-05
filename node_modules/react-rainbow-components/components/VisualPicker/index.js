"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _label = _interopRequireDefault(require("../Input/label"));

var _utils = require("../../libs/utils");

var _context = require("./context");

var _container = _interopRequireDefault(require("./styled/container"));

var _optionsContainer = _interopRequireDefault(require("./styled/optionsContainer"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var VisualPicker = function (_Component) {
  (0, _inherits2["default"])(VisualPicker, _Component);

  var _super = _createSuper(VisualPicker);

  function VisualPicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, VisualPicker);
    _this = _super.call(this, props);
    _this.errorId = (0, _utils.uniqueId)('error-message');
    _this.groupNameId = props.name || (0, _utils.uniqueId)('visual-picker');
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VisualPicker, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorId;
      }

      return undefined;
    }
  }, {
    key: "handleChange",
    value: function handleChange(optionName, isChecked) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          multiple = _this$props.multiple,
          value = _this$props.value;
      var currentValue = optionName;

      if (multiple) {
        if (!Array.isArray(value)) {
          currentValue = isChecked ? [optionName] : [];
        } else {
          currentValue = isChecked ? [].concat((0, _toConsumableArray2["default"])(value), [optionName]) : value.filter(function (item) {
            return item !== optionName;
          });
        }
      }

      onChange(currentValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          label = _this$props2.label,
          labelAlignment = _this$props2.labelAlignment,
          hideLabel = _this$props2.hideLabel,
          required = _this$props2.required,
          error = _this$props2.error,
          id = _this$props2.id,
          children = _this$props2.children,
          value = _this$props2.value,
          multiple = _this$props2.multiple,
          className = _this$props2.className,
          size = _this$props2.size;
      var context = {
        ariaDescribedby: this.getErrorMessageId(),
        groupName: this.groupNameId,
        privateOnChange: this.handleChange,
        value: value,
        multiple: multiple,
        size: size
      };
      return _react["default"].createElement(_container["default"], {
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        as: "legend"
      })), _react["default"].createElement(_optionsContainer["default"], null, _react["default"].createElement(_context.Provider, {
        value: context
      }, children)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return VisualPicker;
}(_react.Component);

VisualPicker.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  id: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  multiple: _propTypes["default"].bool
};
VisualPicker.defaultProps = {
  name: null,
  value: undefined,
  id: undefined,
  onChange: function onChange() {},
  required: false,
  label: null,
  labelAlignment: 'center',
  hideLabel: false,
  error: null,
  className: undefined,
  style: undefined,
  size: 'medium',
  children: [],
  multiple: false
};

var _default = (0, _withReduxForm["default"])(VisualPicker);

exports["default"] = _default;