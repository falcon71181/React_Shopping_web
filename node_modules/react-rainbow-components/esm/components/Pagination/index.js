import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';
import NavigationButton from './navigationButton';
import PageButtonsContainer from './pageButtonsContainer';
import StyledNav from './styled/nav';
import StyledPaginationContainer from './styled/paginationContainer';
export default function Pagination(props) {
  var pages = props.pages,
      activePage = props.activePage,
      onChange = props.onChange,
      className = props.className,
      style = props.style,
      variant = props.variant;
  var isFirstItemSelected = activePage === 1;
  var isLastItemSelected = activePage === pages;
  return React.createElement(StyledNav, {
    className: className,
    "aria-label": "pagination",
    style: style
  }, React.createElement(StyledPaginationContainer, null, React.createElement(NavigationButton, {
    dataId: "previous-page-button",
    icon: React.createElement(LeftArrow, null),
    onClick: function onClick(event) {
      return onChange(event, activePage - 1);
    },
    disabled: isFirstItemSelected,
    ariaLabel: "Goto Previous Page",
    variant: variant
  }), React.createElement(PageButtonsContainer, {
    onChange: onChange,
    pages: pages,
    activePage: activePage,
    variant: variant
  }), React.createElement(NavigationButton, {
    dataId: "next-page-button",
    icon: React.createElement(RightArrow, null),
    onClick: function onClick(event) {
      return onChange(event, activePage + 1);
    },
    disabled: isLastItemSelected,
    ariaLabel: "Goto Next Page",
    variant: variant
  })));
}
Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded'])
};
Pagination.defaultProps = {
  activePage: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  variant: 'default'
};