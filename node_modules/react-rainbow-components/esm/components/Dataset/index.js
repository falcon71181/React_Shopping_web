import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["title", "values"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChartContext from '../Chart/context';
import { useUniqueIdentifier } from '../../libs/hooks';
export default function Dataset(props) {
  var datasetId = useUniqueIdentifier('dataset');

  var label = props.title,
      data = props.values,
      rest = _objectWithoutProperties(props, _excluded);

  var _React$useContext = React.useContext(ChartContext),
      registerDataset = _React$useContext.registerDataset,
      unregisterDataset = _React$useContext.unregisterDataset,
      updateDataset = _React$useContext.updateDataset;

  var isRegistered = useRef();
  useEffect(function () {
    if (isRegistered.current) {
      updateDataset(datasetId, _objectSpread({
        label: label,
        data: data
      }, rest));
    }
  });
  useEffect(function () {
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
  return React.createElement(React.Fragment, null);
}
Dataset.propTypes = {
  type: PropTypes.oneOf(['line']),
  values: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string,
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  stack: PropTypes.string,
  fill: PropTypes.bool
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