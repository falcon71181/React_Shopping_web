import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { StyledStrenghtBar, StyledStateBar, StyledStateLabel } from './styled';
export default function StrengthBar(props) {
  var passwordState = props.passwordState,
      passwordStateLabels = props.passwordStateLabels;
  var label = useMemo(function () {
    return passwordStateLabels ? passwordStateLabels[passwordState] : undefined;
  }, [passwordState, passwordStateLabels]);
  return React.createElement(StyledStrenghtBar, null, React.createElement(StyledStateBar, {
    passwordState: passwordState
  }), React.createElement(RenderIf, {
    isTrue: label
  }, React.createElement(StyledStateLabel, {
    passwordState: passwordState
  }, label)));
}
StrengthBar.propTypes = {
  passwordState: PropTypes.oneOf(['weak', 'average', 'strong']),
  passwordStateLabels: PropTypes.shape({
    weak: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    average: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    strong: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  })
};
StrengthBar.defaultProps = {
  passwordState: undefined,
  passwordStateLabels: undefined
};