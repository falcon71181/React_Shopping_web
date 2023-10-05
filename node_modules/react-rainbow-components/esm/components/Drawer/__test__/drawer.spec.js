import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import { TAB_KEY } from '../../../libs/constants';
import CounterManager from '../../../libs/counterManager';
import manageTab from '../../../libs/manageTab';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from '../../../libs/scrollController';
import Drawer from '..';
import ButtonIcon from '../../ButtonIcon';
import StyledFooter from '../styled/footer';
import StyledContent from '../styled/content';
import StyledCloseButton from '../styled/closeButton';
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
    manageTab.mockReset();
    disableBodyScroll.mockReset();
    enableBodyScroll.mockReset();
    clearAllBodyScrollLocks.mockReset();
  });
  afterEach(function () {
    jest.clearAllMocks();
  });
  it('should render the children passed', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", {
      "data-id": "drawer-children"
    }, "drawer content")));
    expect(component.find('p[data-id="drawer-children"]').text()).toBe('drawer content');
  });
  it('should render the footer passed', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true,
      footer: "drawer footer"
    }, React.createElement("p", null)));
    expect(component.find(StyledFooter).text()).toBe('drawer footer');
  });
  it('should set tabIndex as -1 in section element', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
  });
  it('should set the same generated id to section as aria-labelledby and to Header as id', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(/drawer-header/);
    expect(component.find('Header').prop('id')).toMatch(/drawer-header/);
  });
  it('should set the same generated id to section as aria-describedby and to children container as id', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(/drawer-content/);
    expect(component.find(StyledContent).prop('id')).toMatch(/drawer-content/);
  });
  it('should set aria-modal to true in section element', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
  });
  it('should set aria-hidden to false in section element when drawer is open', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
  });
  it('should fire an event when the close button is clicked and the drawer is open', function () {
    var closeMockFn = jest.fn();
    var component = mount(React.createElement(Drawer, {
      isOpen: true,
      onRequestClose: closeMockFn
    }, React.createElement("p", null)));
    component.find(ButtonIcon).simulate('click');
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should fire an event when the drawer is opened', function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(done) {
      var onOpenedMockFn;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expect.assertions(1);
              onOpenedMockFn = jest.fn();
              mount(React.createElement(Drawer, {
                isOpen: true,
                onOpened: onOpenedMockFn
              }, React.createElement("p", null)));
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
    var component = mount(React.createElement(Drawer, {
      isOpen: true,
      onRequestClose: closeMockFn
    }, React.createElement("p", null)));
    component.find('div[role="presentation"]').simulate('keyDown', {
      keyCode: 27
    });
    expect(closeMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call disableBodyScroll when open the drawer', function () {
    mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(disableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
  });
  it('should call enableBodyScroll when drawer is closed', function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(done) {
      var component;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              expect.assertions(1);
              component = mount(React.createElement(Drawer, {
                isOpen: true
              }, React.createElement("p", null)));
              component.setProps({
                isOpen: false
              });
              setTimeout(function () {
                expect(enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
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
    CounterManager.decrement.mockReset();
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    component.unmount();
    expect(CounterManager.decrement).toHaveBeenCalledTimes(1);
  });
  it('should not call CounterManager.decrement when the component unmount and it is not open', function () {
    CounterManager.decrement.mockReset();
    var component = mount(React.createElement(Drawer, {
      isOpen: false
    }, React.createElement("p", null)));
    component.unmount();
    expect(CounterManager.decrement).not.toHaveBeenCalled();
  });
  it('should render the close button by default', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }, React.createElement("p", null)));
    expect(component.find(StyledCloseButton).exists()).toBe(true);
  });
  it('should not render the close button when the hideCloseButton prop is equal to true', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true,
      hideCloseButton: true
    }, React.createElement("p", null)));
    expect(component.find(StyledCloseButton).exists()).toBe(false);
  });
  it('should call manageTab when opened and TAB key is pressed', function () {
    var component = mount(React.createElement(Drawer, {
      isOpen: true
    }));
    component.simulate('keyDown', {
      keyCode: TAB_KEY
    });
    expect(manageTab).toHaveBeenCalled();
  });
});