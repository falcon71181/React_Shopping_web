import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';
import StyledImage from './styled/image';
import StyledImageFooter from './styled/imageFooter';
import StyledFooterTitle from './styled/footerTitle';
import StyledFooterDescription from './styled/footerDescription';
export default function ImageContainer(props) {
  var imageSrc = props.imageSrc,
      assistiveText = props.assistiveText,
      hasContent = props.hasContent,
      header = props.header,
      description = props.description;
  return React.createElement(React.Fragment, null, React.createElement(StyledImage, {
    style: imageSrc
  }), React.createElement(AssistiveText, {
    text: assistiveText
  }), React.createElement(RenderIf, {
    isTrue: hasContent
  }, React.createElement(StyledImageFooter, null, React.createElement(RenderIf, {
    isTrue: header
  }, React.createElement(StyledFooterTitle, {
    title: "Imagen Header"
  }, header)), React.createElement(RenderIf, {
    isTrue: description
  }, React.createElement(StyledFooterDescription, null, description)))));
}
ImageContainer.propTypes = {
  imageSrc: PropTypes.object,
  assistiveText: PropTypes.string,
  hasContent: PropTypes.bool.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
ImageContainer.defaultProps = {
  imageSrc: {},
  assistiveText: undefined,
  header: undefined,
  description: undefined
};