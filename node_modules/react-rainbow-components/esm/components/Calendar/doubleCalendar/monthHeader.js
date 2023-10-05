import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderContainer, StyledMonth } from './styled';
import YearSelect from './yearSelect';
export default function MonthHeader(props) {
  var id = props.id,
      label = props.label,
      currentYear = props.currentYear,
      yearsRange = props.yearsRange,
      onYearChange = props.onYearChange;
  return React.createElement(StyledHeaderContainer, null, React.createElement(StyledMonth, {
    id: id,
    "data-id": "month"
  }, label), React.createElement(YearSelect, {
    currentYear: currentYear,
    yearsRange: yearsRange,
    onYearChange: onYearChange
  }));
}
MonthHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  currentYear: PropTypes.number,
  yearsRange: PropTypes.arrayOf(PropTypes.object),
  onYearChange: PropTypes.func
};
MonthHeader.defaultProps = {
  id: undefined,
  label: undefined,
  currentYear: undefined,
  yearsRange: undefined,
  onYearChange: function onYearChange() {}
};