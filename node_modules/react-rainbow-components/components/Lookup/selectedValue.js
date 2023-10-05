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

var _clipboardCopy = _interopRequireDefault(require("clipboard-copy"));

var _formatValue3 = _interopRequireDefault(require("./helpers/formatValue"));

var _index = _interopRequireDefault(require("../RenderIf/index"));

var _input = _interopRequireDefault(require("./styled/input"));

var _selectedValueIcon = _interopRequireDefault(require("./styled/selectedValueIcon"));

var _selectedValueContainer = _interopRequireDefault(require("./styled/selectedValueContainer"));

var _styled = require("../MultiSelect/styled");

var _chip = _interopRequireDefault(require("./styled/chip"));

var _selectedIconContainer = _interopRequireDefault(require("./styled/selectedIconContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SelectedValue = function (_Component) {
  (0, _inherits2["default"])(SelectedValue, _Component);

  var _super = _createSuper(SelectedValue);

  function SelectedValue(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectedValue);
    _this = _super.call(this, props);
    _this.inputRef = _react["default"].createRef();
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(SelectedValue, [{
    key: "handleFocus",
    value: function handleFocus() {
      var value = this.props.value;

      var _formatValue = (0, _formatValue3["default"])(value),
          label = _formatValue.label;

      (0, _clipboardCopy["default"])(label);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) {
        this.inputRef.current.focus();
      }

      onClick(event);
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
      var _this$props2 = this.props,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          onClearValue = _this$props2.onClearValue,
          id = _this$props2.id,
          name = _this$props2.name,
          tabIndex = _this$props2.tabIndex,
          required = _this$props2.required,
          onClick = _this$props2.onClick,
          errorMessageId = _this$props2.errorMessageId,
          error = _this$props2.error,
          borderRadius = _this$props2.borderRadius;

      var _formatValue2 = (0, _formatValue3["default"])(value),
          label = _formatValue2.label,
          icon = _formatValue2.icon;

      return _react["default"].createElement(_selectedValueContainer["default"], {
        readOnly: readOnly
      }, _react["default"].createElement(_index["default"], {
        isTrue: readOnly || disabled
      }, _react["default"].createElement(_index["default"], {
        isTrue: icon
      }, _react["default"].createElement(_selectedValueIcon["default"], {
        readOnly: readOnly
      }, icon), _react["default"].createElement(_input["default"], {
        id: id,
        name: name,
        type: "text",
        value: label,
        tabIndex: tabIndex,
        onFocus: this.handleFocus,
        onClick: onClick,
        disabled: disabled,
        readOnly: readOnly,
        "aria-describedby": errorMessageId,
        required: required,
        ref: this.inputRef,
        iconPosition: "left",
        icon: icon,
        error: error,
        borderRadius: borderRadius
      }))), _react["default"].createElement(_index["default"], {
        isTrue: !(readOnly || disabled)
      }, _react["default"].createElement(_styled.StyledCombobox, {
        error: error,
        disabled: disabled,
        borderRadius: borderRadius,
        onClick: this.handleClick
      }, _react["default"].createElement(_styled.StyledInput, {
        id: id,
        role: "textbox",
        "aria-autocomplete": "none",
        tabIndex: tabIndex,
        disabled: disabled,
        ref: this.inputRef,
        onFocus: this.handleFocus,
        value: label,
        type: "text",
        readOnly: true
      }), _react["default"].createElement(_chip["default"], {
        label: _react["default"].createElement("span", null, _react["default"].createElement(_index["default"], {
          isTrue: icon
        }, _react["default"].createElement(_selectedIconContainer["default"], null, icon)), label),
        onDelete: onClearValue,
        borderRadius: borderRadius
      }))));
    }
  }]);
  return SelectedValue;
}(_react.Component);

exports["default"] = SelectedValue;
SelectedValue.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    label: _propTypes["default"].string,
    description: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
    icon: _propTypes["default"].node
  }), _propTypes["default"].string]),
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onClearValue: _propTypes["default"].func,
  errorMessageId: _propTypes["default"].string,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
SelectedValue.defaultProps = {
  value: undefined,
  name: undefined,
  id: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onClearValue: undefined,
  errorMessageId: undefined,
  error: undefined,
  borderRadius: 'rounded'
};