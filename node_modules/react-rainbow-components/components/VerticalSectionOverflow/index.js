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

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _context = require("./context");

var _getMaxHeight = _interopRequireDefault(require("./getMaxHeight"));

var _description = _interopRequireDefault(require("./description"));

var _rightArrow = _interopRequireDefault(require("./rightArrow"));

var _container = _interopRequireDefault(require("./styled/container"));

var _button = _interopRequireDefault(require("./styled/button"));

var _actionContainer = _interopRequireDefault(require("./styled/actionContainer"));

var _actionLabel = _interopRequireDefault(require("./styled/actionLabel"));

var _overflow = _interopRequireDefault(require("./styled/overflow"));

var _ul = _interopRequireDefault(require("./styled/ul"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var VerticalSectionOverflow = function (_Component) {
  (0, _inherits2["default"])(VerticalSectionOverflow, _Component);

  var _super = _createSuper(VerticalSectionOverflow);

  function VerticalSectionOverflow(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, VerticalSectionOverflow);
    _this = _super.call(this, props);
    _this.searchResultsId = (0, _utils.uniqueId)('search-results');
    _this.state = {
      isExpanded: props.expanded
    };
    _this.toggleOverflow = _this.toggleOverflow.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VerticalSectionOverflow, [{
    key: "toggleOverflow",
    value: function toggleOverflow(event) {
      var isExpanded = this.state.isExpanded;
      var onToggleSection = this.props.onToggleSection;

      if (typeof onToggleSection === 'function') {
        return onToggleSection(event);
      }

      return this.setState({
        isExpanded: !isExpanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          description = _this$props.description,
          style = _this$props.style,
          assistiveText = _this$props.assistiveText,
          children = _this$props.children,
          className = _this$props.className;
      var isExpanded = this.state.isExpanded;
      var sectionMaxHeight = {
        maxHeight: (0, _getMaxHeight["default"])(children, isExpanded)
      };
      return _react["default"].createElement(_container["default"], {
        "data-id": "vertical-overflow-container",
        className: className,
        style: style,
        isExpanded: isExpanded
      }, _react["default"].createElement(_button["default"], {
        "data-id": "vertical-overflow-button",
        "aria-controls": this.searchResultsId,
        "aria-expanded": isExpanded,
        onClick: this.toggleOverflow,
        isExpanded: isExpanded,
        description: description
      }, _react["default"].createElement(_actionContainer["default"], {
        as: "div"
      }, _react["default"].createElement(_actionLabel["default"], null, label), _react["default"].createElement(_description["default"], {
        isExpanded: isExpanded,
        description: description
      }), _react["default"].createElement(_AssistiveText["default"], {
        text: assistiveText
      })), _react["default"].createElement(_rightArrow["default"], {
        isExpanded: isExpanded
      })), _react["default"].createElement(_overflow["default"], {
        "data-id": "vertical-overflow",
        id: this.searchResultsId,
        style: sectionMaxHeight,
        isExpanded: isExpanded
      }, _react["default"].createElement(_context.Provider, {
        value: isExpanded
      }, _react["default"].createElement(_ul["default"], null, children))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var expanded = nextProps.expanded,
          onToggleSection = nextProps.onToggleSection;

      if (expanded !== state.isExpanded && typeof onToggleSection === 'function') {
        return {
          isExpanded: expanded
        };
      }

      return null;
    }
  }]);
  return VerticalSectionOverflow;
}(_react.Component);

exports["default"] = VerticalSectionOverflow;
VerticalSectionOverflow.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  expanded: _propTypes["default"].bool,
  assistiveText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onToggleSection: _propTypes["default"].func,
  children: _propTypes["default"].node
};
VerticalSectionOverflow.defaultProps = {
  label: '',
  description: '',
  expanded: false,
  className: undefined,
  style: undefined,
  assistiveText: undefined,
  children: null,
  onToggleSection: undefined
};