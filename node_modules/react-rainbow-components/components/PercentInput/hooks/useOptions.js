"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useOptions;

var _react = require("react");

function useOptions(props) {
  var minimumIntegerDigits = props.minimumIntegerDigits,
      minimumFractionDigits = props.minimumFractionDigits,
      maximumFractionDigits = props.maximumFractionDigits,
      minimumSignificantDigits = props.minimumSignificantDigits,
      maximumSignificantDigits = props.maximumSignificantDigits;
  return (0, _react.useMemo)(function () {
    return {
      style: 'percent',
      minimumIntegerDigits: minimumIntegerDigits,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      minimumSignificantDigits: minimumSignificantDigits,
      maximumSignificantDigits: maximumSignificantDigits
    };
  }, [maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits, minimumIntegerDigits, minimumSignificantDigits]);
}