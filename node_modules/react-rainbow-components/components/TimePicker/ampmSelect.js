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

var _utils = require("../../libs/utils");

var _isChecked = _interopRequireDefault(require("./helpers/isChecked"));

var _inputHidden = _interopRequireDefault(require("./styled/inputHidden"));

var _optionLabel = _interopRequireDefault(require("./styled/optionLabel"));

var _selectValue = _interopRequireDefault(require("./styled/selectValue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function handleAmPmBlur(event) {
  event.stopPropagation();
}

var AmPmSelect = function (_PureComponent) {
  (0, _inherits2["default"])(AmPmSelect, _PureComponent);

  var _super = _createSuper(AmPmSelect);

  function AmPmSelect(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AmPmSelect);
    _this = _super.call(this, props);
    _this.fieldsetRef = _react["default"].createRef();
    _this.inputAmId = (0, _utils.uniqueId)('am');
    _this.inputPmId = (0, _utils.uniqueId)('pm');
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AmPmSelect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isFocused = this.props.isFocused;
      if (isFocused) this.focus();
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value;

      if (!value) {
        onChange(defaultValue || 'AM');
      }

      onFocus();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event) {
      var onChange = this.props.onChange;
      var value = event.target.value;
      onChange(value);
    }
  }, {
    key: "isInputChecked",
    value: function isInputChecked(inputValue) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          defaultValue = _this$props2.defaultValue;
      return (0, _isChecked["default"])({
        inputValue: inputValue,
        value: value,
        defaultValue: defaultValue
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      this.fieldsetRef.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isFocused = _this$props3.isFocused,
          tabIndex = _this$props3.tabIndex,
          onFocus = _this$props3.onFocus,
          value = _this$props3.value,
          onClick = _this$props3.onClick;

      if (isFocused) {
        return _react["default"].createElement(_selectValue["default"], {
          as: "fieldset",
          "data-id": "fieldset-element",
          role: "presentation",
          tabIndex: tabIndex,
          onFocus: onFocus,
          ref: this.fieldsetRef,
          isFocused: isFocused
        }, _react["default"].createElement(_inputHidden["default"], {
          as: "input",
          type: "radio",
          id: this.inputAmId,
          name: "ampmOptions",
          value: "AM",
          checked: this.isInputChecked('AM'),
          onChange: this.handleOnChange,
          onClick: onClick,
          onBlur: handleAmPmBlur
        }), _react["default"].createElement(_optionLabel["default"], {
          htmlFor: this.inputAmId
        }, "am"), _react["default"].createElement(_inputHidden["default"], {
          as: "input",
          type: "radio",
          id: this.inputPmId,
          name: "ampmOptions",
          value: "PM",
          checked: this.isInputChecked('PM'),
          onChange: this.handleOnChange,
          onClick: onClick,
          onBlur: handleAmPmBlur
        }), _react["default"].createElement(_optionLabel["default"], {
          htmlFor: this.inputPmId
        }, "pm"));
      }

      return _react["default"].createElement(_selectValue["default"], {
        "aria-label": "am-pm selector",
        tabIndex: tabIndex,
        onFocus: this.handleFocus,
        placeholder: "--",
        defaultValue: value,
        ref: this.fieldsetRef
      });
    }
  }]);
  return AmPmSelect;
}(_react.PureComponent);

exports["default"] = AmPmSelect;
AmPmSelect.propTypes = {
  value: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  tabIndex: _propTypes["default"].string,
  isFocused: _propTypes["default"].bool
};
AmPmSelect.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  onClick: function onClick() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  tabIndex: undefined,
  isFocused: false
};