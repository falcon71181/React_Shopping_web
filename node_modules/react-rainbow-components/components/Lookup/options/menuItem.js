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

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _item = _interopRequireDefault(require("./styled/item"));

var _li = _interopRequireDefault(require("./styled/li"));

var _icon = _interopRequireDefault(require("./styled/icon"));

var _content = _interopRequireDefault(require("./styled/content"));

var _description = _interopRequireDefault(require("./styled/description"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MenuItem = function (_Component) {
  (0, _inherits2["default"])(MenuItem, _Component);

  var _super = _createSuper(MenuItem);

  function MenuItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);
    _this = _super.call(this, props);
    _this.itemRef = _react["default"].createRef();
    _this.handleHover = _this.handleHover.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "handleHover",
    value: function handleHover() {
      var _this$props = this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;
      onHover(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          description = _this$props2.description,
          icon = _this$props2.icon,
          onClick = _this$props2.onClick,
          isActive = _this$props2.isActive,
          id = _this$props2.id;
      return _react["default"].createElement(_li["default"], {
        role: "presentation",
        onMouseDown: onClick,
        onMouseEnter: this.handleHover
      }, _react["default"].createElement(_item["default"], {
        "aria-selected": isActive,
        isActive: isActive,
        id: id,
        tabIndex: -1,
        role: "option",
        ref: this.itemRef
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: icon
      }, _react["default"].createElement(_icon["default"], null, icon)), _react["default"].createElement(_content["default"], null, label, _react["default"].createElement(_RenderIf["default"], {
        isTrue: description
      }, _react["default"].createElement(_description["default"], null, description)))));
    }
  }]);
  return MenuItem;
}(_react.Component);

exports["default"] = MenuItem;
MenuItem.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  isActive: _propTypes["default"].bool,
  onHover: _propTypes["default"].func,
  index: _propTypes["default"].number,
  id: _propTypes["default"].string
};
MenuItem.defaultProps = {
  label: undefined,
  description: undefined,
  icon: undefined,
  onClick: function onClick() {},
  isActive: false,
  onHover: function onHover() {},
  index: undefined,
  id: undefined
};