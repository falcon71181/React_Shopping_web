import React from 'react';
import PropTypes from 'prop-types';
import StyledAssignFieldTitle from './styled/assignFieldTitle';

var AssignFieldModalTitle = function AssignFieldModalTitle(_ref) {
  var field = _ref.field;
  return React.createElement(StyledAssignFieldTitle, null, "Assign to the field: ", React.createElement("b", null, field));
};

AssignFieldModalTitle.propTypes = {
  field: PropTypes.string
};
AssignFieldModalTitle.defaultProps = {
  field: ''
};
export default AssignFieldModalTitle;