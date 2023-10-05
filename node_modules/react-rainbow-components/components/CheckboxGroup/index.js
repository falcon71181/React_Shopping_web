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

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _utils = require("../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _checkboxList = _interopRequireDefault(require("./checkboxList"));

var _fieldset = _interopRequireDefault(require("./styled/fieldset"));

var _label = _interopRequireDefault(require("./styled/label"));

var _contentContainer = _interopRequireDefault(require("./styled/contentContainer"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CheckboxGroup = function (_Component) {
  (0, _inherits2["default"])(CheckboxGroup, _Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxGroup);
    _this = _super.call(this, props);
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.groupNameId = props.name || (0, _utils.uniqueId)('options');
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(CheckboxGroup, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.props.value;

      if (typeof value === 'string') {
        return [];
      }

      return value;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event) {
      var _event$target = event.target,
          value = _event$target.value,
          checked = _event$target.checked;
      var _this$props = this.props,
          values = _this$props.value,
          onChange = _this$props.onChange;

      if (checked && Array.isArray(values)) {
        return onChange(values.concat([value]));
      }

      if (checked && !Array.isArray(values)) {
        return onChange([value]);
      }

      return onChange(values.filter(function (valueId) {
        return valueId !== value;
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          options = _this$props2.options,
          required = _this$props2.required,
          label = _this$props2.label,
          labelAlignment = _this$props2.labelAlignment,
          hideLabel = _this$props2.hideLabel,
          error = _this$props2.error,
          style = _this$props2.style,
          className = _this$props2.className,
          orientation = _this$props2.orientation;
      return _react["default"].createElement(_fieldset["default"], {
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
        forwardedAs: "legend"
      })), _react["default"].createElement(_contentContainer["default"], {
        orientation: orientation
      }, _react["default"].createElement(_checkboxList["default"], {
        values: this.getValue(),
        options: options,
        onChange: this.handleOnChange,
        name: this.groupNameId,
        describedBy: this.getErrorMessageId(),
        error: error
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    value: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    description: _propTypes["default"].string
  })),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string]),
  required: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  orientation: _propTypes["default"].oneOf(['vertical', 'horizontal'])
};
CheckboxGroup.defaultProps = {
  options: [],
  value: [],
  label: null,
  labelAlignment: 'left',
  hideLabel: false,
  name: undefined,
  onChange: function onChange() {},
  required: false,
  error: null,
  className: undefined,
  style: undefined,
  id: undefined,
  orientation: 'vertical'
};

var _default = (0, _withReduxForm["default"])(CheckboxGroup);

exports["default"] = _default;