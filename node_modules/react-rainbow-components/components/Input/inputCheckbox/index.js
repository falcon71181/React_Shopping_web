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

var _utils = require("../../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _container = _interopRequireDefault(require("../styled/container"));

var _helpText = _interopRequireDefault(require("../styled/helpText"));

var _errorText = _interopRequireDefault(require("../styled/errorText"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InputCheckbox = function (_Component) {
  (0, _inherits2["default"])(InputCheckbox, _Component);

  var _super = _createSuper(InputCheckbox);

  function InputCheckbox(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputCheckbox);
    _this = _super.call(this, props);
    _this.inlineTextLabelId = (0, _utils.uniqueId)('inline-text-label');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.inputRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(InputCheckbox, [{
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
          onChange = _this$props.onChange,
          label = _this$props.label,
          error = _this$props.error,
          disabled = _this$props.disabled,
          tabIndex = _this$props.tabIndex,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          bottomHelpText = _this$props.bottomHelpText,
          id = _this$props.id,
          name = _this$props.name,
          checked = _this$props.checked,
          hideLabel = _this$props.hideLabel;
      var errorMessageId = this.getErrorMessageId();
      return _react["default"].createElement(_container["default"], {
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_checkbox["default"], {
        name: name,
        value: value,
        onChange: onChange,
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onKeyDown: onKeyDown,
        disabled: disabled,
        checked: checked,
        ariaLabelledBy: this.getInlineTextLabelId(),
        ariaDescribedBy: errorMessageId,
        ref: this.inputRef,
        error: error,
        label: label,
        hideLabel: hideLabel
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: bottomHelpText
      }, _react["default"].createElement(_helpText["default"], {
        alignSelf: "flex-start"
      }, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        alignSelf: "flex-start",
        id: errorMessageId
      }, error)));
    }
  }]);
  return InputCheckbox;
}(_react.Component);

exports["default"] = InputCheckbox;
InputCheckbox.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  name: _propTypes["default"].string,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  checked: _propTypes["default"].bool,
  hideLabel: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string
};
InputCheckbox.defaultProps = {
  value: undefined,
  label: undefined,
  name: undefined,
  bottomHelpText: null,
  error: null,
  disabled: false,
  onChange: function onChange() {},
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  checked: undefined,
  hideLabel: false,
  className: undefined,
  style: undefined,
  id: undefined
};