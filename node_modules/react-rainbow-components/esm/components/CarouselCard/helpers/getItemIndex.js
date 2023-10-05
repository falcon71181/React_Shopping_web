var getItemIndex = function getItemIndex(children, id) {
  return children.findIndex(function (child) {
    return child.id === id;
  });
};

export default getItemIndex;