"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../../libs/constants");

var _counterManager = _interopRequireDefault(require("../../../libs/counterManager"));

var _manageTab = _interopRequireDefault(require("../../../libs/manageTab"));

var _scrollController = require("../../../libs/scrollController");

var _ = _interopRequireDefault(require(".."));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _footer = _interopRequireDefault(require("../styled/footer"));

var _content = _interopRequireDefault(require("../styled/content"));

var _closeButton = _interopRequireDefault(require("../styled/closeButton"));

jest.mock('../../../libs/counterManager', function () {
  return {
    increment: jest.fn(),
    decrement: jest.fn(),
    hasModalsOpen: jest.fn(function () {
      return false;
    })
  };
});
jest.mock('../../../libs/manageTab', function () {
  return jest.fn();
});
jest.mock('../../../libs/scrollController', function () {
  return {
    disableBodyScroll: jest.fn(),
    enableBodyScroll: jest.fn(),
    clearAllBodyScrollLocks: jest.fn()
  };
});
describe('<Drawer />', function () {
  beforeEach(function () {
    _manageTab["default"].mockReset();

    _scrollController.disableBodyScroll.mockReset();

    _scrollController.enableBodyScroll.mockReset();

    _scrollController.clearAllBodyScrollLocks.mockReset();
  });
  afterEach(function () {
    jest.clearAllMocks();
  });
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", {
      "data-id": "drawer-children"
    }, "drawer content")));
    expect(component.find('p[data-id="drawer-children"]').text()).toBe('drawer content');
  });
  it('should render the footer passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      footer: "drawer footer"
    }, _react["default"].createElement("p", null)));
    expect(component.find(_footer["default"]).text()).toBe('drawer footer');
  });
  it('should set tabIndex as -1 in section element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
  });
  it('should set the same generated id to section as aria-labelledby and to Header as id', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(/drawer-header/);
    expect(component.find('Header').prop('id')).toMatch(/drawer-header/);
  });
  it('should set the same generated id to section as aria-describedby and to children container as id', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(/drawer-content/);
    expect(component.find(_content["default"]).prop('id')).toMatch(/drawer-content/);
  });
  it('should set aria-modal to true in section element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
  });
  it('should set aria-hidden to false in section element when drawer is open', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
  });
  it('should fire an event when the close button is clicked and the drawer is open', function () {
    var closeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      onRequestClose: closeMockFn
    }, _react["default"].createElement("p", null)));
    component.find(_ButtonIcon["default"]).simulate('click');
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire an event when the drawer is opened', function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(done) {
      var onOpenedMockFn;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expect.assertions(1);
              onOpenedMockFn = jest.fn();
              (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
                isOpen: true,
                onOpened: onOpenedMockFn
              }, _react["default"].createElement("p", null)));
              setTimeout(function () {
                expect(onOpenedMockFn).toHaveBeenCalledTimes(1);
                done();
              }, 300);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it('should fire an event when the ESC key is pressed and the drawer is open', function () {
    var closeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      onRequestClose: closeMockFn
    }, _react["default"].createElement("p", null)));
    component.find('div[role="presentation"]').simulate('keyDown', {
      keyCode: 27
    });
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call disableBodyScroll when open the drawer', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(_scrollController.disableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should call enableBodyScroll when drawer is closed', function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(done) {
      var component;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              expect.assertions(1);
              component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
                isOpen: true
              }, _react["default"].createElement("p", null)));
              component.setProps({
                isOpen: false
              });
              setTimeout(function () {
                expect(_scrollController.enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
                done();
              }, 300);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  it('should call CounterManager.decrement when the component unmount and it is open', function () {
    _counterManager["default"].decrement.mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    component.unmount();
    expect(_counterManager["default"].decrement).toHaveBeenCalledTimes(1);
  });
  it('should not call CounterManager.decrement when the component unmount and it is not open', function () {
    _counterManager["default"].decrement.mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: false
    }, _react["default"].createElement("p", null)));
    component.unmount();
    expect(_counterManager["default"].decrement).not.toHaveBeenCalled();
  });
  it('should render the close button by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }, _react["default"].createElement("p", null)));
    expect(component.find(_closeButton["default"]).exists()).toBe(true);
  });
  it('should not render the close button when the hideCloseButton prop is equal to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true,
      hideCloseButton: true
    }, _react["default"].createElement("p", null)));
    expect(component.find(_closeButton["default"]).exists()).toBe(false);
  });
  it('should call manageTab when opened and TAB key is pressed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      isOpen: true
    }));
    component.simulate('keyDown', {
      keyCode: _constants.TAB_KEY
    });
    expect(_manageTab["default"]).toHaveBeenCalled();
  });
});