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

var _ratingItems = _interopRequireDefault(require("./ratingItems"));

var _utils = require("../../libs/utils");

var _helpText = _interopRequireDefault(require("../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _styled = require("./styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Rating = function (_Component) {
  (0, _inherits2["default"])(Rating, _Component);

  var _super = _createSuper(Rating);

  function Rating(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Rating);
    _this = _super.call(this, props);
    _this.state = {
      value: props.value
    };
    _this.starGroupNameId = (0, _utils.uniqueId)('starGroup');
    _this.handleOnHover = _this.handleOnHover.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleOnLeave = _this.handleOnLeave.bind((0, _assertThisInitialized2["default"])(_this));
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    return _this;
  }

  (0, _createClass2["default"])(Rating, [{
    key: "getName",
    value: function getName() {
      var name = this.props.name;

      if (name) {
        return name;
      }

      return this.starGroupNameId;
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
    key: "handleOnHover",
    value: function handleOnHover(event) {
      var readOnly = this.props.readOnly;

      if (event.target.value && !readOnly) {
        return this.setState({
          value: event.target.value
        });
      }

      return null;
    }
  }, {
    key: "handleOnLeave",
    value: function handleOnLeave() {
      var value = this.props.value;
      return this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          onChange = _this$props.onChange,
          label = _this$props.label,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          bottomHelpText = _this$props.bottomHelpText,
          error = _this$props.error;
      var value = this.state.value;
      return _react["default"].createElement(_styled.StyledFieldset, {
        onMouseOver: this.handleOnHover,
        onMouseLeave: this.handleOnLeave,
        className: className,
        style: style
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: label
      }, _react["default"].createElement(_styled.StyledLabel, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        forwardedAs: "legend",
        required: required
      })), _react["default"].createElement(_styled.StyledItemsContainer, {
        labelAlignment: labelAlignment
      }, _react["default"].createElement(_ratingItems["default"], {
        onChange: onChange,
        value: value,
        name: this.getName(),
        readOnly: readOnly,
        required: required,
        describedBy: this.getErrorMessageId()
      })), _react["default"].createElement(_RenderIf["default"], {
        isTrue: bottomHelpText
      }, _react["default"].createElement(_helpText["default"], {
        alignSelf: "center"
      }, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        alignSelf: "center",
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return Rating;
}(_react.Component);

exports["default"] = Rating;
Rating.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  readOnly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Rating.defaultProps = {
  value: 0,
  onChange: function onChange() {},
  name: undefined,
  label: null,
  labelAlignment: 'center',
  hideLabel: false,
  className: undefined,
  style: undefined,
  readOnly: false,
  required: false,
  bottomHelpText: undefined,
  error: undefined
};