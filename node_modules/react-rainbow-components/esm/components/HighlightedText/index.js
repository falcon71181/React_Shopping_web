import React from 'react';
import PropTypes from 'prop-types';
import HitText from './hitText';
import HighlighContainer from './highlighContainer';
import { DefaultHitContainer, DefaultTextContainer } from './styled/index';
export default function HighlightedText(props) {
  var style = props.style,
      className = props.className,
      parts = props.parts,
      hitComponent = props.hitComponent,
      textComponent = props.textComponent,
      isInline = props.isInline;
  var finalHitContainer = hitComponent || DefaultHitContainer;
  var finalTextContainer = textComponent || DefaultTextContainer;
  return React.createElement(HighlighContainer, {
    className: className,
    style: style,
    isInline: isInline
  }, React.createElement(HitText, {
    parts: parts,
    hitComponent: finalHitContainer,
    textComponent: finalTextContainer
  }));
}
HighlightedText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  parts: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.string,
    type: PropTypes.string
  })),
  hitComponent: PropTypes.elementType,
  textComponent: PropTypes.elementType,
  isInline: PropTypes.bool
};
HighlightedText.defaultProps = {
  className: undefined,
  style: undefined,
  parts: undefined,
  hitComponent: undefined,
  textComponent: undefined,
  isInline: false
};