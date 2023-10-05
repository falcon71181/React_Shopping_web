import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import PageButtons from './pageButtons';
import ButtonsContainer from './styled/buttonsContainer';
export default function PageButtonsContainer(props) {
  var pages = props.pages,
      activePage = props.activePage,
      onChange = props.onChange,
      variant = props.variant;
  var isShaded = variant === 'shaded';
  return React.createElement(React.Fragment, null, React.createElement(RenderIf, {
    isTrue: isShaded
  }, React.createElement(ButtonsContainer, null, React.createElement(PageButtons, {
    onChange: onChange,
    pages: pages,
    activePage: activePage,
    variant: variant
  }))), React.createElement(RenderIf, {
    isTrue: !isShaded
  }, React.createElement(PageButtons, {
    onChange: onChange,
    pages: pages,
    activePage: activePage,
    variant: variant
  })));
}
PageButtonsContainer.propTypes = {
  pages: PropTypes.number.isRequired,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'shaded'])
};
PageButtonsContainer.defaultProps = {
  activePage: undefined,
  onChange: function onChange() {},
  variant: 'default'
};