var getElementBoundingClientRect = function getElementBoundingClientRect(element) {
  if (element) {
    var _element$style = element.style,
        position = _element$style.position,
        visibility = _element$style.visibility,
        display = _element$style.display;
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    var rect = element.getBoundingClientRect();
    element.style.position = position;
    element.style.visibility = visibility;
    element.style.display = display;
    return rect;
  }

  return undefined;
};

export default getElementBoundingClientRect;