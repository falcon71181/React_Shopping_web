"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingCells;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _columns = require("../helpers/columns");

var _tdLoadingContainer = _interopRequireDefault(require("./styled/tdLoadingContainer"));

var _loadingCell = _interopRequireDefault(require("./styled/loadingCell"));

var _elementLoading = _interopRequireDefault(require("./styled/elementLoading"));

var widths = ['40%', '60%', '70%', '85%', '95%'];

function getRandomWidth() {
  return widths[Math.floor(Math.random() * widths.length)];
}

function LoadingCells(_ref) {
  var value = _ref.value,
      columns = _ref.columns;

  if (value > 0) {
    return Array(columns.length).fill().map(function (item, index) {
      var key = "loading-cell-".concat(index);
      var type = columns[index].type;
      var isActionOrSelectable = type === _columns.SELECTABLE_CHECKBOX || type === 'action';
      var styles = {
        width: isActionOrSelectable ? '100%' : getRandomWidth()
      };
      return _react["default"].createElement(_tdLoadingContainer["default"], {
        key: key
      }, _react["default"].createElement(_loadingCell["default"], {
        "data-id": "table_body--loading"
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: index < value
      }, _react["default"].createElement(_elementLoading["default"], {
        style: styles
      }))));
    });
  }

  return null;
}

LoadingCells.propTypes = {
  value: _propTypes["default"].number,
  columns: _propTypes["default"].array
};
LoadingCells.defaultProps = {
  value: 0,
  columns: []
};