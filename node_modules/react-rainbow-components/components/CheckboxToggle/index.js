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

var _labelContainer = _interopRequireDefault(require("./styled/labelContainer"));

var _label = _interopRequireDefault(require("./styled/label"));

var _hiddenElement = _interopRequireDefault(require("../Structural/hiddenElement"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CheckboxToggle = function (_Component) {
  (0, _inherits2["default"])(CheckboxToggle, _Component);

  var _super = _createSuper(CheckboxToggle);

  function CheckboxToggle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxToggle);
    _this = _super.call(this, props);
    _this.checkboxToggleRef = _react["default"].createRef();
    _this.inputIndentifier = props.name || (0, _utils.uniqueId)('checkbox-toggle');
    return _this;
  }

  (0, _createClass2["default"])(CheckboxToggle, [{
    key: "focus",
    value: function focus() {
      this.checkboxToggleRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.checkboxToggleRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.checkboxToggleRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          disabled = _this$props.disabled,
          label = _this$props.label,
          value = _this$props.value,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          id = _this$props.id,
          labelAlignment = _this$props.labelAlignment;
      return _react["default"].createElement(_labelContainer["default"], {
        labelAlignment: labelAlignment,
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_hiddenElement["default"], {
        as: "input",
        type: "checkbox",
        name: this.inputIndentifier,
        value: this.inputIndentifier,
        "aria-describedby": this.inputIndentifier,
        checked: value,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        disabled: disabled,
        ref: this.checkboxToggleRef
      }), _react["default"].createElement("span", {
        id: this.inputIndentifier,
        className: "rainbow-checkbox-toggle_faux-container",
        "aria-live": "assertive"
      }, _react["default"].createElement("span", {
        className: "rainbow-checkbox-toggle_faux"
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_label["default"], {
        labelAlignment: labelAlignment
      }, label)));
    }
  }]);
  return CheckboxToggle;
}(_react.Component);

CheckboxToggle.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  name: _propTypes["default"].string,
  value: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  labelAlignment: _propTypes["default"].oneOf(['left', 'right', 'top'])
};
CheckboxToggle.defaultProps = {
  label: null,
  disabled: false,
  value: false,
  name: undefined,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: undefined,
  id: undefined,
  labelAlignment: 'right'
};

var _default = (0, _withReduxForm["default"])(CheckboxToggle);

exports["default"] = _default;