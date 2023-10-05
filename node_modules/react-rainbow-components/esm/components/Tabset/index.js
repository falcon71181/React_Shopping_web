import _toArray from "@babel/runtime/helpers/toArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import RenderIf from '../RenderIf';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';
import { getChildTabNodes, insertChildOrderly, getTabIndexFromName, getChildrenTotalWidth, getChildrenTotalWidthUpToClickedTab, isNotSameChildren, getUpdatedTabsetChildren, getRightButtonDisabledState, getLeftButtonDisabledState } from './utils';
import RightThinChevron from './rightThinChevron';
import LeftThinChevron from './leftThinChevron';
import ResizeSensor from '../../libs/ResizeSensor';
import debounce from '../../libs/debounce';
import StyledContainer from './styled/container';
import StyledObserver from './styled/observer';
import StyledTabset from './styled/tabset';
import StyledInnerContainer from './styled/innerContainer';
import StyledButtonGroup from './styled/buttonGroup';
import StyledButtonIcon from './styled/buttonIcon';
var RIGHT_SIDE = 1;
var LEFT_SIDE = -1;

var Tabset = function (_Component) {
  _inherits(Tabset, _Component);

  var _super = _createSuper(Tabset);

  function Tabset(props) {
    var _this$keyHandlerMap;

    var _this;

    _classCallCheck(this, Tabset);

    _this = _super.call(this, props);
    _this.state = {
      key: Date.now(),
      areButtonsVisible: false
    };
    _this.isFirstTime = true;
    _this.tabsetRef = React.createRef();
    _this.resizeTarget = React.createRef();
    _this.registerTab = _this.registerTab.bind(_assertThisInitialized(_this));
    _this.unRegisterTab = _this.unRegisterTab.bind(_assertThisInitialized(_this));
    _this.updateTab = _this.updateTab.bind(_assertThisInitialized(_this));
    _this.handleKeyPressed = _this.handleKeyPressed.bind(_assertThisInitialized(_this));
    _this.handleLeftButtonClick = _this.handleLeftButtonClick.bind(_assertThisInitialized(_this));
    _this.handleRightButtonClick = _this.handleRightButtonClick.bind(_assertThisInitialized(_this));
    _this.updateButtonsVisibility = _this.updateButtonsVisibility.bind(_assertThisInitialized(_this));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, _defineProperty(_this$keyHandlerMap, RIGHT_KEY, function () {
      return _this.selectTab(RIGHT_SIDE);
    }), _defineProperty(_this$keyHandlerMap, LEFT_KEY, function () {
      return _this.selectTab(LEFT_SIDE);
    }), _this$keyHandlerMap);
    _this.tabsetChildren = [];
    return _this;
  }

  _createClass(Tabset, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.widthObserver = new ResizeSensor(this.resizeTarget.current, debounce(this.updateButtonsVisibility, 100));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProp) {
      var children = this.props.children;
      var isFirstTime = this.isFirstTime;
      var areAllChildrenRegistered = children.length === this.tabsetChildren.length;

      if (isNotSameChildren(children, prevProp.children)) {
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
      var childrenTotalWidth = getChildrenTotalWidth(this.tabsetChildren);
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
      var activeTabIndex = getTabIndexFromName(tabsetChildren, activeTabName);

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
      return getLeftButtonDisabledState({
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
      return getRightButtonDisabledState({
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
      var newTabsetChildren = getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate);
      this.tabsetChildren = newTabsetChildren;
      this.setState({
        key: Date.now()
      });
    }
  }, {
    key: "registerTab",
    value: function registerTab(tab) {
      var tabsetChildren = this.tabsetChildren;

      var _getChildTabNodes = getChildTabNodes(this.tabsetRef.current),
          _getChildTabNodes2 = _toArray(_getChildTabNodes),
          nodes = _getChildTabNodes2.slice(0);

      var newChildrenRefs = insertChildOrderly(tabsetChildren, tab, nodes);
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
      var tabIndex = getTabIndexFromName(tabsetChildren, name);
      var isFirstTab = tabIndex === 0;

      if (isFirstTab) {
        this.tabsetRef.current.scrollTo(0, 0);
      } else {
        var totalWidthUpToCurrentTab = getChildrenTotalWidthUpToClickedTab(tabsetChildren, tabIndex + 1);
        var totalWidthUpToPrevTab = getChildrenTotalWidthUpToClickedTab(tabsetChildren, tabIndex);
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
      return React.createElement(StyledContainer, {
        variant: variant,
        className: className,
        style: style,
        id: id
      }, React.createElement(StyledObserver, {
        ref: this.resizeTarget
      }), React.createElement(StyledTabset, {
        variant: variant
      }, React.createElement(StyledInnerContainer, {
        fullWidth: fullWidth,
        role: "tablist",
        onKeyDown: this.handleKeyPressed,
        onScroll: this.updateButtonsVisibility,
        ref: this.tabsetRef
      }, React.createElement(Provider, {
        value: context
      }, children)), React.createElement(RenderIf, {
        isTrue: showButtons
      }, React.createElement(StyledButtonGroup, null, React.createElement(StyledButtonIcon, {
        icon: React.createElement(LeftThinChevron, null),
        disabled: this.isLeftButtonDisabled(),
        onClick: this.handleLeftButtonClick,
        assistiveText: "previus tab button",
        variant: "border-filled"
      }), React.createElement(StyledButtonIcon, {
        icon: React.createElement(RightThinChevron, null),
        disabled: this.isRightButtonDisabled(),
        onClick: this.handleRightButtonClick,
        assistiveText: "next tab button",
        variant: "border-filled"
      })))));
    }
  }]);

  return Tabset;
}(Component);

export { Tabset as default };
Tabset.propTypes = {
  activeTabName: PropTypes.string,
  onSelect: PropTypes.func,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['card', 'line']),
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
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