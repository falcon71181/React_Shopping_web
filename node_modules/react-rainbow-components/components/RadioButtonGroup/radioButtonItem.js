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

var _buttonItem = _interopRequireDefault(require("./styled/buttonItem"));

var _buttonItemLabel = _interopRequireDefault(require("./styled/buttonItemLabel"));

var _input = _interopRequireDefault(require("./styled/input"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RadioButtonItem = function (_Component) {
  (0, _inherits2["default"])(RadioButtonItem, _Component);

  var _super = _createSuper(RadioButtonItem);

  function RadioButtonItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioButtonItem);
    _this = _super.call(this, props);
    _this.radioId = (0, _utils.uniqueId)('radiobutton');
    return _this;
  }

  (0, _createClass2["default"])(RadioButtonItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          itemRef = _this$props.itemRef,
          label = _this$props.label,
          ariaDescribedby = _this$props.ariaDescribedby,
          onChange = _this$props.onChange,
          value = _this$props.value,
          disabled = _this$props.disabled,
          isChecked = _this$props.isChecked,
          name = _this$props.name,
          required = _this$props.required,
          variant = _this$props.variant,
          size = _this$props.size;
      return _react["default"].createElement(_buttonItem["default"], {
        "data-id": "radio-button-group_radio-container",
        variant: variant,
        size: size,
        isChecked: isChecked,
        disabled: disabled,
        ref: itemRef
      }, _react["default"].createElement(_input["default"], {
        type: "radio",
        required: required,
        id: this.radioId,
        name: name,
        value: value,
        checked: isChecked,
        "aria-describedby": ariaDescribedby,
        onChange: onChange,
        disabled: disabled
      }), _react["default"].createElement(_buttonItemLabel["default"], {
        disabled: disabled,
        isChecked: isChecked,
        variant: variant,
        htmlFor: this.radioId,
        size: size
      }, label));
    }
  }]);
  return RadioButtonItem;
}(_react.Component);

exports["default"] = RadioButtonItem;
RadioButtonItem.propTypes = {
  label: _propTypes["default"].node.isRequired,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  ariaDescribedby: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isChecked: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  required: _propTypes["default"].bool.isRequired,
  itemRef: _propTypes["default"].object.isRequired,
  variant: _propTypes["default"].oneOf(['default', 'inverse', 'brand']),
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large'])
};
RadioButtonItem.defaultProps = {
  value: undefined,
  onChange: function onChange() {},
  ariaDescribedby: undefined,
  disabled: false,
  isChecked: false,
  name: undefined,
  variant: 'default',
  size: 'medium'
};