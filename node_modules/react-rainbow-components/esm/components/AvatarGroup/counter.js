import React from 'react';
import PropTypes from 'prop-types';
import StyledCounter from './styled/counter';
import { getSuffixSI } from '../../libs/utils';
export default function Counter(props) {
  var avatars = props.avatars,
      size = props.size;
  var total = avatars.length;
  return React.createElement(StyledCounter, {
    size: size
  }, React.createElement("h1", null, getSuffixSI(total)));
}
Counter.propTypes = {
  avatars: PropTypes.array,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large'])
};
Counter.defaultProps = {
  avatars: [],
  size: 'medium'
};