import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useEffect, useCallback, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { HiddenElement } from '../../../Structural';
import { useUniqueIdentifier } from '../../../../libs/hooks';
import Options from './options';
import { StyledContainer, StyledSelect } from './styled';
var YearSelect = React.forwardRef(function (props, ref) {
  var currentYear = props.currentYear,
      yearsRange = props.yearsRange,
      onYearChange = props.onYearChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      tabIndex = props.tabIndex;
  var selectRef = useRef();
  var selectId = useUniqueIdentifier('select');

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditMode = _useState2[0],
      setEditMode = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  useImperativeHandle(ref, function () {
    return selectRef.current;
  }, []);
  var handleYearChange = useCallback(function (value) {
    selectRef.current.blur();
    onYearChange(value);
  }, [onYearChange, selectRef]);
  var handleMouseEnter = useCallback(function () {
    if (!isFocused) setEditMode(true);
  }, [isFocused]);
  var handleMouseLeave = useCallback(function () {
    if (!isFocused) setEditMode(false);
  }, [isFocused]);
  var handleSelectFocus = useCallback(function () {
    onFocus();
    setIsFocused(true);
  }, [onFocus]);
  var handleSelectBlur = useCallback(function () {
    onBlur();
    setIsFocused(false);
  }, [onBlur]);
  useEffect(function () {
    setEditMode(isFocused);
  }, [isFocused]);
  return React.createElement(StyledContainer, {
    editMode: isEditMode,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, React.createElement(HiddenElement, {
    as: "label",
    htmlFor: selectId
  }, "select year"), React.createElement(StyledSelect, {
    id: selectId,
    ref: selectRef,
    value: currentYear,
    editMode: isEditMode,
    onClick: onClick,
    onChange: handleYearChange,
    onFocus: handleSelectFocus,
    onBlur: handleSelectBlur,
    tabIndex: tabIndex
  }, React.createElement(Options, {
    options: yearsRange
  })));
});
YearSelect.propTypes = {
  currentYear: PropTypes.number,
  yearsRange: PropTypes.arrayOf(PropTypes.object),
  onYearChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
YearSelect.defaultProps = {
  currentYear: undefined,
  yearsRange: [],
  onYearChange: function onYearChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  tabIndex: undefined
};
export default YearSelect;