import isContentHidden from './isContentHidden';
var tabbableNode = /input|select|textarea|button|object/;

function isVisible(element) {
  var parentElement = element;

  while (parentElement) {
    if (parentElement === document.body) break;
    if (isContentHidden(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }

  return true;
}

function isFocusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === 'a' ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && isVisible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && isFocusable(element, !isTabIndexNaN);
}

export default function findTabbableElements(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}