export default function getValueAlignment(_ref) {
  var valueAlignment = _ref.valueAlignment,
      isCentered = _ref.isCentered;

  if (valueAlignment) {
    return valueAlignment;
  }

  if (isCentered) {
    return 'center';
  }

  return undefined;
}