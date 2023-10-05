import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ESCAPE_KEY, ENTER_KEY } from '../../../libs/constants';
import RenderIf from '../../RenderIf';
import { StyledInput, StyledButtonIcon, StyledSpan, SpanContainer, RelativeInputContainer, StyledEditIcon } from './styled/editableCell';
import Cancel from './icons/cancel';
export default function EditableCell(props) {
  var value = props.value,
      onChange = props.onChange,
      row = props.row,
      field = props.field;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditMode = _useState2[0],
      setIsEditMode = _useState2[1];

  var _useState3 = useState(value),
      _useState4 = _slicedToArray(_useState3, 2),
      internalValue = _useState4[0],
      setInternalValue = _useState4[1];

  var inputRef = useRef(null);
  useEffect(function () {
    if (isEditMode) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  var clear = function clear(event) {
    event.preventDefault();
    inputRef.current.focus();
    setInternalValue('');
  };

  var handleOnChange = function handleOnChange(event) {
    setInternalValue(event.target.value);
  };

  var fireOnChange = function fireOnChange() {
    if (value !== internalValue) {
      onChange({
        value: internalValue,
        row: row
      });
    }

    setIsEditMode(false);
  };

  var handleOnClick = function handleOnClick() {
    setIsEditMode(true);
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (event.keyCode === ESCAPE_KEY) {
      setInternalValue(value);
      setIsEditMode(false);
    }

    if (event.keyCode === ENTER_KEY) {
      fireOnChange();
    }
  };

  return React.createElement(React.Fragment, null, React.createElement(RenderIf, {
    isTrue: !isEditMode
  }, React.createElement(SpanContainer, {
    onClick: handleOnClick
  }, React.createElement(StyledSpan, {
    title: value
  }, value), React.createElement(StyledEditIcon, null))), React.createElement(RenderIf, {
    isTrue: isEditMode
  }, React.createElement(RelativeInputContainer, null, React.createElement(StyledInput, {
    value: internalValue,
    onChange: handleOnChange,
    ref: inputRef,
    "aria-label": field,
    onBlur: fireOnChange,
    onKeyDown: handleOnKeyDown
  }), React.createElement(StyledButtonIcon, {
    variant: "base",
    icon: React.createElement(Cancel, null),
    size: "medium",
    onMouseDown: clear,
    assistiveText: "Clear"
  }))));
}
EditableCell.propTypes = {
  value: PropTypes.any,
  row: PropTypes.object,
  onChange: PropTypes.func,
  field: PropTypes.string
};
EditableCell.defaultProps = {
  value: undefined,
  row: {},
  onChange: function onChange() {},
  field: undefined
};