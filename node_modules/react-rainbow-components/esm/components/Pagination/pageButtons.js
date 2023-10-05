import React from 'react';
import PropTypes from 'prop-types';
import getFirstItem from './getFirstItem';
import StyledPageButton from './styled/pageButton';
import StyledButton from './styled/button';
export default function PageButtons(props) {
  var pages = props.pages,
      activePage = props.activePage,
      onChange = props.onChange,
      variant = props.variant;

  var getAriaCurrent = function getAriaCurrent(page) {
    if (page === activePage) {
      return 'page';
    }

    return undefined;
  };

  var renderButtons = function renderButtons() {
    var firstItem = pages > 4 ? getFirstItem(pages, activePage) : 1;
    var buttonsToRender = pages > 4 ? 5 : pages;
    return Array(buttonsToRender).fill(0).map(function (item, index) {
      var page = firstItem + index;
      var key = "page-button-".concat(page);
      var ariaLabel = "Goto Page ".concat(page);
      var isActivePage = activePage === page;
      return React.createElement(StyledPageButton, {
        key: key,
        pages: pages,
        variant: variant
      }, React.createElement(StyledButton, {
        isActivePage: isActivePage,
        onClick: function onClick(event) {
          return onChange(event, page);
        },
        "aria-current": getAriaCurrent(page),
        "aria-label": ariaLabel,
        variant: variant
      }, React.createElement("span", null, page)));
    });
  };

  return renderButtons();
}
PageButtons.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['default', 'shaded'])
};
PageButtons.defaultProps = {
  activePage: undefined,
  variant: 'default'
};