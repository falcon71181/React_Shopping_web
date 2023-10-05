import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import ButtonItems from './buttonItems';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import Marker from './marker';
import StyledErrorText from './styled/errorText';
import isOptionChecked from './helpers/isOptionChecked';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledButtonItemsContainer from './styled/buttonItemsContainer';

var RadioButtonGroup = function (_Component) {
  _inherits(RadioButtonGroup, _Component);

  var _super = _createSuper(RadioButtonGroup);

  function RadioButtonGroup(props) {
    var _this;

    _classCallCheck(this, RadioButtonGroup);

    _this = _super.call(this, props);
    _this.errorId = uniqueId('error-message');
    _this.groupNameId = props.name || uniqueId('options');
    _this.optionsRefs = _this.generateRefsForOptions();
    _this.state = {
      options: _this.addRefsToOptions(props.options),
      markerLeft: 0,
      markerWidth: 0
    };
    return _this;
  }

  _createClass(RadioButtonGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.updateMarker();
      }, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          options = _this$props.options,
          value = _this$props.value;

      if (prevProps.options !== options) {
        this.updateRefs();
      }

      if (prevProps.value !== value) {
        this.updateMarker();
      }
    }
  }, {
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorId;
      }

      return undefined;
    }
  }, {
    key: "getCheckedOptionRef",
    value: function getCheckedOptionRef() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          options = _this$props2.options;
      var currentOptionIndex = options.findIndex(function (option) {
        return isOptionChecked(option, value);
      });
      return currentOptionIndex !== -1 ? this.optionsRefs[currentOptionIndex] : null;
    }
  }, {
    key: "generateRefsForOptions",
    value: function generateRefsForOptions() {
      var options = this.props.options;
      return options.map(function () {
        return React.createRef();
      });
    }
  }, {
    key: "addRefsToOptions",
    value: function addRefsToOptions(options) {
      var _this3 = this;

      return options.map(function (option, index) {
        return _objectSpread(_objectSpread({}, option), {}, {
          optionRef: _this3.optionsRefs[index]
        });
      });
    }
  }, {
    key: "isMarkerActive",
    value: function isMarkerActive() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          options = _this$props3.options;
      return options.some(function (option) {
        return !option.disabled && option.value === value;
      });
    }
  }, {
    key: "updateMarker",
    value: function updateMarker() {
      var activeOptionRef = this.getCheckedOptionRef();

      if (activeOptionRef && activeOptionRef.current) {
        this.setState({
          markerLeft: activeOptionRef.current.offsetLeft,
          markerWidth: Math.max(activeOptionRef.current.offsetWidth, activeOptionRef.current.clientWidth)
        });
      }
    }
  }, {
    key: "updateRefs",
    value: function updateRefs() {
      var _this4 = this;

      var options = this.props.options;
      this.optionsRefs = this.generateRefsForOptions();
      this.setState({
        options: this.addRefsToOptions(options)
      });
      setTimeout(function () {
        _this4.updateMarker();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          style = _this$props4.style,
          className = _this$props4.className,
          label = _this$props4.label,
          labelAlignment = _this$props4.labelAlignment,
          hideLabel = _this$props4.hideLabel,
          required = _this$props4.required,
          error = _this$props4.error,
          value = _this$props4.value,
          id = _this$props4.id,
          onChange = _this$props4.onChange,
          variant = _this$props4.variant,
          size = _this$props4.size,
          borderRadius = _this$props4.borderRadius;
      var _this$state = this.state,
          options = _this$state.options,
          markerLeft = _this$state.markerLeft,
          markerWidth = _this$state.markerWidth;
      var markerStyle = {
        left: markerLeft,
        width: markerWidth
      };
      return React.createElement(StyledContainer, {
        id: id,
        className: className,
        style: style
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(StyledLabel, {
        label: label,
        variant: variant,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        forwardedAs: "legend"
      })), React.createElement(StyledButtonItemsContainer, {
        variant: variant,
        size: size,
        borderRadius: borderRadius
      }, React.createElement(Marker, {
        variant: variant,
        isVisible: this.isMarkerActive(),
        style: markerStyle,
        size: size,
        borderRadius: borderRadius
      }), React.createElement(ButtonItems, {
        value: value,
        onChange: onChange,
        options: options,
        name: this.groupNameId,
        required: required,
        ariaDescribedby: this.getErrorMessageId(),
        variant: variant,
        size: size,
        borderRadius: borderRadius
      })), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledErrorText, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return RadioButtonGroup;
}(Component);

RadioButtonGroup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.string,
    disabled: PropTypes.bool
  })),
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
RadioButtonGroup.defaultProps = {
  label: null,
  labelAlignment: 'center',
  hideLabel: false,
  name: null,
  className: undefined,
  style: undefined,
  value: undefined,
  variant: 'default',
  onChange: function onChange() {},
  required: false,
  options: [],
  size: 'medium',
  borderRadius: 'rounded',
  error: null,
  id: undefined
};
export default withReduxForm(RadioButtonGroup);