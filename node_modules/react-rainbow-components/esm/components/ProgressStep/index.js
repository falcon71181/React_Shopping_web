import _extends from "@babel/runtime/helpers/extends";
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
import { Consumer } from '../ProgressIndicator/context';
import DoneIcon from './doneIcon';
import ErrorIcon from './errorIcon';
import StyledStep from './styled/step';
import StyledStepButton from './styled/stepButton';
import StyledInactiveIcon from './styled/inactiveIcon';
import StyledActiveIcon from './styled/activeIcon';
import StyledLabel from './styled/label';
import RenderIf from '../RenderIf';
import StyledStepNumberButton from './styled/stepNumberButton';
import InternalTooltip from '../InternalTooltip';
import { WindowScrolling } from '../../libs/scrollController';
var iconMap = {
  Error: function Error() {
    return React.createElement(ErrorIcon, null);
  },
  Completed: function Completed() {
    return React.createElement(DoneIcon, null);
  },
  Active: function Active() {
    return React.createElement(StyledActiveIcon, null);
  },
  Inactive: function Inactive() {
    return React.createElement(StyledInactiveIcon, null);
  }
};

var StepItem = function (_Component) {
  _inherits(StepItem, _Component);

  var _super = _createSuper(StepItem);

  function StepItem(props) {
    var _this;

    _classCallCheck(this, StepItem);

    _this = _super.call(this, props);
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_this));
    _this.setStepState = _this.setStepState.bind(_assertThisInitialized(_this));
    _this.showTooltip = _this.showTooltip.bind(_assertThisInitialized(_this));
    _this.hideTooltip = _this.hideTooltip.bind(_assertThisInitialized(_this));
    _this.windowScrolling = new WindowScrolling();
    _this.triggerRef = React.createRef();
    _this.state = {
      stepState: 'Inactive'
    };
    return _this;
  }

  _createClass(StepItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          privateRegisterStep = _this$props.privateRegisterStep,
          name = _this$props.name;
      return setTimeout(function () {
        return privateRegisterStep({
          name: name,
          onSetStepState: _this2.setStepState
        });
      }, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevCurrentStepName = _ref.currentStepName;
      var _this$props2 = this.props,
          currentStepName = _this$props2.currentStepName,
          name = _this$props2.name;
      var setChildrenState = this.props.setChildrenState;

      if (prevCurrentStepName !== currentStepName) {
        setChildrenState({
          name: name,
          onSetStepState: this.setStepState
        });
      }
    }
  }, {
    key: "setStepState",
    value: function setStepState(stepState) {
      var hasError = this.props.hasError;

      if (hasError) {
        return this.setState({
          stepState: 'Error'
        });
      }

      return this.setState({
        stepState: stepState
      });
    }
  }, {
    key: "getAssistiveText",
    value: function getAssistiveText() {
      var label = this.props.label;
      var stepState = this.state.stepState;

      if (label && stepState !== 'Inactive') {
        return "".concat(label, " - ").concat(stepState);
      }

      if (label) {
        return label;
      }

      if (stepState) {
        return stepState;
      }

      return '';
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var stepState = this.state.stepState;

      if (iconMap[stepState]) {
        return iconMap[stepState]();
      }

      return null;
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.windowScrolling.startListening(this.hideTooltip);
      this.setState({
        isTooltipVisible: true
      });
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      var isTooltipVisible = this.state.isTooltipVisible;
      this.windowScrolling.stopListening();

      if (isTooltipVisible) {
        this.setState({
          isTooltipVisible: false
        });
      }
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      var _this$props3 = this.props,
          privateOnClick = _this$props3.privateOnClick,
          name = _this$props3.name;
      return privateOnClick(event, name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          label = _this$props4.label,
          className = _this$props4.className,
          variant = _this$props4.variant,
          name = _this$props4.name,
          numbersMap = _this$props4.numbersMap,
          tooltip = _this$props4.tooltip;
      var _this$state = this.state,
          stepState = _this$state.stepState,
          isTooltipVisible = _this$state.isTooltipVisible;
      var shouldRenderNumber = variant === 'numeric' && (stepState === 'Inactive' || stepState === 'Active');
      return React.createElement(StyledStep, {
        className: className,
        onMouseEnter: this.showTooltip,
        onMouseLeave: this.hideTooltip,
        ref: this.triggerRef
      }, React.createElement(RenderIf, {
        isTrue: !shouldRenderNumber
      }, React.createElement(StyledStepButton, {
        stepState: stepState,
        icon: this.getIcon(),
        onClick: this.handleOnClick,
        assistiveText: this.getAssistiveText()
      })), React.createElement(RenderIf, {
        isTrue: shouldRenderNumber
      }, React.createElement(StyledStepNumberButton, {
        stepState: stepState,
        onClick: this.handleOnClick,
        assistiveText: this.getAssistiveText()
      }, numbersMap[name])), React.createElement(StyledLabel, {
        stepState: stepState
      }, label), React.createElement(RenderIf, {
        isTrue: tooltip
      }, React.createElement(InternalTooltip, {
        triggerElementRef: function triggerElementRef() {
          return _this3.triggerRef;
        },
        isVisible: isTooltipVisible,
        preferredPosition: "top"
      }, tooltip)));
    }
  }]);

  return StepItem;
}(Component);

export default function ProgressStep(props) {
  return React.createElement(Consumer, null, function (context) {
    return React.createElement(StepItem, _extends({}, props, context));
  });
}
ProgressStep.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  hasError: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  tooltip: PropTypes.string
};
ProgressStep.defaultProps = {
  name: '',
  label: '',
  hasError: false,
  className: undefined,
  style: undefined,
  tooltip: undefined
};