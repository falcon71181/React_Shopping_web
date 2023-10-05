import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["error", "input", "meta"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useMemo } from 'react';
export default function useReduxForm(props) {
  var propError = props.error,
      input = props.input,
      meta = props.meta,
      rest = _objectWithoutProperties(props, _excluded);

  var error = useMemo(function () {
    if (meta) {
      var touched = meta.touched,
          submitFailed = meta.submitFailed,
          metaError = meta.error;

      if ((touched || submitFailed) && metaError) {
        return metaError;
      }
    }

    return propError;
  }, [propError, meta]);
  return _objectSpread(_objectSpread(_objectSpread({}, rest), input), {}, {
    error: error,
    dirty: meta && meta.dirty
  });
}