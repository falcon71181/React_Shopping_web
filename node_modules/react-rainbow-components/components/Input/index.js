"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputBase = _interopRequireDefault(require("./inputBase"));

var _inputRadio = _interopRequireDefault(require("./inputRadio"));

var _inputCheckbox = _interopRequireDefault(require("./inputCheckbox"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Input = function (_Component) {
  (0, _inherits2["default"])(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Input);
    _this = _super.call(this, props);
    _this.inputRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Input, [{
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
      var type = this.props.type;

      if (type === 'radio') {
        return _react["default"].createElement(_inputRadio["default"], (0, _extends2["default"])({
          ref: this.inputRef
        }, this.props));
      }

      if (type === 'checkbox') {
        return _react["default"].createElement(_inputCheckbox["default"], (0, _extends2["default"])({
          ref: this.inputRef
        }, this.props));
      }

      return _react["default"].createElement(_inputBase["default"], (0, _extends2["default"])({
        ref: this.inputRef
      }, this.props));
    }
  }]);
  return Input;
}(_react.Component);

Input.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].number]),
  name: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color', 'radio', 'checkbox']),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
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
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  checked: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded', 'bare']),
  id: _propTypes["default"].string,
  autoComplete: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  valueAlignment: _propTypes["default"].oneOf(['left', 'center', 'right'])
};
Input.defaultProps = {
  value: undefined,
  type: 'text',
  name: undefined,
  placeholder: null,
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
  error: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  checked: undefined,
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  autoComplete: 'on',
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  size: 'medium',
  valueAlignment: undefined
};

var _default = (0, _withReduxForm["default"])(Input);

exports["default"] = _default;