export default function getActiveStepIndex(params) {
  var hoveredIndex = params.hoveredIndex,
      selectedIndex = params.selectedIndex;
  if (hoveredIndex !== -1) return hoveredIndex;
  return selectedIndex;
}