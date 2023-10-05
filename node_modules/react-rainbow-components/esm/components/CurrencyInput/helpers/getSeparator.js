var NUMBER = 100000.99;
export default function getSeparator(_ref) {
  var locale = _ref.locale,
      type = _ref.type,
      style = _ref.style,
      currency = _ref.currency;
  var formatter = new Intl.NumberFormat(locale, {
    style: style,
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  var parts = formatter.formatToParts(NUMBER);
  return parts.find(function (part) {
    return part.type === type;
  }).value;
}