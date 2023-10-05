import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import EventQueue from './eventQueue';

function getElementSize(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: Math.round(rect.width),
    height: Math.round(rect.height)
  };
}

function createResizeSensor() {
  var resizeSensor = document.createElement('div');
  resizeSensor.dir = 'ltr';
  resizeSensor.className = 'resize-sensor';
  var style = 'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
  var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';
  resizeSensor.style.cssText = style;
  resizeSensor.innerHTML = "<div class=\"resize-sensor-expand\" style=\"".concat(style, "\">") + "<div style=\"".concat(styleChild, "\"></div>") + '</div>' + "<div class=\"resize-sensor-shrink\" style=\"".concat(style, "\">") + "<div style=\"".concat(styleChild, " width: 200%; height: 200%\"></div>") + '</div>';
  return resizeSensor;
}

function attachResizeEvent(element, resizeListener) {
  if (!element) {
    return;
  }

  if (element.resizedAttached) {
    element.resizedAttached.add(function () {
      return resizeListener();
    });
    return;
  }

  element.resizedAttached = new EventQueue();
  element.resizedAttached.add(function () {
    return resizeListener();
  });
  var resizeSensor = createResizeSensor();
  element.resizeSensor = resizeSensor;
  element.appendChild(resizeSensor);
  var position = (window.getComputedStyle(element) || element.style).getPropertyValue('position');

  if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
    element.style.position = 'relative';
  }

  var expand = resizeSensor.childNodes[0];
  var expandChild = expand.childNodes[0];
  var shrink = resizeSensor.childNodes[1];
  var dirty;
  var rafId;
  var size = getElementSize(element);
  var lastWidth = size.width;
  var lastHeight = size.height;
  var initialHiddenCheck = true;
  var resetRafId;

  var resetExpandShrink = function resetExpandShrink() {
    expandChild.style.width = '100000px';
    expandChild.style.height = '100000px';
    expand.scrollLeft = 100000;
    expand.scrollTop = 100000;
    shrink.scrollLeft = 100000;
    shrink.scrollTop = 100000;
  };

  var reset = function reset() {
    if (initialHiddenCheck) {
      if (!expand.scrollTop && !expand.scrollLeft) {
        resetExpandShrink();

        if (!resetRafId) {
          resetRafId = requestAnimationFrame(function () {
            resetRafId = 0;
            reset();
          });
        }

        return;
      }

      initialHiddenCheck = false;
    }

    resetExpandShrink();
  };

  resizeSensor.resetSensor = reset;

  var onResized = function onResized() {
    rafId = 0;

    if (!dirty) {
      return;
    }

    lastWidth = size.width;
    lastHeight = size.height;

    if (element.resizedAttached) {
      element.resizedAttached.call(size);
    }
  };

  var onScroll = function onScroll() {
    size = getElementSize(element);
    dirty = size.width !== lastWidth || size.height !== lastHeight;

    if (dirty && !rafId) {
      rafId = requestAnimationFrame(onResized);
    }

    reset();
  };

  var addEvent = function addEvent(elem, name, callback) {
    elem.addEventListener(name, callback);
  };

  addEvent(expand, 'scroll', onScroll);
  addEvent(shrink, 'scroll', onScroll);
  requestAnimationFrame(reset);
}

function _detach(elem, listener) {
  if (!elem) {
    return;
  }

  if (elem.resizedAttached && typeof listener === 'function') {
    elem.resizedAttached.remove(listener);

    if (elem.resizedAttached.length()) {
      return;
    }
  }

  if (elem.resizeSensor) {
    if (elem.contains(elem.resizeSensor)) {
      elem.removeChild(elem.resizeSensor);
    }

    delete elem.resizeSensor;
    delete elem.resizedAttached;
  }
}

var ResizeSensor = function () {
  function ResizeSensor(element, resizeListener) {
    _classCallCheck(this, ResizeSensor);

    this.targetElement = element;
    this.resizeListener = resizeListener;
    attachResizeEvent(this.targetElement, this.resizeListener);
  }

  _createClass(ResizeSensor, [{
    key: "detach",
    value: function detach() {
      _detach(this.targetElement, this.resizeListener);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.targetElement.resizeSensor.resetSensor();
    }
  }]);

  return ResizeSensor;
}();

export { ResizeSensor as default };