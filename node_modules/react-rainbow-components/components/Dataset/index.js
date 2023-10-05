"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dataset;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = _interopRequireDefault(require("../Chart/context"));

var _hooks = require("../../libs/hooks");

var _excluded = ["title", "values"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Dataset(props) {
  var datasetId = (0, _hooks.useUniqueIdentifier)('dataset');
  var label = props.title,
      data = props.values,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _React$useContext = _react["default"].useContext(_context["default"]),
      registerDataset = _React$useContext.registerDataset,
      unregisterDataset = _React$useContext.unregisterDataset,
      updateDataset = _React$useContext.updateDataset;

  var isRegistered = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isRegistered.current) {
      updateDataset(datasetId, _objectSpread({
        label: label,
        data: data
      }, rest));
    }
  });
  (0, _react.useEffect)(function () {
    registerDataset(datasetId, _objectSpread({
      label: label,
      data: data
    }, rest));
    isRegistered.current = true;
    return function () {
      if (isRegistered.current) {
        unregisterDataset(datasetId);
        isRegistered.current = false;
      }
    };
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null);
}

Dataset.propTypes = {
  type: _propTypes["default"].oneOf(['line']),
  values: _propTypes["default"].arrayOf(_propTypes["default"].number),
  title: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  borderColor: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  stack: _propTypes["default"].string,
  fill: _propTypes["default"].bool
};
Dataset.defaultProps = {
  type: undefined,
  values: [],
  title: 'Dataset',
  backgroundColor: undefined,
  borderColor: undefined,
  stack: undefined,
  fill: false
};