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

var _radioItems = _interopRequireDefault(require("./radioItems"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _utils = require("../../libs/utils");

var _fieldset = _interopRequireDefault(require("./styled/fieldset"));

var _label = _interopRequireDefault(require("./styled/label"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _contentContainer = _interopRequireDefault(require("./styled/contentContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RadioGroup = function (_Component) {
  (0, _inherits2["default"])(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioGroup);
    _this = _super.call(this, props);
    _this.errorId = (0, _utils.uniqueId)('error-message');
    _this.groupNameId = props.name || (0, _utils.uniqueId)('options');
    return _this;
  }

  (0, _createClass2["default"])(RadioGroup, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorId;
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          label = _this$props.label,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          required = _this$props.required,
          error = _this$props.error,
          onChange = _this$props.onChange,
          options = _this$props.options,
          value = _this$props.value,
          id = _this$props.id,
          orientation = _this$props.orientation;
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
      }, _react["default"].createElement(_radioItems["default"], {
        value: value,
        onChange: onChange,
        options: options,
        name: this.groupNameId,
        ariaDescribedby: this.getErrorMessageId(),
        error: error
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return RadioGroup;
}(_react.Component);

RadioGroup.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    value: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    description: _propTypes["default"].string
  })),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  orientation: _propTypes["default"].oneOf(['vertical', 'horizontal'])
};
RadioGroup.defaultProps = {
  label: null,
  labelAlignment: 'left',
  hideLabel: false,
  name: null,
  className: undefined,
  style: undefined,
  value: undefined,
  onChange: function onChange() {},
  required: false,
  options: [],
  error: null,
  id: undefined,
  orientation: 'vertical'
};

var _default = (0, _withReduxForm["default"])(RadioGroup);

exports["default"] = _default;