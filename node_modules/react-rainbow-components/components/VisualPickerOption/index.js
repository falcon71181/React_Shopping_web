"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VisualPickerOption;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../VisualPicker/context");

var _utils = require("../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _checkmarkIcon = _interopRequireDefault(require("./styled/checkmarkIcon"));

var _container = _interopRequireDefault(require("./styled/container"));

var _input = _interopRequireDefault(require("./styled/input"));

var _label = _interopRequireDefault(require("./styled/label"));

var _content = _interopRequireDefault(require("./styled/content"));

var _checkedTriangle = _interopRequireDefault(require("./styled/checkedTriangle"));

var _footer = _interopRequireDefault(require("./styled/footer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PickerOption = function (_Component) {
  (0, _inherits2["default"])(PickerOption, _Component);

  var _super = _createSuper(PickerOption);

  function PickerOption(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PickerOption);
    _this = _super.call(this, props);
    _this.inputId = (0, _utils.uniqueId)('radio');
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PickerOption, [{
    key: "getType",
    value: function getType() {
      var multiple = this.props.multiple;

      if (multiple) {
        return 'checkbox';
      }

      return 'radio';
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          name = _this$props.name,
          privateOnChange = _this$props.privateOnChange;
      privateOnChange(name, event.target.checked);
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      var _this$props2 = this.props,
          multiple = _this$props2.multiple,
          name = _this$props2.name,
          value = _this$props2.value;

      if (multiple) {
        return Array.isArray(value) && value.includes(name);
      }

      return typeof value === 'string' && name === value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          children = _this$props3.children,
          footer = _this$props3.footer,
          style = _this$props3.style,
          className = _this$props3.className,
          size = _this$props3.size;
      var _this$props4 = this.props,
          groupName = _this$props4.groupName,
          ariaDescribedby = _this$props4.ariaDescribedby;
      return _react["default"].createElement(_container["default"], {
        "data-id": "visual-picker_option-container",
        className: className,
        style: style
      }, _react["default"].createElement(_input["default"], {
        as: "input",
        type: this.getType(),
        id: this.inputId,
        name: groupName,
        checked: this.isChecked(),
        "aria-describedby": ariaDescribedby,
        onChange: this.handleChange,
        disabled: disabled
      }), _react["default"].createElement(_label["default"], {
        "data-id": "visual-picker_option-label",
        htmlFor: this.inputId
      }, _react["default"].createElement(_content["default"], {
        "data-id": "visual-picker_option",
        size: size
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: this.isChecked()
      }, _react["default"].createElement(_checkedTriangle["default"], null), _react["default"].createElement(_checkmarkIcon["default"], null)), children), _react["default"].createElement(_RenderIf["default"], {
        isTrue: footer
      }, _react["default"].createElement(_footer["default"], null, footer))));
    }
  }]);
  return PickerOption;
}(_react.Component);

function VisualPickerOption(props) {
  return _react["default"].createElement(_context.Consumer, null, function (context) {
    return _react["default"].createElement(PickerOption, (0, _extends2["default"])({}, props, context));
  });
}

VisualPickerOption.propTypes = {
  name: _propTypes["default"].string,
  footer: _propTypes["default"].node,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
};
VisualPickerOption.defaultProps = {
  name: undefined,
  footer: undefined,
  disabled: false,
  className: undefined,
  style: undefined,
  children: []
};