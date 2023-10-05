var isChildRegistered = function isChildRegistered(_ref) {
  var children = _ref.children,
      id = _ref.id;
  return children.findIndex(function (child) {
    return child.id === id;
  }) !== -1;
};

export default isChildRegistered;