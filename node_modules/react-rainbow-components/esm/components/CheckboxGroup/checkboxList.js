import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["description"];
import React from 'react';
import PropTypes from 'prop-types';
import isOptionSelected from './isOptionSelected';
import Checkbox from '../Input/inputCheckbox/checkbox';
import StyledItemContainer from '../RadioGroup/styled/itemContainer';
import StyledItemDescription from '../RadioGroup/styled/itemDescription';
import RenderIf from '../RenderIf';
export default function CheckboxList(props) {
  var values = props.values,
      options = props.options,
      onChange = props.onChange,
      describedBy = props.describedBy,
      name = props.name,
      error = props.error;
  return options.map(function (option, index) {
    var key = "checkbox-".concat(index);

    var description = option.description,
        rest = _objectWithoutProperties(option, _excluded);

    return React.createElement(StyledItemContainer, {
      key: key,
      "data-id": "input-checkboxgroup_container"
    }, React.createElement(Checkbox, _extends({}, rest, {
      checked: isOptionSelected(values, option),
      onChange: onChange,
      ariaDescribedBy: describedBy,
      name: name,
      error: error
    })), React.createElement(RenderIf, {
      isTrue: description
    }, React.createElement(StyledItemDescription, null, description)));
  });
}
CheckboxList.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
  values: PropTypes.array,
  onChange: PropTypes.func,
  describedBy: PropTypes.string
};
CheckboxList.defaultProps = {
  values: [],
  onChange: function onChange() {},
  describedBy: undefined,
  name: undefined
};