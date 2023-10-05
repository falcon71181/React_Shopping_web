"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _constants = require("../../libs/constants");

var _utils = require("./utils");

var _rightThinChevron = _interopRequireDefault(require("./rightThinChevron"));

var _leftThinChevron = _interopRequireDefault(require("./leftThinChevron"));

var _ResizeSensor = _interopRequireDefault(require("../../libs/ResizeSensor"));

var _debounce = _interopRequireDefault(require("../../libs/debounce"));

var _container = _interopRequireDefault(require("./styled/container"));

var _observer = _interopRequireDefault(require("./styled/observer"));

var _tabset = _interopRequireDefault(require("./styled/tabset"));

var _innerContainer = _interopRequireDefault(require("./styled/innerContainer"));

var _buttonGroup = _interopRequireDefault(require("./styled/buttonGroup"));

var _buttonIcon = _interopRequireDefault(require("./styled/buttonIcon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RIGHT_SIDE = 1;
var LEFT_SIDE = -1;

var Tabset = function (_Component) {
  (0, _inherits2["default"])(Tabset, _Component);

  var _super = _createSuper(Tabset);

  function Tabset(props) {
    var _this$keyHandlerMap;

    var _this;

    (0, _classCallCheck2["default"])(this, Tabset);
    _this = _super.call(this, props);
    _this.state = {
      key: Date.now(),
      areButtonsVisible: false
    };
    _this.isFirstTime = true;
    _this.tabsetRef = _react["default"].createRef();
    _this.resizeTarget = _react["default"].createRef();
    _this.registerTab = _this.registerTab.bind((0, _assertThisInitialized2["default"])(_this));
    _this.unRegisterTab = _this.unRegisterTab.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateTab = _this.updateTab.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPressed = _this.handleKeyPressed.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLeftButtonClick = _this.handleLeftButtonClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleRightButtonClick = _this.handleRightButtonClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateButtonsVisibility = _this.updateButtonsVisibility.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelect = _this.handleSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.RIGHT_KEY, function () {
      return _this.selectTab(RIGHT_SIDE);
    }), (0, _defineProperty2["default"])(_this$keyHandlerMap, _constants.LEFT_KEY, function () {
      return _this.selectTab(LEFT_SIDE);
    }), _this$keyHandlerMap);
    _this.tabsetChildren = [];
    return _this;
  }

  (0, _createClass2["default"])(Tabset, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.widthObserver = new _ResizeSensor["default"](this.resizeTarget.current, (0, _debounce["default"])(this.updateButtonsVisibility, 100));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProp) {
      var children = this.props.children;
      var isFirstTime = this.isFirstTime;
      var areAllChildrenRegistered = children.length === this.tabsetChildren.length;

      if ((0, _utils.isNotSameChildren)(children, prevProp.children)) {
        this.updateButtonsVisibility();
      }

      if (areAllChildrenRegistered && isFirstTime) {
        this.updateButtonsVisibility();
        this.isFirstTime = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.widthObserver.detach(this.resizeTarget.current);
    }
  }, {
    key: "setAsSelectedTab",
    value: function setAsSelectedTab(tabIndex) {
      this.tabsetChildren[tabIndex].ref.click();
      this.tabsetChildren[tabIndex].ref.focus();
    }
  }, {
    key: "updateButtonsVisibility",
    value: function updateButtonsVisibility() {
      var _this$state = this.state,
          areButtonsVisible = _this$state.areButtonsVisible,
          variant = _this$state.variant;
      var tabset = this.tabsetRef.current;
      var resizeWidth = this.resizeTarget.current.offsetWidth;
      var scrollWidth = tabset.scrollWidth,
          scrollLeft = tabset.scrollLeft,
          tabsetWidth = tabset.offsetWidth;
      var childrenTotalWidth = (0, _utils.getChildrenTotalWidth)(this.tabsetChildren);
      var buttonWidth = areButtonsVisible ? 94 : 0;
      var padding = resizeWidth - tabsetWidth - buttonWidth;
      var delta = variant === 'line' ? 0 : 1;
      var showButtons = childrenTotalWidth > resizeWidth - padding + delta;
      this.screenWidth = window.innerWidth;
      this.scrollLeft = scrollLeft;
      this.maxScroll = scrollWidth - tabsetWidth;
      this.tabsetWidth = tabsetWidth;
      this.setState({
        areButtonsVisible: showButtons
      });
    }
  }, {
    key: "handleKeyPressed",
    value: function handleKeyPressed(event) {
      if (this.keyHandlerMap[event.keyCode]) {
        return this.keyHandlerMap[event.keyCode]();
      }

      return null;
    }
  }, {
    key: "selectTab",
    value: function selectTab(side) {
      var activeTabName = this.props.activeTabName;
      var tabsetChildren = this.tabsetChildren;
      var activeTabIndex = (0, _utils.getTabIndexFromName)(tabsetChildren, activeTabName);

      if (activeTabIndex === tabsetChildren.length - 1 && side === RIGHT_SIDE) {
        this.setAsSelectedTab(0);
      } else if (activeTabIndex === 0 && side === LEFT_SIDE) {
        this.setAsSelectedTab(tabsetChildren.length - 1);
      } else {
        this.setAsSelectedTab(activeTabIndex + side);
      }
    }
  }, {
    key: "isLeftButtonDisabled",
    value: function isLeftButtonDisabled() {
      var activeTabName = this.props.activeTabName;
      var tabsetChildren = this.tabsetChildren;
      var screenWidth = this.screenWidth,
          scrollLeft = this.scrollLeft;
      return (0, _utils.getLeftButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft
      });
    }
  }, {
    key: "isRightButtonDisabled",
    value: function isRightButtonDisabled() {
      var activeTabName = this.props.activeTabName;
      var tabsetChildren = this.tabsetChildren;
      var screenWidth = this.screenWidth,
          scrollLeft = this.scrollLeft,
          maxScroll = this.maxScroll;
      return (0, _utils.getRightButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft,
        maxScroll: maxScroll
      });
    }
  }, {
    key: "handleRightButtonClick",
    value: function handleRightButtonClick() {
      var screenWidth = this.screenWidth,
          tabsetWidth = this.tabsetWidth,
          scrollLeft = this.scrollLeft;

      if (screenWidth > 600) {
        return this.tabsetRef.current.scrollTo(scrollLeft + tabsetWidth, 0);
      }

      return this.selectTab(RIGHT_SIDE);
    }
  }, {
    key: "handleLeftButtonClick",
    value: function handleLeftButtonClick() {
      var screenWidth = this.screenWidth,
          tabsetWidth = this.tabsetWidth,
          scrollLeft = this.scrollLeft;

      if (screenWidth > 600) {
        return this.tabsetRef.current.scrollTo(scrollLeft - tabsetWidth, 0);
      }

      return this.selectTab(LEFT_SIDE);
    }
  }, {
    key: "updateTab",
    value: function updateTab(tab, nameToUpdate) {
      var tabsetChildren = this.tabsetChildren;
      var newTabsetChildren = (0, _utils.getUpdatedTabsetChildren)(tabsetChildren, tab, nameToUpdate);
      this.tabsetChildren = newTabsetChildren;
      this.setState({
        key: Date.now()
      });
    }
  }, {
    key: "registerTab",
    value: function registerTab(tab) {
      var tabsetChildren = this.tabsetChildren;

      var _getChildTabNodes = (0, _utils.getChildTabNodes)(this.tabsetRef.current),
          _getChildTabNodes2 = (0, _toArray2["default"])(_getChildTabNodes),
          nodes = _getChildTabNodes2.slice(0);

      var newChildrenRefs = (0, _utils.insertChildOrderly)(tabsetChildren, tab, nodes);
      this.tabsetChildren = newChildrenRefs;
      this.setState({
        key: Date.now()
      });
    }
  }, {
    key: "unRegisterTab",
    value: function unRegisterTab(tabName) {
      var tabsetChildren = this.tabsetChildren;
      var newTabsetChildren = tabsetChildren.filter(function (tab) {
        return tab.name !== tabName;
      });
      this.tabsetChildren = newTabsetChildren;
      this.setState({
        key: Date.now()
      });
    }
  }, {
    key: "scrollToSelectedTab",
    value: function scrollToSelectedTab(name) {
      var tabsetChildren = this.tabsetChildren;
      var tabset = this.tabsetRef.current;
      var scrollLeft = tabset.scrollLeft,
          tabsetWidth = tabset.offsetWidth;
      var tabIndex = (0, _utils.getTabIndexFromName)(tabsetChildren, name);
      var isFirstTab = tabIndex === 0;

      if (isFirstTab) {
        this.tabsetRef.current.scrollTo(0, 0);
      } else {
        var totalWidthUpToCurrentTab = (0, _utils.getChildrenTotalWidthUpToClickedTab)(tabsetChildren, tabIndex + 1);
        var totalWidthUpToPrevTab = (0, _utils.getChildrenTotalWidthUpToClickedTab)(tabsetChildren, tabIndex);
        var tabsetWidthUpToCurrentTab = tabsetWidth + scrollLeft;
        var isCurrentTabOutOfViewOnRightSide = totalWidthUpToCurrentTab > tabsetWidthUpToCurrentTab - 20;
        var isCurrentTabOutOfViewOnLeftSide = scrollLeft > totalWidthUpToPrevTab;

        if (isCurrentTabOutOfViewOnLeftSide) {
          this.tabsetRef.current.scrollTo(totalWidthUpToPrevTab, 0);
        }

        if (isCurrentTabOutOfViewOnRightSide) {
          var moveScroll = totalWidthUpToCurrentTab - tabsetWidthUpToCurrentTab + 20;
          this.tabsetRef.current.scrollTo(scrollLeft + moveScroll, 0);
        }
      }
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event, name) {
      var onSelect = this.props.onSelect;
      this.scrollToSelectedTab(name);
      onSelect(event, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeTabName = _this$props.activeTabName,
          fullWidth = _this$props.fullWidth,
          variant = _this$props.variant,
          children = _this$props.children,
          style = _this$props.style,
          className = _this$props.className,
          id = _this$props.id;
      var areButtonsVisible = this.state.areButtonsVisible;
      var screenWidth = this.screenWidth;
      var showButtons = areButtonsVisible || screenWidth < 600;
      var context = {
        activeTabName: activeTabName,
        onSelect: this.handleSelect,
        privateRegisterTab: this.registerTab,
        privateUnRegisterTab: this.unRegisterTab,
        privateUpdateTab: this.updateTab,
        fullWidth: fullWidth,
        variant: variant
      };
      return _react["default"].createElement(_container["default"], {
        variant: variant,
        className: className,
        style: style,
        id: id
      }, _react["default"].createElement(_observer["default"], {
        ref: this.resizeTarget
      }), _react["default"].createElement(_tabset["default"], {
        variant: variant
      }, _react["default"].createElement(_innerContainer["default"], {
        fullWidth: fullWidth,
        role: "tablist",
        onKeyDown: this.handleKeyPressed,
        onScroll: this.updateButtonsVisibility,
        ref: this.tabsetRef
      }, _react["default"].createElement(_context.Provider, {
        value: context
      }, children)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: showButtons
      }, _react["default"].createElement(_buttonGroup["default"], null, _react["default"].createElement(_buttonIcon["default"], {
        icon: _react["default"].createElement(_leftThinChevron["default"], null),
        disabled: this.isLeftButtonDisabled(),
        onClick: this.handleLeftButtonClick,
        assistiveText: "previus tab button",
        variant: "border-filled"
      }), _react["default"].createElement(_buttonIcon["default"], {
        icon: _react["default"].createElement(_rightThinChevron["default"], null),
        disabled: this.isRightButtonDisabled(),
        onClick: this.handleRightButtonClick,
        assistiveText: "next tab button",
        variant: "border-filled"
      })))));
    }
  }]);
  return Tabset;
}(_react.Component);

exports["default"] = Tabset;
Tabset.propTypes = {
  activeTabName: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  fullWidth: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(['card', 'line']),
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
};
Tabset.defaultProps = {
  activeTabName: undefined,
  onSelect: function onSelect() {},
  fullWidth: false,
  variant: 'card',
  className: undefined,
  style: undefined,
  children: null,
  id: undefined
};