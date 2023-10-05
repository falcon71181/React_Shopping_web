"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ActionsCell;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonMenu = _interopRequireDefault(require("../../ButtonMenu"));

var _more = _interopRequireDefault(require("./icons/more"));

var _cellContainer = _interopRequireDefault(require("./styled/cellContainer"));

var _actionCell = _interopRequireDefault(require("./styled/actionCell"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MenuItems(_ref) {
  var children = _ref.children,
      rowData = _ref.rowData;
  return _react["default"].Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return _objectSpread(_objectSpread({}, child), {}, {
        props: _objectSpread(_objectSpread({}, child.props), {}, {
          rowData: rowData,
          onClick: function onClick(event) {
            return child.props.onClick(event, rowData);
          }
        })
      });
    }

    return null;
  }, null);
}

function ActionsCell(props) {
  var columnChildren = props.columnChildren,
      rowsLength = props.rowsLength,
      rowIndex = props.rowIndex,
      rowData = props.rowData;

  if (columnChildren) {
    var getMenuAlignment = function getMenuAlignment() {
      var menuItemsLength = columnChildren.length || 1;
      var rowLengthToBottom = rowsLength - (rowIndex + 1);
      var alignMenuAtBottom;

      if (rowsLength / 2 > menuItemsLength) {
        alignMenuAtBottom = rowLengthToBottom <= menuItemsLength;
      } else {
        alignMenuAtBottom = rowIndex > menuItemsLength;
      }

      if (alignMenuAtBottom) {
        return 'bottom-right';
      }

      return 'right';
    };

    return _react["default"].createElement(_cellContainer["default"], {
      role: "gridcell",
      tabIndex: -1
    }, _react["default"].createElement(_actionCell["default"], null, _react["default"].createElement(_ButtonMenu["default"], {
      tabIndex: -1,
      icon: _react["default"].createElement(_more["default"], null),
      menuAlignment: getMenuAlignment(),
      buttonSize: "small"
    }, _react["default"].createElement(MenuItems, {
      rowData: rowData
    }, columnChildren))));
  }

  return null;
}

ActionsCell.propTypes = {
  columnChildren: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  rowsLength: _propTypes["default"].number,
  rowIndex: _propTypes["default"].number,
  rowData: _propTypes["default"].object
};
ActionsCell.defaultProps = {
  columnChildren: undefined,
  rowsLength: undefined,
  rowIndex: undefined,
  rowData: {}
};