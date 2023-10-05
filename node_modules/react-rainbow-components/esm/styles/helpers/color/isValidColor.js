import { isServer } from '../../../libs/utils';
export default function isValidColor(color) {
  if (isServer) return true;
  var element = document.createElement('a');
  element.style.color = color;
  return element.style.color !== '';
}