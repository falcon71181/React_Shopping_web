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
import StyledContainer from './styled/container';
import StyledIndicatorList from './styled/indicatorList';

var ProgressIndicator = function (_Component) {
  _inherits(ProgressIndicator, _Component);

  var _super = _createSuper(ProgressIndicator);

  function ProgressIndicator(props) {
    var _this;

    _classCallCheck(this, ProgressIndicator);

    _this = _super.call(this, props);
    _this.stepChildren = [];
    _this.numbersMap = {};
    _this.registerStep = _this.registerStep.bind(_assertThisInitialized(_this));
    _this.setChildrenState = _this.setChildrenState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProgressIndicator, [{
    key: "setChildrenState",
    value: function setChildrenState(step) {
      var currentStepName = this.props.currentStepName;
      var activeStepIndex = this.stepChildren.findIndex(function (item) {
        return item.name === currentStepName;
      });
      var currentChildIndex = this.stepChildren.findIndex(function (item) {
        return item.name === step.name;
      });

      if (currentChildIndex === activeStepIndex) {
        step.onSetStepState('Active');
      } else if (activeStepIndex === -1 || currentChildIndex < activeStepIndex) {
        step.onSetStepState('Completed');
      } else if (currentChildIndex > activeStepIndex) {
        step.onSetStepState('Inactive');
      }
    }
  }, {
    key: "registerStep",
    value: function registerStep(step) {
      var newChildrenRefs = this.stepChildren.concat([step]);
      this.stepChildren = newChildrenRefs;
      var name = step.name;
      this.numbersMap[name] = newChildrenRefs.length;
      this.setChildrenState(step);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          variant = _this$props.variant,
          children = _this$props.children,
          currentStepName = _this$props.currentStepName,
          onClick = _this$props.onClick;
      var context = {
        currentStepName: currentStepName,
        privateRegisterStep: this.registerStep,
        privateOnClick: onClick,
        setChildrenState: this.setChildrenState,
        numbersMap: this.numbersMap,
        variant: variant
      };
      return React.createElement(StyledContainer, {
        className: className,
        style: style
      }, React.createElement(StyledIndicatorList, null, React.createElement(Provider, {
        value: context
      }, children)));
    }
  }]);

  return ProgressIndicator;
}(Component);

export { ProgressIndicator as default };
ProgressIndicator.propTypes = {
  currentStepName: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'numeric']),
  onClick: PropTypes.func,
  children: PropTypes.node
};
ProgressIndicator.defaultProps = {
  currentStepName: '',
  className: undefined,
  style: undefined,
  variant: 'default',
  onClick: function onClick() {},
  children: null
};