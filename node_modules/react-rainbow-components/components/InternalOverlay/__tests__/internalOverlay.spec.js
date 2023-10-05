"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var scroll = _interopRequireWildcard(require("../../../libs/scrollController"));

var resolver = _interopRequireWildcard(require("../ContentMetaResolver"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mockDisableScroll = jest.fn();
var mockEnableScroll = jest.fn();
scroll.disableBodyScroll = mockDisableScroll;
scroll.enableBodyScroll = mockEnableScroll;
describe('<InternalOverlay />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
    mockDisableScroll.mockReset();
    mockEnableScroll.mockReset();
  });
  it('should render if isVisible is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      isVisible: true
    }));
    expect(component.find('[id="test-id"]').exists()).toBe(true);
  });
  it('should not render if isVisible is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {}
    }));
    expect(component.find('[id="test-id"]').exists()).toBe(false);
  });
  it('should disable scroll when isVisible is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {}
    }));
    component.setProps({
      isVisible: true
    });
    component.setProps({});
    expect(mockDisableScroll).toHaveBeenCalledTimes(1);
  });
  it('should enable scroll when isVisible is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      isVisible: true
    }));
    mockEnableScroll.mockClear();
    component.setProps({
      isVisible: false
    });
    expect(mockEnableScroll).toHaveBeenCalledTimes(1);
  });
  it('should resolve content meta', function () {
    var mockContentMetaResolver = jest.spyOn(resolver, 'default');
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      isVisible: true
    }));
    expect(mockContentMetaResolver).toHaveBeenCalledTimes(1);
  });
  it('should call positionResolver with the right parameters when it is passed', function () {
    var positionResolverMock = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      positionResolver: positionResolverMock,
      isVisible: true
    }));
    expect(positionResolverMock).toHaveBeenCalledWith({
      content: expect.any(Object),
      trigger: expect.any(Object),
      viewport: expect.any(Object)
    });
  });
  it('should call onOpened when isVisible is true', function () {
    var onOpenedMock = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      onOpened: onOpenedMock,
      isVisible: true
    }));
    expect(onOpenedMock).toHaveBeenCalledTimes(1);
  });
  it('should not call onOpened when isVisible is false', function () {
    var onOpenedMock = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: {},
      onOpened: onOpenedMock
    }));
    expect(onOpenedMock).not.toHaveBeenCalled();
  });
  it('should call triggerElementRef when triggerElementRef is a function', function () {
    var triggerElementRefMock = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      render: function render() {
        return _react["default"].createElement("div", {
          id: "test-id"
        });
      },
      triggerElementRef: triggerElementRefMock,
      isVisible: true
    }));
    expect(triggerElementRefMock).toHaveBeenCalledTimes(1);
  });
});