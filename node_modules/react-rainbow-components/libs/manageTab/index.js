"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = manageTab;

var _findTabbableElements = _interopRequireDefault(require("./findTabbableElements"));

function manageTab(node, event) {
  var tabbable = (0, _findTabbableElements["default"])(node);

  if (!tabbable.length) {
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];
  var target;

  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] !== 'Chrome' && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
  if (!isSafariDesktop) return;
  var elem = tabbable.indexOf(document.activeElement);

  if (elem > -1) {
    elem += shiftKey ? -1 : 1;
  }

  event.preventDefault();
  tabbable[elem].focus();
}