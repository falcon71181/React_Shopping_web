import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledLabel from './styled/label';
import StyledNotification from './styled/notification';
export default function ItemContent(_ref) {
  var label = _ref.label,
      notification = _ref.notification;
  return React.createElement(React.Fragment, null, React.createElement(StyledLabel, null, label), React.createElement(RenderIf, {
    isTrue: notification
  }, React.createElement(StyledNotification, null, notification)));
}
ItemContent.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  notification: PropTypes.node
};
ItemContent.defaultProps = {
  label: '',
  notification: undefined
};