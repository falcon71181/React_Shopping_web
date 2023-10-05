var getTabIndex = function getTabIndex(_ref) {
  var name = _ref.name,
      selectedNode = _ref.selectedNode,
      isSelected = _ref.isSelected,
      isFirstNode = _ref.isFirstNode,
      focusedNode = _ref.focusedNode;

  if (focusedNode && name === focusedNode || isSelected && !focusedNode || isFirstNode && !selectedNode && !focusedNode) {
    return 0;
  }

  return -1;
};

export default getTabIndex;