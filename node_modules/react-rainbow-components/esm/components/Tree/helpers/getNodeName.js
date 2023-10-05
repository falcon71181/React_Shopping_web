var getNodeName = function getNodeName(_ref) {
  var parentName = _ref.parentName,
      index = _ref.index;
  var nodeLevel = index + 1;

  if (parentName) {
    return "".concat(parentName, ".").concat(nodeLevel);
  }

  return "node-".concat(nodeLevel);
};

export default getNodeName;