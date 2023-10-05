import React from 'react';
import PropTypes from 'prop-types';
import useMarkdownToReact from './hooks/useMarkdownToReact';
import StyledContainer from './styled';
import { defaultRenderer, inlineRenderer } from './renderers';
export default function MarkdownOutput(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      value = props.value,
      variant = props.variant;
  var renderer = variant === 'inline' ? inlineRenderer : defaultRenderer;
  var result = useMarkdownToReact(value, renderer);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style,
    variant: variant
  }, result);
}
MarkdownOutput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'inline'])
};
MarkdownOutput.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  value: '',
  variant: 'default'
};