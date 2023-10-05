import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RadioItems from './radioItems';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import StyledFieldset from './styled/fieldset';
import StyledLabel from './styled/label';
import StyledTextError from '../Input/styled/errorText';
import StyledContentContainer from './styled/contentContainer';

var RadioGroup = function (_Component) {
  _inherits(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _super.call(this, props);
    _this.errorId = uniqueId('error-message');
    _this.groupNameId = props.name || uniqueId('options');
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorId;
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          label = _this$props.label,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          required = _this$props.required,
          error = _this$props.error,
          onChange = _this$props.onChange,
          options = _this$props.options,
          value = _this$props.value,
          id = _this$props.id,
          orientation = _this$props.orientation;
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
      }, React.createElement(RadioItems, {
        value: value,
        onChange: onChange,
        options: options,
        name: this.groupNameId,
        ariaDescribedby: this.getErrorMessageId(),
        error: error
      })), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledTextError, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return RadioGroup;
}(Component);

RadioGroup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.string,
    disabled: PropTypes.bool,
    description: PropTypes.string
  })),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  orientation: PropTypes.oneOf(['vertical', 'horizontal'])
};
RadioGroup.defaultProps = {
  label: null,
  labelAlignment: 'left',
  hideLabel: false,
  name: null,
  className: undefined,
  style: undefined,
  value: undefined,
  onChange: function onChange() {},
  required: false,
  options: [],
  error: null,
  id: undefined,
  orientation: 'vertical'
};
export default withReduxForm(RadioGroup);