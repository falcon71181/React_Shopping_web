"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageButtons;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getFirstItem = _interopRequireDefault(require("./getFirstItem"));

var _pageButton = _interopRequireDefault(require("./styled/pageButton"));

var _button = _interopRequireDefault(require("./styled/button"));

function PageButtons(props) {
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
    var firstItem = pages > 4 ? (0, _getFirstItem["default"])(pages, activePage) : 1;
    var buttonsToRender = pages > 4 ? 5 : pages;
    return Array(buttonsToRender).fill(0).map(function (item, index) {
      var page = firstItem + index;
      var key = "page-button-".concat(page);
      var ariaLabel = "Goto Page ".concat(page);
      var isActivePage = activePage === page;
      return _react["default"].createElement(_pageButton["default"], {
        key: key,
        pages: pages,
        variant: variant
      }, _react["default"].createElement(_button["default"], {
        isActivePage: isActivePage,
        onClick: function onClick(event) {
          return onChange(event, page);
        },
        "aria-current": getAriaCurrent(page),
        "aria-label": ariaLabel,
        variant: variant
      }, _react["default"].createElement("span", null, page)));
    });
  };

  return renderButtons();
}

PageButtons.propTypes = {
  activePage: _propTypes["default"].number,
  pages: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  variant: _propTypes["default"].oneOf(['default', 'shaded'])
};
PageButtons.defaultProps = {
  activePage: undefined,
  variant: 'default'
};