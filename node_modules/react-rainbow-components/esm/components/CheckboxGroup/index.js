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
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import CheckboxList from './checkboxList';
import StyledFieldset from './styled/fieldset';
import StyledLabel from './styled/label';
import StyledContentContainer from './styled/contentContainer';
import StyledTextError from '../Input/styled/errorText';

var CheckboxGroup = function (_Component) {
  _inherits(CheckboxGroup, _Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _super.call(this, props);
    _this.errorMessageId = uniqueId('error-message');
    _this.groupNameId = props.name || uniqueId('options');
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.props.value;

      if (typeof value === 'string') {
        return [];
      }

      return value;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event) {
      var _event$target = event.target,
          value = _event$target.value,
          checked = _event$target.checked;
      var _this$props = this.props,
          values = _this$props.value,
          onChange = _this$props.onChange;

      if (checked && Array.isArray(values)) {
        return onChange(values.concat([value]));
      }

      if (checked && !Array.isArray(values)) {
        return onChange([value]);
      }

      return onChange(values.filter(function (valueId) {
        return valueId !== value;
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          options = _this$props2.options,
          required = _this$props2.required,
          label = _this$props2.label,
          labelAlignment = _this$props2.labelAlignment,
          hideLabel = _this$props2.hideLabel,
          error = _this$props2.error,
          style = _this$props2.style,
          className = _this$props2.className,
          orientation = _this$props2.orientation;
      return React.createElement(StyledFieldset, {
        id: id,
        className: className,
        style: style
      }, React.createElement(RenderIf, {
        isTrue: label
      }, React.createElement(StyledLabel, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        forwardedAs: "legend"
      })), React.createElement(StyledContentContainer, {
        orientation: orientation
      }, React.createElement(CheckboxList, {
        values: this.getValue(),
        options: options,
        onChange: this.handleOnChange,
        name: this.groupNameId,
        describedBy: this.getErrorMessageId(),
        error: error
      })), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledTextError, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return CheckboxGroup;
}(Component);

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.string,
    disabled: PropTypes.bool,
    description: PropTypes.string
  })),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  orientation: PropTypes.oneOf(['vertical', 'horizontal'])
};
CheckboxGroup.defaultProps = {
  options: [],
  value: [],
  label: null,
  labelAlignment: 'left',
  hideLabel: false,
  name: undefined,
  onChange: function onChange() {},
  required: false,
  error: null,
  className: undefined,
  style: undefined,
  id: undefined,
  orientation: 'vertical'
};
export default withReduxForm(CheckboxGroup);