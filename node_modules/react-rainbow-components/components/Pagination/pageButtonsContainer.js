"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageButtonsContainer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _pageButtons = _interopRequireDefault(require("./pageButtons"));

var _buttonsContainer = _interopRequireDefault(require("./styled/buttonsContainer"));

function PageButtonsContainer(props) {
  var pages = props.pages,
      activePage = props.activePage,
      onChange = props.onChange,
      variant = props.variant;
  var isShaded = variant === 'shaded';
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: isShaded
  }, _react["default"].createElement(_buttonsContainer["default"], null, _react["default"].createElement(_pageButtons["default"], {
    onChange: onChange,
    pages: pages,
    activePage: activePage,
    variant: variant
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: !isShaded
  }, _react["default"].createElement(_pageButtons["default"], {
    onChange: onChange,
    pages: pages,
    activePage: activePage,
    variant: variant
  })));
}

PageButtonsContainer.propTypes = {
  pages: _propTypes["default"].number.isRequired,
  activePage: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  variant: _propTypes["default"].oneOf(['default', 'shaded'])
};
PageButtonsContainer.defaultProps = {
  activePage: undefined,
  onChange: function onChange() {},
  variant: 'default'
};