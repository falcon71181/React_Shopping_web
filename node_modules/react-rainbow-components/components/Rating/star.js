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

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _utils = require("../../libs/utils");

var _starFill = _interopRequireDefault(require("./starFill"));

var _starBordered = _interopRequireDefault(require("./starBordered"));

var _styled = require("./styled");

var _starHalf = _interopRequireDefault(require("./starHalf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Star = function (_Component) {
  (0, _inherits2["default"])(Star, _Component);

  var _super = _createSuper(Star);

  function Star(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Star);
    _this = _super.call(this, props);
    _this.starId = (0, _utils.uniqueId)('star');
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Star, [{
    key: "getAssitiveText",
    value: function getAssitiveText() {
      var value = this.props.value;

      if (value === 1) {
        return "".concat(value, " Star");
      }

      return "".concat(value, " Stars");
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          readOnly = _this$props.readOnly,
          onChange = _this$props.onChange;
      if (readOnly) return null;
      return onChange(event);
    }
  }, {
    key: "renderStar",
    value: function renderStar() {
      var _this$props2 = this.props,
          isFilled = _this$props2.isFilled,
          isHalf = _this$props2.isHalf;

      if (isFilled) {
        return isHalf ? _react["default"].createElement(_starHalf["default"], null) : _react["default"].createElement(_starFill["default"], null);
      }

      return _react["default"].createElement(_starBordered["default"], null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          name = _this$props3.name,
          readOnly = _this$props3.readOnly,
          required = _this$props3.required,
          describedBy = _this$props3.describedBy;
      return _react["default"].createElement(_styled.StyledStarContainer, {
        readOnly: readOnly
      }, _react["default"].createElement(_styled.StyledStarInput, {
        type: "radio",
        id: this.starId,
        value: value,
        name: name,
        onChange: this.handleChange,
        disabled: readOnly,
        required: required,
        "aria-describedby": describedBy
      }), _react["default"].createElement("label", {
        htmlFor: this.starId
      }, this.renderStar(), _react["default"].createElement(_AssistiveText["default"], {
        text: this.getAssitiveText()
      })));
    }
  }]);
  return Star;
}(_react.Component);

exports["default"] = Star;
Star.propTypes = {
  value: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  isFilled: _propTypes["default"].bool.isRequired,
  isHalf: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  describedBy: _propTypes["default"].string
};
Star.defaultProps = {
  value: 1,
  onChange: function onChange() {},
  name: undefined,
  readOnly: false,
  isHalf: false,
  required: false,
  describedBy: undefined
};