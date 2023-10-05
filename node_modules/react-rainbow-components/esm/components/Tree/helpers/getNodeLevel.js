var getNodeLevel = function getNodeLevel(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name;
  var levelMatch = name.match(/\./g);

  if (levelMatch) {
    return levelMatch.length + 1;
  }

  return 1;
};

export default getNodeLevel;