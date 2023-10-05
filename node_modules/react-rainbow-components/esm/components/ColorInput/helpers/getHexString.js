var getHexString = function getHexString(value) {
  if (typeof value !== 'string') return '';
  return value.startsWith('#') ? value : "#".concat(value);
};

export default getHexString;