"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WindowScrolling", {
  enumerable: true,
  get: function get() {
    return _windowScrolling["default"];
  }
});
exports.clearAllBodyScrollLocks = clearAllBodyScrollLocks;
exports.disableBodyScroll = disableBodyScroll;
exports.enableBodyScroll = enableBodyScroll;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _windowScrolling = _interopRequireDefault(require("./windowScrolling"));

var hasPassiveEvents = false;

if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }

  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting;
var previousBodyPaddingRight;

function allowTouchMove(element) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(element)) {
      return true;
    }

    return false;
  });
}

function preventDefault(rawEvent) {
  var event = rawEvent || window.event;

  if (allowTouchMove(event.target)) {
    return true;
  }

  if (event.touches.length > 1) return true;
  if (event.preventDefault) event.preventDefault();
  return false;
}

function setOverflowHidden(options) {
  setTimeout(function () {
    if (previousBodyPaddingRight === undefined) {
      var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
      var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = "".concat(scrollBarGap, "px");
      }
    }

    if (previousBodyOverflowSetting === undefined) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  });
}

function restoreOverflowSetting() {
  setTimeout(function () {
    if (previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = previousBodyPaddingRight;
      previousBodyPaddingRight = undefined;
    }

    if (previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = previousBodyOverflowSetting;
      previousBodyOverflowSetting = undefined;
    }
  });
}

function isTargetElementTotallyScrolled(targetElement) {
  if (targetElement) {
    return targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight;
  }

  return false;
}

function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
}

function disableBodyScroll(targetElement, options) {
  if (isIosDevice) {
    if (!targetElement) {
      console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
      return;
    }

    if (targetElement && !locks.some(function (lock) {
      return lock.targetElement === targetElement;
    })) {
      var lock = {
        targetElement: targetElement,
        options: options || {}
      };
      locks = [].concat((0, _toConsumableArray2["default"])(locks), [lock]);

      targetElement.ontouchstart = function (event) {
        if (event.targetTouches.length === 1) {
          initialClientY = event.targetTouches[0].clientY;
        }
      };

      targetElement.ontouchmove = function (event) {
        if (event.targetTouches.length === 1) {
          handleScroll(event, targetElement);
        }
      };

      if (!documentListenerAdded) {
        document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = true;
      }
    }
  } else {
    setOverflowHidden(options);
    var _lock = {
      targetElement: targetElement,
      options: options || {}
    };
    locks = [].concat((0, _toConsumableArray2["default"])(locks), [_lock]);
  }
}

function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }

    locks = [];
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
    locks = [];
  }
}

function enableBodyScroll(targetElement) {
  if (isIosDevice) {
    if (!targetElement) {
      console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
      return;
    }

    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    locks = locks.filter(function (lock) {
      return lock.targetElement !== targetElement;
    });

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }
  } else {
    locks = locks.filter(function (lock) {
      return lock.targetElement !== targetElement;
    });

    if (!locks.length) {
      restoreOverflowSetting();
    }
  }
}