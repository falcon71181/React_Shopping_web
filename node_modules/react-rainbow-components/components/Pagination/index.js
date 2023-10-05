"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pagination;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _leftArrow = _interopRequireDefault(require("./leftArrow"));

var _rightArrow = _interopRequireDefault(require("./rightArrow"));

var _navigationButton = _interopRequireDefault(require("./navigationButton"));

var _pageButtonsContainer = _interopRequireDefault(require("./pageButtonsContainer"));

var _nav = _interopRequireDefault(require("./styled/nav"));

var _paginationContainer = _interopRequireDefault(require("./styled/paginationContainer"));

function Pagination(props) {
  var pages = props.pages,
      activePage = props.activePage,
      onChange = props.onChange,
      className = props.className,
      style = props.style,
      variant = props.variant;
  var isFirstItemSelected = activePage === 1;
  var isLastItemSelected = activePage === pages;
  return _react["default"].createElement(_nav["default"], {
    className: className,
    "aria-label": "pagination",
    style: style
  }, _react["default"].createElement(_paginationContainer["default"], null, _react["default"].createElement(_navigationButton["default"], {
    dataId: "previous-page-button",
    icon: _react["default"].createElement(_leftArrow["default"], null),
    onClick: function onClick(event) {
      return onChange(event, activePage - 1);
    },
    disabled: isFirstItemSelected,
    ariaLabel: "Goto Previous Page",
    variant: variant
  }), _react["default"].createElement(_pageButtonsContainer["default"], {
    onChange: onChange,
    pages: pages,
    activePage: activePage,
    variant: variant
  }), _react["default"].createElement(_navigationButton["default"], {
    dataId: "next-page-button",
    icon: _react["default"].createElement(_rightArrow["default"], null),
    onClick: function onClick(event) {
      return onChange(event, activePage + 1);
    },
    disabled: isLastItemSelected,
    ariaLabel: "Goto Next Page",
    variant: variant
  })));
}

Pagination.propTypes = {
  pages: _propTypes["default"].number.isRequired,
  activePage: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded'])
};
Pagination.defaultProps = {
  activePage: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined,
  variant: 'default'
};