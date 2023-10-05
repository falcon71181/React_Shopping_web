import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var TYPE = ['group', 'integer', 'minusSign'];
export default function formatInteger(_ref) {
  var integer = _ref.integer,
      locale = _ref.locale,
      options = _ref.options;
  var formatter = new Intl.NumberFormat(locale, _objectSpread(_objectSpread({}, options), {}, {
    minimumIntegerDigits: undefined
  }));
  var parts = formatter.formatToParts(Number(integer));
  return parts.reduce(function (acc, _ref2) {
    var type = _ref2.type,
        value = _ref2.value;

    if (TYPE.includes(type)) {
      return acc + value;
    }

    return acc;
  }, '');
}